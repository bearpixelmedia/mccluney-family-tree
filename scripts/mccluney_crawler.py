#!/usr/bin/env python3
"""
McCluney Family Research Crawler

Starter script to discover McCluney ancestors from public genealogy sources.
Currently focused on WikiTree API (free, structured data, 155+ McCluney profiles).

Usage:
  python mccluney_crawler.py --search "McCluney" --limit 20
  python mccluney_crawler.py --profile "McCluney-89"   # Specific profile

Outputs: findings.json with structured data ready to review and merge into the website's js/data.js

Requirements:
  pip install requests

Extend this script to add Find A Grave scraping, FamilySearch (public), or other sources.
Always verify results against primary records.
"""

import argparse
import json
import requests
from datetime import datetime

WIKITREE_API = "https://api.wikitree.com/api.php"


def search_wikitree(last_name="McCluney", first_name=None, limit=20):
    """Search WikiTree for profiles using searchPerson action."""
    params = {
        "format": "json",
        "action": "searchPerson",
        "LastName": last_name,
        "limit": limit,
        "fields": "Id,Name,FirstName,LastName,BirthDate,DeathDate,BirthLocation,DeathLocation,Father,Mother,Spouses,Children"
    }
    if first_name:
        params["FirstName"] = first_name
    
    try:
        response = requests.get(WIKITREE_API, params=params, timeout=30)
        response.raise_for_status()
        data = response.json()
        return data.get("matches", [])
    except Exception as e:
        print(f"Error searching WikiTree: {e}")
        return []


def get_wikitree_profile(profile_key):
    """Fetch detailed profile using getProfile action."""
    params = {
        "format": "json",
        "action": "getProfile",
        "key": profile_key,
        "fields": "Id,Name,FirstName,LastName,BirthDate,DeathDate,BirthLocation,DeathLocation,Father,Mother,Spouses,Children,Bio"
    }
    try:
        response = requests.get(WIKITREE_API, params=params, timeout=30)
        response.raise_for_status()
        return response.json()
    except Exception as e:
        print(f"Error fetching profile {profile_key}: {e}")
        return None


def normalize_profile(match):
    """Convert WikiTree match to our family data schema."""
    profile = match.get("profile", {})
    return {
        "id": None,  # Assign new ID when merging
        "name": profile.get("Name", ""),
        "birth": profile.get("BirthDate", ""),
        "death": profile.get("DeathDate", ""),
        "birthPlace": profile.get("BirthLocation", ""),
        "deathPlace": profile.get("DeathLocation", ""),
        "parents": [],  # Populate from Father/Mother if available
        "spouses": [],
        "children": [],
        "bio": profile.get("Bio", "")[:500] if profile.get("Bio") else "Discovered via WikiTree crawler.",
        "photo": "https://picsum.photos/id/1005/400/400",  # Placeholder
        "generation": None,
        "sources": [f"https://www.wikitree.com/wiki/{profile.get('Name', '')}"],
        "wikitree_id": profile.get("Name", ""),
        "raw_match": match  # Keep for debugging
    }


def main():
    parser = argparse.ArgumentParser(description="McCluney Research Crawler")
    parser.add_argument("--search", default="McCluney", help="Last name or search term")
    parser.add_argument("--first", help="First name filter")
    parser.add_argument("--limit", type=int, default=20, help="Max results")
    parser.add_argument("--profile", help="Fetch specific WikiTree profile key (e.g. McCluney-89)")
    parser.add_argument("--output", default="findings.json", help="Output JSON file")
    args = parser.parse_args()

    print("McCluney Research Crawler starting...")
    print(f"Searching WikiTree for: {args.search}")

    if args.profile:
        profile_data = get_wikitree_profile(args.profile)
        findings = [profile_data] if profile_data else []
    else:
        matches = search_wikitree(args.search, args.first, args.limit)
        findings = [normalize_profile(m) for m in matches]

    print(f"Found {len(findings)} profiles.")

    # Save results
    with open(args.output, "w", encoding="utf-8") as f:
        json.dump({
            "timestamp": datetime.now().isoformat(),
            "source": "WikiTree API",
            "query": args.search,
            "count": len(findings),
            "findings": findings
        }, f, indent=2, ensure_ascii=False)

    print(f"Results saved to {args.output}")
    print("Review the file, verify data, then merge useful entries into js/data.js")
    print("Example: Add new people with unique IDs and update parent/spouse/children arrays.")


if __name__ == "__main__":
    main()