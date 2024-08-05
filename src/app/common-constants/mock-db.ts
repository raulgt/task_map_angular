import { JobsDtoOut } from "src/interfaces/Jobs/JobsDtoOut";

const mockDb: JobsDtoOut = {
    "current_page": 1,
    "data": [
        {
            "id": 1,
            "title": "Firewall",
            "description": "Update Firewall security rules base on the provided list",
            "latitude": "-38.416097",
            "longitude": "-63.616672",
            "image": "",
            "date": "2023-07-29T15:13:33.790Z",
            "status": "Active",
            "assigned_to": "Carlos Abreu",
            "created_at": "2023-07-29T15:13:33.790Z",
            "updated_at": "2023-07-29T15:13:33.790Z"
        },
        {
            "id": 2,
            "title": "Backup",
            "description": "Perform a full backup of the server data and store it in a secure location",
            "latitude": "-14.235004",
            "longitude": "-51.92528",
            "image": "",
            "date": "2023-07-29T15:13:33.790Z",
            "status": "Active",
            "assigned_to": "Carlos Abreu",
            "created_at": "2023-07-29T15:13:33.790Z",
            "updated_at": "2023-07-29T15:13:33.790Z"
        },
        {
            "id": 3,
            "title": "Software Update",
            "description": "Install the latest version of the software and test its functionality",
            "latitude": "-35.675147",
            "longitude": "-71.542969",
            "image": "",
            "date": "2023-07-29T15:13:33.790Z",
            "status": "Active",
            "assigned_to": "Juan Perez",
            "created_at": "2023-07-29T15:13:33.790Z",
            "updated_at": "2023-07-29T15:13:33.790Z"
        },
        {
            "id": 4,
            "title": "Virus Scan",
            "description": "Run a thorough virus scan on the system and remove any detected threats",
            "latitude": "4.570868",
            "longitude": "-74.297333",
            "image": "",
            "date": "2023-07-29T15:13:33.790Z",
            "status": "Active",
            "assigned_to": "Ana Gomez",
            "created_at": "2023-07-29T15:13:33.790Z",
            "updated_at": "2023-07-29T15:13:33.790Z"
        },
        {
            "id": 5,
            "title": "Azure Function Check",
            "description": "Azure cron check due to reported unscheduled runs",
            "latitude": "21.521757",
            "longitude": "-77.781167",
            "image": "",
            "date": "2023-07-29T15:13:33.790Z",
            "status": "Active",
            "assigned_to": "Ana Gomez",
            "created_at": "2023-07-29T15:13:33.790Z",
            "updated_at": "2023-07-29T15:13:33.790Z"
        },
        {
            "id": 6,
            "title": "New Instance Needed",
            "description": "Azure web app needs a new instance due to demand increment",
            "latitude": "23.634501",
            "longitude": "-102.552784",
            "image": "",
            "date": "2023-07-29T15:13:33.790Z",
            "status": "Active",
            "assigned_to": "Carlos Abreu",
            "created_at": "2023-07-29T15:13:33.790Z",
            "updated_at": "2023-07-29T15:13:33.790Z"
        },
        {
            "id": 7,
            "title": "Redis Server Creation",
            "description": "Create a Redis server in a VM following the requirements",
            "latitude": "-9.189967",
            "longitude": "-75.015152",
            "image": "",
            "date": "2023-07-29T15:13:33.790Z",
            "status": "Active",
            "assigned_to": "Samuel Bjork",
            "created_at": "2023-07-29T15:13:33.790Z",
            "updated_at": "2023-07-29T15:13:33.790Z"
        },
        {
            "id": 8,
            "title": "Check SQL queries for performance",
            "description": "Check sql queries to improve response time",
            "latitude": "6.42375",
            "longitude": "-66.58973",
            "image": "",
            "date": "2023-07-29T15:13:33.790Z",
            "status": "Active",
            "assigned_to": "Daniela Miller",
            "created_at": "2023-07-29T15:13:33.790Z",
            "updated_at": "2023-07-29T15:13:33.790Z"
        },
        {
            "id": 9,
            "title": "Azure Pipeline Creation",
            "description": "Creat a CI/CD basic pipeline for a .NET Core 7 Web App",
            "latitude": "10.48801",
            "longitude": "-66.87919",
            "image": "",
            "date": "2023-07-29T15:13:33.790Z",
            "status": "Active",
            "assigned_to": "Crlos Abreu",
            "created_at": "2023-07-29T15:13:33.790Z",
            "updated_at": "2023-07-29T15:13:33.790Z"
        },
        {
            "id": 10,
            "title": "FPT service creation",
            "description": "Install the Filezilla application in a VM",
            "latitude": "10.66663",
            "longitude": "-71.61245",
            "image": "",
            "date": "2023-07-29T15:13:33.790Z",
            "status": "Active",
            "assigned_to": "Daniela Miller",
            "created_at": "2023-07-29T15:13:33.790Z",
            "updated_at": "2023-07-29T15:13:33.790Z"
        }
    ],
    "total": 1,
    "last_page": 1,
    "per_page": 10
}

export default mockDb;