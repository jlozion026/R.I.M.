# WEB-BASED ROAD INCIDENT DATA MANAGEMENT AND GEOGRAPHICAL INFORMATION SYSTEM 

## Description

The system seeks to encourage the participation of local government unit departments and barangays in 
reporting and managing these road incidents, and make the information easily shareable with 
the general public of Quezon City. The system allows authorities to easily manage and 
share road incident data, locate road incidents by interacting with the map, searching for a 
location, or filtering by report type or date, and provides a dashboard with a total count of 
all reported road incidents and data analytics graphs of traffic congestion for yearly, 
monthly, and hourly periods using dummy dataset.

## Motivation

Lack of data from local government units and barangays leads to inaccurate 
information in third-party navigation apps such as Waze and Google Maps. Collecting data 
from these sources can be difficult, as they may not have a system for managing and 
collecting data, resulting in limited information about road closures, hazards, and accidents. 

As researchers, they recognize the importance of the participation of Local 
Government Units as the primary authoritative source of local data on road conditions. 
Consequently, they have developed a web-based Road Incident Data Management and 
Geographical Information System for Quezon City Government Departments. This system 
aims to create a Local Government repository of road incidents, which can provide 
information for the general public and provide data analytics of the congestion level.

## How to Use
To see how the project operates, kindly check the [Demonstration Video](https://drive.google.com/file/d/1WMaJDssHIyz2tlE4e6sdnzYkTFRrG742/view?usp=sharing) or the [User's Manual](https://drive.google.com/file/d/1Jh3ma6VloZ2E11XieW00BDYdIOR1G88n/view?usp=sharing)


## Project prerequisites

General requirements

* yarn


## Quick Start

1.Cloning the repository
```bash
git clone https://github.com/PaoGon/thesis.git
```

2.Installing frontend dependencies

```bash
cd thesis/frontend
yarn install
```

3.Installing backend dependencies

```bash
cd ../server
yarn install
```

## Usage

Note: Make sure you installed all of the required dependencies

1.Frontend:
```bash
cd frontend
yarn start
```

2.Server:
```bash
cd server
yarn watch
yarn dev
```

## Design
[Figma link](https://www.figma.com/file/yOwgybj44o1c053tOC8VzC/CHAPTER-III-DESIGN?node-id=181%3A259&t=UThoCDPMjy5OfoGq-0)

## Diagrams

### Entity Realationship Diagram
![erd](https://github.com/PaoGon/thesis/blob/pao/diagrams/erd.drawio.png)

### Use Case Diagram
![use_case](https://github.com/PaoGon/thesis/blob/pao/diagrams/use%20case.drawio.png)

### System Design Pattern(MVC)
![design_pattrn](https://github.com/PaoGon/thesis/blob/pao/diagrams/system_architecture.drawio.png)

### Activity Diagram
#### Admin Account
![admin](https://github.com/PaoGon/thesis/blob/pao/diagrams/admin_activity_diagram.drawio.png)

#### Normal Account
![nomral](https://github.com/PaoGon/thesis/blob/pao/diagrams/normal_acc_activity_diagram.drawio.png)

#### Public Account
![pub](https://github.com/PaoGon/thesis/blob/pao/diagrams/gen_pub_activity_diagram.drawio.png)
