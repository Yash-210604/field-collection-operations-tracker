# Field Collection Operations Tracker

## Overview
A data-driven operations management project built using Google Sheets, Google Apps Script, and Looker Studio to monitor field collection performance, data quality, compliance, and resource availability.

The project simulates an operational environment where managers need visibility into operator productivity, collection quality, upload timelines, consent compliance, and camera fleet status.

## Business Problem
Field operations involve multiple operators, collection sites, uploads, and equipment. Without centralized monitoring, operational issues can go unnoticed, affecting productivity, data quality, and compliance.

This project addresses that challenge through centralized tracking, KPI monitoring, automated issue detection, and dashboard-based reporting.

## Tools & Technologies
- Google Sheets – Operational data management and KPI calculations
- Google Apps Script – Automated issue detection and email alerts
- Looker Studio – Interactive operations dashboard
- Data Analysis – KPI tracking, exception monitoring, and operational reporting

## Key Performance Indicators
| KPI | Result |
|---|---:|
| Weekly Target Attainment | 86.25% |
| Same-Day Upload Compliance | 50% |
| Quality Acceptance Rate | 75% |
| Camera Availability | 60% |
| Consent Compliance | 80% |

## Dashboard Features
- Operator onboarding overview
- Weekly target vs actual performance
- Upload compliance distribution
- Collection quality distribution
- Operational issues by category
- Detailed operational issue register
- Operator, site, issue type, and date filters

## Automation Features
Google Apps Script automatically:
- Identifies rejected collections
- Flags missing consent
- Detects pending uploads
- Tracks pending equipment deposits
- Identifies cameras under repair
- Generates an operational issue register
- Sends daily email alerts containing detected issues

## Project Workflow
1. Operational records are maintained in Google Sheets.
2. KPI formulas calculate performance and compliance metrics.
3. Apps Script detects operational exceptions.
4. Automated alerts communicate issues to stakeholders.
5. Looker Studio visualizes KPIs and operational issues.

## Business Insights
- Weekly target attainment is below the 100% target.
- Same-day upload compliance requires improvement.
- Quality rejection and missing consent need operational follow-up.
- Camera availability indicates potential equipment constraints.
- Automated exception monitoring helps prioritize corrective actions.

  
- ## Live Dashboard
[View Interactive Looker Studio Dashboard](https://datastudio.google.com/reporting/8c0c13ef-1ffa-4299-b565-83433982a388)

## Disclaimer
This project uses simulated operational data for demonstration and portfolio purposes. KPI results represent the sample dataset and are not real business performance.

## Author
Yash Chauhan  
B.Tech Electrical Engineering | Punjab Engineering College

