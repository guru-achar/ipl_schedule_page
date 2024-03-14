import React, { useState } from "react";
import Match from "./Match";

const Schedule = () => {
  const [matches] = useState([
    {
      id: 1,
      date: "Sat Mar 26 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Chennai Super Kings",
      away_team: "Kolkata Knight Riders",
      venue: "Wankhede Stadium",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/CSK/logos/Roundbig/CSKroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/KKR/Logos/Roundbig/KKRroundbig.png",
    },
    {
      id: 2,
      date: "Sun Mar 27 2022",
      time: "03:30",
      "pm/am": "PM",
      home_team: "Delhi Capitals",
      away_team: "Mumbai Indians",
      venue: "Brabourne - CCI",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/DC/Logos/Roundbig/DCroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/MI/Logos/Roundbig/MIroundbig.png",
    },
    {
      id: 3,
      date: "Sun Mar 27 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Punjab Kings",
      away_team: "Royal Challengers Bangalore",
      venue: "DY Patil Stadium",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/PBKS/Logos/Roundbig/PBKSroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RCB/Logos/Roundbig/RCBroundbig.png",
    },
    {
      id: 4,
      date: "Mon Mar 28 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Gujarat Titans",
      away_team: "Lucknow Super Giants",
      venue: "Wankhede Stadium",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/GT/Logos/Roundbig/GTroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/LSG/Logos/Roundbig/LSGroundbig.png",
    },
    {
      id: 5,
      date: "Tue Mar 29 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Sunrisers Hyderabad",
      away_team: "Rajasthan Royals",
      venue: "MCA Stadium, Pune",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Roundbig/SRHroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RR/Logos/Roundbig/RRroundbig.png",
    },
    {
      id: 6,
      date: "Wed Mar 30 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Royal Challengers Bangalore",
      away_team: "Kolkata Knight Riders",
      venue: "DY Patil Stadium",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RCB/Logos/Roundbig/RCBroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/KKR/Logos/Roundbig/KKRroundbig.png",
    },
    {
      id: 7,
      date: "Thu Mar 31 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Lucknow Super Giants",
      away_team: "Chennai Super Kings",
      venue: "Brabourne - CCI",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/LSG/Logos/Roundbig/LSGroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/CSK/logos/Roundbig/CSKroundbig.png",
    },
    {
      id: 8,
      date: "Fri Apr 01 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Kolkata Knight Riders",
      away_team: "Punjab Kings",
      venue: "Wankhede Stadium",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/KKR/Logos/Roundbig/KKRroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/PBKS/Logos/Roundbig/PBKSroundbig.png",
    },
    {
      id: 9,
      date: "Sat Apr 02 2022",
      time: "03:30",
      "pm/am": "PM",
      home_team: "Mumbai Indians",
      away_team: "Rajasthan Royals",
      venue: "DY Patil Stadium",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/MI/Logos/Roundbig/MIroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RR/Logos/Roundbig/RRroundbig.png",
    },
    {
      id: 10,
      date: "Sat Apr 02 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Gujarat Titans",
      away_team: "Delhi Capitals",
      venue: "MCA Stadium, Pune",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/GT/Logos/Roundbig/GTroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/DC/Logos/Roundbig/DCroundbig.png",
    },
    {
      id: 11,
      date: "Sun Apr 03 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Chennai Super Kings",
      away_team: "Punjab Kings",
      venue: "Brabourne - CCI",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/CSK/logos/Roundbig/CSKroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/PBKS/Logos/Roundbig/PBKSroundbig.png",
    },
    {
      id: 12,
      date: "Mon Apr 04 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Sunrisers Hyderabad",
      away_team: "Lucknow Super Giants",
      venue: "DY Patil Stadium",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Roundbig/SRHroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/LSG/Logos/Roundbig/LSGroundbig.png",
    },
    {
      id: 13,
      date: "Tue Apr 05 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Rajasthan Royals",
      away_team: "Royal Challengers Bangalore",
      venue: "Wankhede Stadium",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RR/Logos/Roundbig/RRroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RCB/Logos/Roundbig/RCBroundbig.png",
    },
    {
      id: 14,
      date: "Wed Apr 06 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Kolkata Knight Riders",
      away_team: "Mumbai Indians",
      venue: "MCA Stadium, Pune",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/KKR/Logos/Roundbig/KKRroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/MI/Logos/Roundbig/MIroundbig.png",
    },
    {
      id: 15,
      date: "Thu Apr 07 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Lucknow Super Giants",
      away_team: "Delhi Capitals",
      venue: "DY Patil Stadium",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/LSG/Logos/Roundbig/LSGroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/DC/Logos/Roundbig/DCroundbig.png",
    },
    {
      id: 16,
      date: "Fri Apr 08 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Punjab Kings",
      away_team: "Gujarat Titans",
      venue: "Brabourne - CCI",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/PBKS/Logos/Roundbig/PBKSroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/GT/Logos/Roundbig/GTroundbig.png",
    },
    {
      id: 17,
      date: "Sat Apr 09 2022",
      time: "03:30",
      "pm/am": "PM",
      home_team: "Chennai Super Kings",
      away_team: "Sunrisers Hyderabad",
      venue: "DY Patil Stadium",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/CSK/logos/Roundbig/CSKroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Roundbig/SRHroundbig.png",
    },
    {
      id: 18,
      date: "Sat Apr 09 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Royal Challengers Bangalore",
      away_team: "Mumbai Indians",
      venue: "MCA Stadium, Pune",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RCB/Logos/Roundbig/RCBroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/MI/Logos/Roundbig/MIroundbig.png",
    },
    {
      id: 19,
      date: "Sun Apr 10 2022",
      time: "03:30",
      "pm/am": "PM",
      home_team: "Kolkata Knight Riders",
      away_team: "Delhi Capitals",
      venue: "Brabourne - CCI",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/KKR/Logos/Roundbig/KKRroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/DC/Logos/Roundbig/DCroundbig.png",
    },
    {
      id: 20,
      date: "Sun Apr 10 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Rajasthan Royals",
      away_team: "Lucknow Super Giants",
      venue: "Wankhede Stadium",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RR/Logos/Roundbig/RRroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/LSG/Logos/Roundbig/LSGroundbig.png",
    },
    {
      id: 21,
      date: "Mon Apr 11 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Sunrisers Hyderabad",
      away_team: "Gujarat Titans",
      venue: "DY Patil Stadium",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Roundbig/SRHroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/GT/Logos/Roundbig/GTroundbig.png",
    },
    {
      id: 22,
      date: "Tue Apr 12 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Chennai Super Kings",
      away_team: "Royal Challengers Bangalore",
      venue: "DY Patil Stadium",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/CSK/logos/Roundbig/CSKroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RCB/Logos/Roundbig/RCBroundbig.png",
    },
    {
      id: 23,
      date: "Wed Apr 13 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Mumbai Indians",
      away_team: "Punjab Kings",
      venue: "MCA Stadium, Pune",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/MI/Logos/Roundbig/MIroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/PBKS/Logos/Roundbig/PBKSroundbig.png",
    },
    {
      id: 24,
      date: "Thu Apr 14 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Rajasthan Royals",
      away_team: "Gujarat Titans",
      venue: "DY Patil Stadium",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RR/Logos/Roundbig/RRroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/GT/Logos/Roundbig/GTroundbig.png",
    },
    {
      id: 25,
      date: "Fri Apr 15 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Sunrisers Hyderabad",
      away_team: "Kolkata Knight Riders",
      venue: "Brabourne - CCI",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Roundbig/SRHroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/KKR/Logos/Roundbig/KKRroundbig.png",
    },
    {
      id: 26,
      date: "Sat Apr 16 2022",
      time: "03:30",
      "pm/am": "PM",
      home_team: "Mumbai Indians",
      away_team: "Lucknow Super Giants",
      venue: "Brabourne - CCI",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/MI/Logos/Roundbig/MIroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/LSG/Logos/Roundbig/LSGroundbig.png",
    },
    {
      id: 27,
      date: "Sat Apr 16 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Delhi Capitals",
      away_team: "Royal Challengers Bangalore",
      venue: "Wankhede Stadium",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/DC/Logos/Roundbig/DCroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RCB/Logos/Roundbig/RCBroundbig.png",
    },
    {
      id: 28,
      date: "Sun Apr 17 2022",
      time: "03:30",
      "pm/am": "PM",
      home_team: "Punjab Kings",
      away_team: "Sunrisers Hyderabad",
      venue: "DY Patil Stadium",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/PBKS/Logos/Roundbig/PBKSroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Roundbig/SRHroundbig.png",
    },
    {
      id: 29,
      date: "Sun Apr 17 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Gujarat Titans",
      away_team: "Chennai Super Kings",
      venue: "MCA Stadium, Pune",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/GT/Logos/Roundbig/GTroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/CSK/logos/Roundbig/CSKroundbig.png",
    },
    {
      id: 30,
      date: "Mon Apr 18 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Rajasthan Royals",
      away_team: "Kolkata Knight Riders",
      venue: "Brabourne - CCI",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RR/Logos/Roundbig/RRroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/KKR/Logos/Roundbig/KKRroundbig.png",
    },
    {
      id: 31,
      date: "Tue Apr 19 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Lucknow Super Giants",
      away_team: "Royal Challengers Bangalore",
      venue: "DY Patil Stadium",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/LSG/Logos/Roundbig/LSGroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RCB/Logos/Roundbig/RCBroundbig.png",
    },
    {
      id: 32,
      date: "Wed Apr 20 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Delhi Capitals",
      away_team: "Punjab Kings",
      venue: "MCA Stadium, Pune",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/DC/Logos/Roundbig/DCroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/PBKS/Logos/Roundbig/PBKSroundbig.png",
    },
    {
      id: 33,
      date: "Thu Apr 21 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Mumbai Indians",
      away_team: "Chennai Super Kings",
      venue: "DY Patil Stadium",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/MI/Logos/Roundbig/MIroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/CSK/logos/Roundbig/CSKroundbig.png",
    },
    {
      id: 34,
      date: "Fri Apr 22 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Delhi Capitals",
      away_team: "Rajasthan Royals",
      venue: "MCA Stadium, Pune",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/DC/Logos/Roundbig/DCroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RR/Logos/Roundbig/RRroundbig.png",
    },
    {
      id: 35,
      date: "Sat Apr 23 2022",
      time: "03:30",
      "pm/am": "PM",
      home_team: "Kolkata Knight Riders",
      away_team: "Gujarat Titans",
      venue: "DY Patil Stadium",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/KKR/Logos/Roundbig/KKRroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/GT/Logos/Roundbig/GTroundbig.png",
    },
    {
      id: 36,
      date: "Sat Apr 23 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Royal Challengers Bangalore",
      away_team: "Sunrisers Hyderabad",
      venue: "Brabourne - CCI",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RCB/Logos/Roundbig/RCBroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Roundbig/SRHroundbig.png",
    },
    {
      id: 37,
      date: "Sun Apr 24 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Lucknow Super Giants",
      away_team: "Mumbai Indians",
      venue: "Wankhede Stadium",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/LSG/Logos/Roundbig/LSGroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/MI/Logos/Roundbig/MIroundbig.png",
    },
    {
      id: 38,
      date: "Mon Apr 25 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Punjab Kings",
      away_team: "Chennai Super Kings",
      venue: "Wankhede Stadium",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/PBKS/Logos/Roundbig/PBKSroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/CSK/logos/Roundbig/CSKroundbig.png",
    },
    {
      id: 39,
      date: "Tue Apr 26 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Royal Challengers Bangalore",
      away_team: "Rajasthan Royals",
      venue: "MCA Stadium, Pune",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RCB/Logos/Roundbig/RCBroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RR/Logos/Roundbig/RRroundbig.png",
    },
    {
      id: 40,
      date: "Wed Apr 27 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Gujarat Titans",
      away_team: "Sunrisers Hyderabad",
      venue: "Wankhede Stadium",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/GT/Logos/Roundbig/GTroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Roundbig/SRHroundbig.png",
    },
    {
      id: 41,
      date: "Thu Apr 28 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Delhi Capitals",
      away_team: "Kolkata Knight Riders",
      venue: "Wankhede Stadium",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/DC/Logos/Roundbig/DCroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/KKR/Logos/Roundbig/KKRroundbig.png",
    },
    {
      id: 42,
      date: "Fri Apr 29 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Punjab Kings",
      away_team: "Lucknow Super Giants",
      venue: "MCA Stadium, Pune",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/PBKS/Logos/Roundbig/PBKSroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/LSG/Logos/Roundbig/LSGroundbig.png",
    },
    {
      id: 43,
      date: "Sat Apr 30 2022",
      time: "03:30",
      "pm/am": "PM",
      home_team: "Gujarat Titans",
      away_team: "Royal Challengers Bangalore",
      venue: "Brabourne - CCI",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/GT/Logos/Roundbig/GTroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RCB/Logos/Roundbig/RCBroundbig.png",
    },
    {
      id: 44,
      date: "Sat Apr 30 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Rajasthan Royals",
      away_team: "Mumbai Indians",
      venue: "DY Patil Stadium",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RR/Logos/Roundbig/RRroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/MI/Logos/Roundbig/MIroundbig.png",
    },
    {
      id: 45,
      date: "Sun May 01 2022",
      time: "03:30",
      "pm/am": "PM",
      home_team: "Delhi Capitals",
      away_team: "Lucknow Super Giants",
      venue: "Wankhede Stadium",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/DC/Logos/Roundbig/DCroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/LSG/Logos/Roundbig/LSGroundbig.png",
    },
    {
      id: 46,
      date: "Sun May 01 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Sunrisers Hyderabad",
      away_team: "Chennai Super Kings",
      venue: "MCA Stadium, Pune",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Roundbig/SRHroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/CSK/logos/Roundbig/CSKroundbig.png",
    },
    {
      id: 47,
      date: "Mon May 02 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Kolkata Knight Riders",
      away_team: "Rajasthan Royals",
      venue: "Wankhede Stadium",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/KKR/Logos/Roundbig/KKRroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RR/Logos/Roundbig/RRroundbig.png",
    },
    {
      id: 48,
      date: "Tue May 03 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Gujarat Titans",
      away_team: "Punjab Kings",
      venue: "DY Patil Stadium",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/GT/Logos/Roundbig/GTroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/PBKS/Logos/Roundbig/PBKSroundbig.png",
    },
    {
      id: 49,
      date: "Wed May 04 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Royal Challengers Bangalore",
      away_team: "Chennai Super Kings",
      venue: "MCA Stadium, Pune",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RCB/Logos/Roundbig/RCBroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/CSK/logos/Roundbig/CSKroundbig.png",
    },
    {
      id: 50,
      date: "Thu May 05 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Delhi Capitals",
      away_team: "Sunrisers Hyderabad",
      venue: "Brabourne - CCI",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/DC/Logos/Roundbig/DCroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Roundbig/SRHroundbig.png",
    },
    {
      id: 51,
      date: "Fri May 06 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Gujarat Titans",
      away_team: "Mumbai Indians",
      venue: "Brabourne - CCI",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/GT/Logos/Roundbig/GTroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/MI/Logos/Roundbig/MIroundbig.png",
    },
    {
      id: 52,
      date: "Sat May 07 2022",
      time: "03:30",
      "pm/am": "PM",
      home_team: "Punjab Kings",
      away_team: "Rajasthan Royals",
      venue: "Wankhede Stadium",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/PBKS/Logos/Roundbig/PBKSroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RR/Logos/Roundbig/RRroundbig.png",
    },
    {
      id: 53,
      date: "Sat May 07 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Lucknow Super Giants",
      away_team: "Kolkata Knight Riders",
      venue: "MCA Stadium, Pune",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/LSG/Logos/Roundbig/LSGroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/KKR/Logos/Roundbig/KKRroundbig.png",
    },
    {
      id: 54,
      date: "Sun May 08 2022",
      time: "03:30",
      "pm/am": "PM",
      home_team: "Sunrisers Hyderabad",
      away_team: "Royal Challengers Bangalore",
      venue: "Wankhede Stadium",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Roundbig/SRHroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RCB/Logos/Roundbig/RCBroundbig.png",
    },
    {
      id: 55,
      date: "Sun May 08 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Chennai Super Kings",
      away_team: "Delhi Capitals",
      venue: "DY Patil Stadium",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/CSK/logos/Roundbig/CSKroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/DC/Logos/Roundbig/DCroundbig.png",
    },
    {
      id: 56,
      date: "Mon May 09 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Mumbai Indians",
      away_team: "Kolkata Knight Riders",
      venue: "DY Patil Stadium",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/MI/Logos/Roundbig/MIroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/KKR/Logos/Roundbig/KKRroundbig.png",
    },
    {
      id: 57,
      date: "Tue May 10 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Lucknow Super Giants",
      away_team: "Gujarat Titans",
      venue: "MCA Stadium, Pune",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/LSG/Logos/Roundbig/LSGroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/GT/Logos/Roundbig/GTroundbig.png",
    },
    {
      id: 58,
      date: "Wed May 11 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Rajasthan Royals",
      away_team: "Delhi Capitals",
      venue: "DY Patil Stadium",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RR/Logos/Roundbig/RRroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/DC/Logos/Roundbig/DCroundbig.png",
    },
    {
      id: 59,
      date: "Thu May 12 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Chennai Super Kings",
      away_team: "Mumbai Indians",
      venue: "Wankhede Stadium",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/CSK/logos/Roundbig/CSKroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/MI/Logos/Roundbig/MIroundbig.png",
    },
    {
      id: 60,
      date: "Fri May 13 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Royal Challengers Bangalore",
      away_team: "Punjab Kings",
      venue: "Brabourne - CCI",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RCB/Logos/Roundbig/RCBroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/PBKS/Logos/Roundbig/PBKSroundbig.png",
    },
    {
      id: 61,
      date: "Sat May 14 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Kolkata Knight Riders",
      away_team: "Sunrisers Hyderabad",
      venue: "MCA Stadium, Pune",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/KKR/Logos/Roundbig/KKRroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Roundbig/SRHroundbig.png",
    },
    {
      id: 62,
      date: "Sun May 15 2022",
      time: "03:30",
      "pm/am": "PM",
      home_team: "Chennai Super Kings",
      away_team: "Gujarat Titans",
      venue: "Wankhede Stadium",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/CSK/logos/Roundbig/CSKroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/GT/Logos/Roundbig/GTroundbig.png",
    },
    {
      id: 63,
      date: "Sun May 15 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Lucknow Super Giants",
      away_team: "Rajasthan Royals",
      venue: "Brabourne - CCI",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/LSG/Logos/Roundbig/LSGroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RR/Logos/Roundbig/RRroundbig.png",
    },
    {
      id: 64,
      date: "Mon May 16 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Punjab Kings",
      away_team: "Delhi Capitals",
      venue: "DY Patil Stadium",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/PBKS/Logos/Roundbig/PBKSroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/DC/Logos/Roundbig/DCroundbig.png",
    },
    {
      id: 65,
      date: "Tue May 17 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Mumbai Indians",
      away_team: "Sunrisers Hyderabad",
      venue: "Wankhede Stadium",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/MI/Logos/Roundbig/MIroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Roundbig/SRHroundbig.png",
    },
    {
      id: 66,
      date: "Wed May 18 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Kolkata Knight Riders",
      away_team: "Lucknow Super Giants",
      venue: "DY Patil Stadium",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/KKR/Logos/Roundbig/KKRroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/LSG/Logos/Roundbig/LSGroundbig.png",
    },
    {
      id: 67,
      date: "Thu May 19 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Royal Challengers Bangalore",
      away_team: "Gujarat Titans",
      venue: "Wankhede Stadium",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RCB/Logos/Roundbig/RCBroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/GT/Logos/Roundbig/GTroundbig.png",
    },
    {
      id: 68,
      date: "Fri May 20 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Rajasthan Royals",
      away_team: "Chennai Super Kings",
      venue: "Brabourne - CCI",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RR/Logos/Roundbig/RRroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/CSK/logos/Roundbig/CSKroundbig.png",
    },
    {
      id: 69,
      date: "Sat May 21 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Mumbai Indians",
      away_team: "Delhi Capitals",
      venue: "Wankhede Stadium",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/MI/Logos/Roundbig/MIroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/DC/Logos/Roundbig/DCroundbig.png",
    },
    {
      id: 70,
      date: "Sun May 22 2022",
      time: "07:30",
      "pm/am": "PM",
      home_team: "Sunrisers Hyderabad",
      away_team: "Punjab Kings",
      venue: "Wankhede Stadium",
      logo_home_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Roundbig/SRHroundbig.png",
      logo_away_team:
        "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/PBKS/Logos/Roundbig/PBKSroundbig.png",
    },
  ]);

  // {
  //   id: 1,
  //   date: 'Sat Mar 26 2022',
  //   time: '07:30',
  //   'pm/am': 'PM',
  //   home_team: 'Chennai Super Kings',
  //   away_team: 'Kolkata Knight Riders',
  //   venue: 'Wankhede Stadium',
  //   logo_home_team:
  //     'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/CSK/logos/Roundbig/CSKroundbig.png',
  //   logo_away_team:
  //     'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/KKR/Logos/Roundbig/KKRroundbig.png',
  // },

  return (
    <div className="schedule">
      {matches.map((match) => (
        <Match match={match} />
      ))}
    </div>
  );
};

export default Schedule;
