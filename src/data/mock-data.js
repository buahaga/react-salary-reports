const data = [
  {
    salary: 967, qualification: 'Developer', city: 'Gomel', date: '02/10/2018', tech: 'C#',
  },
  {
    salary: 1306, qualification: 'Developer', city: 'Grodno', date: '06/28/2016', tech: 'Ruby',
  },
  {
    salary: 1473, qualification: 'Developer', city: 'Vitebsk', date: '08/11/2016', tech: 'Python',
  },
  {
    salary: 1017, qualification: 'Developer', city: 'Grodno', date: '02/07/2018', tech: 'JS',
  },
  {
    salary: 1040, qualification: 'Developer', city: 'Brest', date: '10/27/2017', tech: 'Java',
  },
  {
    salary: 1455, qualification: 'Developer', city: 'Grodno', date: '03/15/2017', tech: 'C#',
  },
  {
    salary: 1311, qualification: 'Developer', city: 'Mogilev', date: '03/19/2018', tech: 'C#',
  },
  {
    salary: 1100, qualification: 'Developer', city: 'Minsk', date: '12/22/2016', tech: 'JS',
  },
  {
    salary: 981, qualification: 'Developer', city: 'Vitebsk', date: '03/25/2018', tech: 'Python',
  },
  {
    salary: 1315, qualification: 'Developer', city: 'Minsk', date: '11/06/2016', tech: 'R',
  },
  {
    salary: 1297, qualification: 'Developer', city: 'Mogilev', date: '06/19/2016', tech: 'JS',
  },
  {
    salary: 1378, qualification: 'Developer', city: 'Gomel', date: '02/10/2018', tech: 'Java',
  },
  {
    salary: 1428, qualification: 'Developer', city: 'Gomel', date: '12/23/2017', tech: 'Ruby',
  },
  {
    salary: 1039, qualification: 'Developer', city: 'Mogilev', date: '07/24/2017', tech: 'Python',
  },
  {
    salary: 1013, qualification: 'Developer', city: 'Brest', date: '01/04/2017', tech: 'Python',
  },
  {
    salary: 1030, qualification: 'Developer', city: 'Brest', date: '08/22/2016', tech: 'Java',
  },
  {
    salary: 1441, qualification: 'Developer', city: 'Grodno', date: '10/23/2016', tech: 'Python',
  },
  {
    salary: 876, qualification: 'Developer', city: 'Mogilev', date: '06/27/2017', tech: 'Python',
  },
  {
    salary: 1047, qualification: 'Developer', city: 'Mogilev', date: '09/10/2017', tech: 'JS',
  },
  {
    salary: 1184, qualification: 'Developer', city: 'Minsk', date: '02/15/2016', tech: 'JS',
  },
  {
    salary: 1271, qualification: 'Developer', city: 'Gomel', date: '05/13/2017', tech: 'Ruby',
  },
  {
    salary: 902, qualification: 'Developer', city: 'Minsk', date: '06/21/2016', tech: 'C#',
  },
  {
    salary: 1383, qualification: 'Developer', city: 'Brest', date: '02/28/2017', tech: 'C#',
  },
  {
    salary: 998, qualification: 'Developer', city: 'Minsk', date: '04/02/2016', tech: 'Python',
  },
  {
    salary: 1080, qualification: 'Developer', city: 'Grodno', date: '09/02/2017', tech: 'C#',
  },
  {
    salary: 824, qualification: 'Developer', city: 'Brest', date: '04/29/2017', tech: 'JS',
  },
  {
    salary: 902, qualification: 'Developer', city: 'Mogilev', date: '02/24/2017', tech: 'R',
  },
  {
    salary: 1335, qualification: 'Developer', city: 'Brest', date: '02/01/2016', tech: 'C#',
  },
  {
    salary: 1441, qualification: 'Developer', city: 'Grodno', date: '01/09/2016', tech: 'C#',
  },
  {
    salary: 815, qualification: 'Developer', city: 'Grodno', date: '10/11/2016', tech: 'JS',
  },
  {
    salary: 1186, qualification: 'Developer', city: 'Grodno', date: '12/27/2016', tech: 'R',
  },
  {
    salary: 1360, qualification: 'Developer', city: 'Mogilev', date: '08/08/2016', tech: 'C#',
  },
  {
    salary: 1399, qualification: 'Developer', city: 'Mogilev', date: '02/18/2016', tech: 'Python',
  },
  {
    salary: 1114, qualification: 'Developer', city: 'Gomel', date: '03/18/2018', tech: 'Python',
  },
  {
    salary: 1119, qualification: 'Developer', city: 'Grodno', date: '01/10/2017', tech: 'Python',
  },
  {
    salary: 988, qualification: 'Developer', city: 'Minsk', date: '07/14/2017', tech: 'Ruby',
  },
  {
    salary: 1152, qualification: 'Developer', city: 'Gomel', date: '02/29/2016', tech: 'Python',
  },
  {
    salary: 940, qualification: 'Developer', city: 'Vitebsk', date: '05/29/2016', tech: 'Ruby',
  },
  {
    salary: 1094, qualification: 'Developer', city: 'Minsk', date: '02/04/2017', tech: 'Java',
  },
  {
    salary: 1187, qualification: 'Developer', city: 'Brest', date: '01/13/2016', tech: 'Java',
  },
  {
    salary: 1359, qualification: 'Developer', city: 'Vitebsk', date: '11/16/2017', tech: 'R',
  },
  {
    salary: 1125, qualification: 'Developer', city: 'Brest', date: '11/23/2017', tech: 'Python',
  },
  {
    salary: 1428, qualification: 'Developer', city: 'Brest', date: '05/19/2017', tech: 'JS',
  },
  {
    salary: 969, qualification: 'Developer', city: 'Minsk', date: '04/01/2016', tech: 'JS',
  },
  {
    salary: 1055, qualification: 'Developer', city: 'Mogilev', date: '03/27/2018', tech: 'Java',
  },
  {
    salary: 1103, qualification: 'Developer', city: 'Grodno', date: '11/24/2016', tech: 'Ruby',
  },
  {
    salary: 1463, qualification: 'Developer', city: 'Mogilev', date: '01/01/2018', tech: 'R',
  },
  {
    salary: 1254, qualification: 'Developer', city: 'Grodno', date: '09/21/2017', tech: 'R',
  },
  {
    salary: 1105, qualification: 'Developer', city: 'Gomel', date: '02/13/2018', tech: 'C#',
  },
  {
    salary: 1292, qualification: 'Developer', city: 'Minsk', date: '04/21/2018', tech: 'Ruby',
  },
  {
    salary: 1068, qualification: 'Developer', city: 'Vitebsk', date: '06/15/2016', tech: 'Python',
  },
  {
    salary: 807, qualification: 'Developer', city: 'Brest', date: '04/07/2018', tech: 'R',
  },
  {
    salary: 891, qualification: 'Developer', city: 'Brest', date: '04/23/2016', tech: 'JS',
  },
  {
    salary: 1285, qualification: 'Developer', city: 'Brest', date: '03/31/2018', tech: 'JS',
  },
  {
    salary: 938, qualification: 'Developer', city: 'Minsk', date: '03/29/2017', tech: 'Python',
  },
  {
    salary: 1006, qualification: 'Developer', city: 'Vitebsk', date: '01/23/2018', tech: 'R',
  },
  {
    salary: 880, qualification: 'Developer', city: 'Minsk', date: '07/01/2017', tech: 'Ruby',
  },
  {
    salary: 804, qualification: 'Developer', city: 'Mogilev', date: '02/26/2016', tech: 'R',
  },
  {
    salary: 1293, qualification: 'Developer', city: 'Brest', date: '06/17/2017', tech: 'JS',
  },
  {
    salary: 1196, qualification: 'Developer', city: 'Brest', date: '08/23/2016', tech: 'R',
  },
  {
    salary: 1016, qualification: 'Developer', city: 'Minsk', date: '01/18/2018', tech: 'Python',
  },
  {
    salary: 907, qualification: 'Developer', city: 'Mogilev', date: '01/08/2017', tech: 'JS',
  },
  {
    salary: 808, qualification: 'Developer', city: 'Grodno', date: '05/22/2017', tech: 'Python',
  },
  {
    salary: 1027, qualification: 'Developer', city: 'Gomel', date: '12/16/2016', tech: 'JS',
  },
  {
    salary: 1256, qualification: 'Developer', city: 'Mogilev', date: '05/01/2017', tech: 'JS',
  },
  {
    salary: 858, qualification: 'Developer', city: 'Brest', date: '04/18/2016', tech: 'R',
  },
  {
    salary: 1467, qualification: 'Developer', city: 'Brest', date: '02/17/2016', tech: 'Python',
  },
  {
    salary: 1002, qualification: 'Developer', city: 'Minsk', date: '08/01/2016', tech: 'R',
  },
  {
    salary: 956, qualification: 'Developer', city: 'Minsk', date: '02/14/2017', tech: 'Java',
  },
  {
    salary: 1323, qualification: 'Developer', city: 'Mogilev', date: '05/29/2016', tech: 'Java',
  },
  {
    salary: 1180, qualification: 'Developer', city: 'Gomel', date: '07/28/2016', tech: 'Java',
  },
  {
    salary: 1035, qualification: 'Developer', city: 'Minsk', date: '05/27/2017', tech: 'R',
  },
  {
    salary: 1052, qualification: 'Developer', city: 'Mogilev', date: '08/24/2017', tech: 'JS',
  },
  {
    salary: 1184, qualification: 'Developer', city: 'Gomel', date: '03/21/2017', tech: 'Python',
  },
  {
    salary: 1198, qualification: 'Developer', city: 'Minsk', date: '04/14/2017', tech: 'C#',
  },
  {
    salary: 1068, qualification: 'Developer', city: 'Mogilev', date: '02/15/2016', tech: 'Ruby',
  },
  {
    salary: 1291, qualification: 'Developer', city: 'Mogilev', date: '12/20/2017', tech: 'C#',
  },
  {
    salary: 872, qualification: 'Developer', city: 'Minsk', date: '11/13/2017', tech: 'Python',
  },
  {
    salary: 814, qualification: 'Developer', city: 'Brest', date: '07/29/2017', tech: 'C#',
  },
  {
    salary: 824, qualification: 'Developer', city: 'Grodno', date: '12/29/2016', tech: 'R',
  },
  {
    salary: 990, qualification: 'Developer', city: 'Gomel', date: '07/12/2017', tech: 'Ruby',
  },
  {
    salary: 990, qualification: 'Developer', city: 'Minsk', date: '02/06/2016', tech: 'R',
  },
  {
    salary: 820, qualification: 'Developer', city: 'Grodno', date: '03/21/2017', tech: 'R',
  },
  {
    salary: 955, qualification: 'Developer', city: 'Mogilev', date: '07/14/2017', tech: 'Python',
  },
  {
    salary: 1333, qualification: 'Developer', city: 'Grodno', date: '06/09/2017', tech: 'Python',
  },
  {
    salary: 1381, qualification: 'Developer', city: 'Gomel', date: '09/04/2016', tech: 'Ruby',
  },
  {
    salary: 1490, qualification: 'Developer', city: 'Brest', date: '03/03/2018', tech: 'JS',
  },
  {
    salary: 1168, qualification: 'Developer', city: 'Grodno', date: '08/25/2017', tech: 'Ruby',
  },
  {
    salary: 1082, qualification: 'Developer', city: 'Mogilev', date: '01/11/2018', tech: 'Java',
  },
  {
    salary: 1282, qualification: 'Developer', city: 'Grodno', date: '11/25/2016', tech: 'JS',
  },
  {
    salary: 1228, qualification: 'Developer', city: 'Minsk', date: '03/05/2017', tech: 'C#',
  },
  {
    salary: 1130, qualification: 'Developer', city: 'Grodno', date: '06/11/2017', tech: 'JS',
  },
  {
    salary: 1132, qualification: 'Developer', city: 'Grodno', date: '02/29/2016', tech: 'R',
  },
  {
    salary: 962, qualification: 'Developer', city: 'Gomel', date: '05/11/2016', tech: 'JS',
  },
  {
    salary: 1026, qualification: 'Developer', city: 'Brest', date: '11/19/2016', tech: 'Java',
  },
  {
    salary: 978, qualification: 'Developer', city: 'Minsk', date: '11/01/2017', tech: 'C#',
  },
  {
    salary: 841, qualification: 'Developer', city: 'Mogilev', date: '02/05/2018', tech: 'Ruby',
  },
  {
    salary: 854, qualification: 'Developer', city: 'Brest', date: '02/05/2017', tech: 'Python',
  },
  {
    salary: 963, qualification: 'Developer', city: 'Vitebsk', date: '02/10/2017', tech: 'R',
  },
  {
    salary: 1109, qualification: 'Developer', city: 'Mogilev', date: '04/26/2018', tech: 'Python',
  },
  {
    salary: 1295, qualification: 'Developer', city: 'Vitebsk', date: '04/28/2017', tech: 'R',
  },
  {
    salary: 928, qualification: 'Developer', city: 'Mogilev', date: '01/03/2016', tech: 'Python',
  },
  {
    salary: 1115, qualification: 'Developer', city: 'Mogilev', date: '09/21/2016', tech: 'C#',
  },
  {
    salary: 829, qualification: 'Developer', city: 'Minsk', date: '04/14/2018', tech: 'Python',
  },
  {
    salary: 1475, qualification: 'Developer', city: 'Minsk', date: '02/11/2016', tech: 'C#',
  },
  {
    salary: 827, qualification: 'Developer', city: 'Mogilev', date: '05/11/2016', tech: 'C#',
  },
  {
    salary: 881, qualification: 'Developer', city: 'Vitebsk', date: '07/02/2017', tech: 'Ruby',
  },
  {
    salary: 1017, qualification: 'Developer', city: 'Gomel', date: '01/30/2018', tech: 'Java',
  },
  {
    salary: 899, qualification: 'Developer', city: 'Minsk', date: '09/26/2016', tech: 'JS',
  },
  {
    salary: 1350, qualification: 'Developer', city: 'Minsk', date: '10/03/2017', tech: 'R',
  },
  {
    salary: 1149, qualification: 'Developer', city: 'Mogilev', date: '11/20/2017', tech: 'C#',
  },
  {
    salary: 1483, qualification: 'Developer', city: 'Grodno', date: '04/18/2017', tech: 'C#',
  },
  {
    salary: 1037, qualification: 'Developer', city: 'Grodno', date: '03/05/2018', tech: 'C#',
  },
  {
    salary: 943, qualification: 'Developer', city: 'Mogilev', date: '10/07/2016', tech: 'R',
  },
  {
    salary: 877, qualification: 'Developer', city: 'Grodno', date: '06/23/2016', tech: 'R',
  },
  {
    salary: 1058, qualification: 'Developer', city: 'Minsk', date: '04/01/2017', tech: 'Java',
  },
  {
    salary: 1273, qualification: 'Developer', city: 'Gomel', date: '01/15/2018', tech: 'Python',
  },
  {
    salary: 1318, qualification: 'Developer', city: 'Brest', date: '08/26/2016', tech: 'R',
  },
  {
    salary: 853, qualification: 'Developer', city: 'Mogilev', date: '09/17/2016', tech: 'Ruby',
  },
  {
    salary: 1373, qualification: 'Developer', city: 'Gomel', date: '06/02/2016', tech: 'Ruby',
  },
  {
    salary: 907, qualification: 'Developer', city: 'Mogilev', date: '10/10/2016', tech: 'Python',
  },
  {
    salary: 876, qualification: 'Developer', city: 'Brest', date: '08/21/2016', tech: 'Python',
  },
  {
    salary: 942, qualification: 'Developer', city: 'Gomel', date: '03/11/2017', tech: 'Java',
  },
  {
    salary: 1379, qualification: 'Developer', city: 'Grodno', date: '07/05/2016', tech: 'JS',
  },
  {
    salary: 972, qualification: 'Developer', city: 'Grodno', date: '02/26/2016', tech: 'C#',
  },
  {
    salary: 1144, qualification: 'Developer', city: 'Vitebsk', date: '08/14/2016', tech: 'C#',
  },
  {
    salary: 855, qualification: 'Developer', city: 'Mogilev', date: '09/26/2017', tech: 'Ruby',
  },
  {
    salary: 1043, qualification: 'Developer', city: 'Gomel', date: '12/29/2016', tech: 'JS',
  },
  {
    salary: 1075, qualification: 'Developer', city: 'Brest', date: '08/21/2016', tech: 'JS',
  },
  {
    salary: 858, qualification: 'Developer', city: 'Grodno', date: '05/10/2017', tech: 'R',
  },
  {
    salary: 1035, qualification: 'Developer', city: 'Brest', date: '07/30/2017', tech: 'Java',
  },
  {
    salary: 1033, qualification: 'Developer', city: 'Brest', date: '01/24/2017', tech: 'Ruby',
  },
  {
    salary: 1029, qualification: 'Developer', city: 'Mogilev', date: '11/02/2017', tech: 'JS',
  },
  {
    salary: 968, qualification: 'Developer', city: 'Gomel', date: '11/06/2017', tech: 'R',
  },
  {
    salary: 830, qualification: 'Developer', city: 'Brest', date: '11/02/2016', tech: 'Python',
  },
  {
    salary: 1420, qualification: 'Developer', city: 'Mogilev', date: '09/25/2016', tech: 'C#',
  },
  {
    salary: 1405, qualification: 'Developer', city: 'Grodno', date: '05/26/2017', tech: 'R',
  },
  {
    salary: 1362, qualification: 'Developer', city: 'Grodno', date: '08/06/2017', tech: 'Ruby',
  },
  {
    salary: 1210, qualification: 'Developer', city: 'Vitebsk', date: '01/16/2018', tech: 'Python',
  },
  {
    salary: 806, qualification: 'Developer', city: 'Vitebsk', date: '10/10/2017', tech: 'JS',
  },
  {
    salary: 1277, qualification: 'Developer', city: 'Brest', date: '09/18/2016', tech: 'Java',
  },
  {
    salary: 814, qualification: 'Developer', city: 'Minsk', date: '05/12/2016', tech: 'C#',
  },
  {
    salary: 1069, qualification: 'Developer', city: 'Brest', date: '11/11/2016', tech: 'C#',
  },
  {
    salary: 1128, qualification: 'Developer', city: 'Vitebsk', date: '01/03/2018', tech: 'Ruby',
  },
  {
    salary: 1426, qualification: 'Developer', city: 'Mogilev', date: '07/20/2017', tech: 'R',
  },
  {
    salary: 1025, qualification: 'Developer', city: 'Gomel', date: '11/25/2017', tech: 'R',
  },
  {
    salary: 1053, qualification: 'Developer', city: 'Vitebsk', date: '10/03/2016', tech: 'Ruby',
  },
  {
    salary: 1344, qualification: 'Developer', city: 'Gomel', date: '04/12/2018', tech: 'Python',
  },
  {
    salary: 1018, qualification: 'Developer', city: 'Vitebsk', date: '01/07/2017', tech: 'JS',
  },
  {
    salary: 961, qualification: 'Developer', city: 'Vitebsk', date: '05/08/2016', tech: 'C#',
  },
  {
    salary: 1309, qualification: 'Developer', city: 'Grodno', date: '08/08/2016', tech: 'R',
  },
  {
    salary: 1111, qualification: 'Developer', city: 'Minsk', date: '10/06/2016', tech: 'Ruby',
  },
  {
    salary: 1074, qualification: 'Developer', city: 'Grodno', date: '06/28/2016', tech: 'C#',
  },
  {
    salary: 1223, qualification: 'Developer', city: 'Gomel', date: '06/14/2016', tech: 'JS',
  },
  {
    salary: 1162, qualification: 'Developer', city: 'Vitebsk', date: '07/27/2017', tech: 'Ruby',
  },
  {
    salary: 1363, qualification: 'Developer', city: 'Minsk', date: '11/22/2016', tech: 'Python',
  },
  {
    salary: 1462, qualification: 'Developer', city: 'Mogilev', date: '02/04/2016', tech: 'C#',
  },
  {
    salary: 920, qualification: 'Developer', city: 'Vitebsk', date: '03/20/2017', tech: 'Python',
  },
  {
    salary: 1418, qualification: 'Developer', city: 'Grodno', date: '10/02/2017', tech: 'C#',
  },
  {
    salary: 1305, qualification: 'Developer', city: 'Mogilev', date: '01/21/2018', tech: 'Ruby',
  },
  {
    salary: 1144, qualification: 'Developer', city: 'Grodno', date: '08/26/2017', tech: 'Java',
  },
  {
    salary: 1249, qualification: 'Developer', city: 'Grodno', date: '10/27/2017', tech: 'Java',
  },
  {
    salary: 1312, qualification: 'Developer', city: 'Gomel', date: '12/30/2016', tech: 'C#',
  },
  {
    salary: 1122, qualification: 'Developer', city: 'Mogilev', date: '10/03/2017', tech: 'Java',
  },
  {
    salary: 1189, qualification: 'Developer', city: 'Gomel', date: '08/19/2017', tech: 'Python',
  },
  {
    salary: 1239, qualification: 'Developer', city: 'Vitebsk', date: '05/26/2017', tech: 'R',
  },
  {
    salary: 1180, qualification: 'Developer', city: 'Grodno', date: '01/06/2016', tech: 'Python',
  },
  {
    salary: 1081, qualification: 'Developer', city: 'Mogilev', date: '05/03/2017', tech: 'R',
  },
  {
    salary: 903, qualification: 'Developer', city: 'Vitebsk', date: '04/08/2017', tech: 'Ruby',
  },
  {
    salary: 1446, qualification: 'Developer', city: 'Grodno', date: '09/20/2016', tech: 'Python',
  },
  {
    salary: 1326, qualification: 'Developer', city: 'Gomel', date: '10/19/2016', tech: 'R',
  },
  {
    salary: 852, qualification: 'Developer', city: 'Mogilev', date: '01/30/2016', tech: 'Python',
  },
  {
    salary: 1214, qualification: 'Developer', city: 'Vitebsk', date: '05/14/2016', tech: 'Java',
  },
  {
    salary: 1274, qualification: 'Developer', city: 'Mogilev', date: '11/13/2017', tech: 'C#',
  },
  {
    salary: 1382, qualification: 'Developer', city: 'Brest', date: '10/17/2017', tech: 'R',
  },
  {
    salary: 876, qualification: 'Developer', city: 'Brest', date: '09/30/2016', tech: 'Python',
  },
  {
    salary: 827, qualification: 'Developer', city: 'Vitebsk', date: '07/14/2016', tech: 'JS',
  },
  {
    salary: 1210, qualification: 'Developer', city: 'Gomel', date: '04/25/2017', tech: 'C#',
  },
  {
    salary: 1360, qualification: 'Developer', city: 'Grodno', date: '10/22/2017', tech: 'Ruby',
  },
  {
    salary: 1186, qualification: 'Developer', city: 'Grodno', date: '04/03/2018', tech: 'JS',
  },
  {
    salary: 1465, qualification: 'Developer', city: 'Gomel', date: '04/21/2018', tech: 'C#',
  },
  {
    salary: 1419, qualification: 'Developer', city: 'Grodno', date: '09/30/2016', tech: 'Java',
  },
  {
    salary: 1127, qualification: 'Developer', city: 'Vitebsk', date: '06/25/2016', tech: 'R',
  },
  {
    salary: 1075, qualification: 'Developer', city: 'Grodno', date: '08/18/2016', tech: 'Java',
  },
  {
    salary: 1150, qualification: 'Developer', city: 'Mogilev', date: '04/08/2017', tech: 'Java',
  },
  {
    salary: 1026, qualification: 'Developer', city: 'Brest', date: '02/09/2018', tech: 'JS',
  },
  {
    salary: 997, qualification: 'Developer', city: 'Brest', date: '12/01/2016', tech: 'C#',
  },
  {
    salary: 899, qualification: 'Developer', city: 'Brest', date: '02/17/2018', tech: 'Java',
  },
  {
    salary: 1418, qualification: 'Developer', city: 'Mogilev', date: '04/28/2017', tech: 'Java',
  },
  {
    salary: 1125, qualification: 'Developer', city: 'Brest', date: '11/30/2017', tech: 'Python',
  },
  {
    salary: 1115, qualification: 'Developer', city: 'Brest', date: '01/16/2017', tech: 'C#',
  },
  {
    salary: 989, qualification: 'Developer', city: 'Vitebsk', date: '03/04/2016', tech: 'Ruby',
  },
  {
    salary: 1075, qualification: 'Developer', city: 'Mogilev', date: '01/15/2016', tech: 'Ruby',
  },
  {
    salary: 1078, qualification: 'Developer', city: 'Vitebsk', date: '02/25/2018', tech: 'JS',
  },
  {
    salary: 1167, qualification: 'Developer', city: 'Mogilev', date: '09/20/2017', tech: 'Ruby',
  },
  {
    salary: 1335, qualification: 'Developer', city: 'Minsk', date: '01/22/2017', tech: 'JS',
  },
  {
    salary: 1167, qualification: 'Developer', city: 'Vitebsk', date: '03/28/2017', tech: 'R',
  },
  {
    salary: 949, qualification: 'Developer', city: 'Vitebsk', date: '04/04/2017', tech: 'Java',
  },
  {
    salary: 1236, qualification: 'Developer', city: 'Grodno', date: '03/21/2018', tech: 'Ruby',
  },
  {
    salary: 1165, qualification: 'Developer', city: 'Grodno', date: '08/18/2017', tech: 'Ruby',
  },
  {
    salary: 1326, qualification: 'Developer', city: 'Brest', date: '01/03/2017', tech: 'JS',
  },
  {
    salary: 1001, qualification: 'Developer', city: 'Gomel', date: '08/31/2016', tech: 'R',
  },
  {
    salary: 1269, qualification: 'Developer', city: 'Minsk', date: '01/01/2018', tech: 'JS',
  },
  {
    salary: 1089, qualification: 'Developer', city: 'Brest', date: '06/11/2016', tech: 'Java',
  },
  {
    salary: 1073, qualification: 'Developer', city: 'Brest', date: '06/28/2016', tech: 'JS',
  },
  {
    salary: 825, qualification: 'Developer', city: 'Brest', date: '02/26/2017', tech: 'Ruby',
  },
  {
    salary: 1003, qualification: 'Developer', city: 'Minsk', date: '03/16/2018', tech: 'Ruby',
  },
  {
    salary: 817, qualification: 'Developer', city: 'Minsk', date: '08/17/2016', tech: 'Java',
  },
  {
    salary: 1121, qualification: 'Developer', city: 'Mogilev', date: '10/17/2017', tech: 'JS',
  },
  {
    salary: 1123, qualification: 'Developer', city: 'Gomel', date: '09/20/2016', tech: 'C#',
  },
  {
    salary: 1002, qualification: 'Developer', city: 'Brest', date: '09/27/2016', tech: 'C#',
  },
  {
    salary: 1102, qualification: 'Developer', city: 'Brest', date: '02/15/2017', tech: 'Python',
  },
  {
    salary: 1107, qualification: 'Developer', city: 'Mogilev', date: '04/07/2017', tech: 'Python',
  },
  {
    salary: 867, qualification: 'Developer', city: 'Grodno', date: '02/09/2018', tech: 'Ruby',
  },
  {
    salary: 947, qualification: 'Developer', city: 'Minsk', date: '08/16/2016', tech: 'R',
  },
  {
    salary: 1302, qualification: 'Developer', city: 'Brest', date: '09/18/2016', tech: 'Java',
  },
  {
    salary: 825, qualification: 'Developer', city: 'Gomel', date: '08/02/2017', tech: 'C#',
  },
  {
    salary: 1039, qualification: 'Developer', city: 'Minsk', date: '05/25/2016', tech: 'R',
  },
  {
    salary: 838, qualification: 'Developer', city: 'Brest', date: '01/24/2018', tech: 'C#',
  },
  {
    salary: 1060, qualification: 'Developer', city: 'Vitebsk', date: '10/26/2017', tech: 'JS',
  },
  {
    salary: 968, qualification: 'Developer', city: 'Vitebsk', date: '05/31/2016', tech: 'Python',
  },
  {
    salary: 1391, qualification: 'Developer', city: 'Gomel', date: '08/23/2017', tech: 'Python',
  },
  {
    salary: 1074, qualification: 'Developer', city: 'Minsk', date: '02/07/2018', tech: 'R',
  },
  {
    salary: 1154, qualification: 'Developer', city: 'Minsk', date: '06/24/2017', tech: 'C#',
  },
  {
    salary: 1385, qualification: 'Developer', city: 'Brest', date: '10/24/2017', tech: 'JS',
  },
  {
    salary: 839, qualification: 'Developer', city: 'Vitebsk', date: '03/29/2017', tech: 'Python',
  },
  {
    salary: 1255, qualification: 'Developer', city: 'Minsk', date: '11/01/2016', tech: 'Python',
  },
  {
    salary: 1060, qualification: 'Developer', city: 'Mogilev', date: '02/27/2017', tech: 'Java',
  },
  {
    salary: 1198, qualification: 'Developer', city: 'Minsk', date: '07/20/2016', tech: 'Java',
  },
  {
    salary: 1246, qualification: 'Developer', city: 'Vitebsk', date: '10/02/2016', tech: 'Java',
  },
  {
    salary: 952, qualification: 'Developer', city: 'Brest', date: '11/11/2016', tech: 'R',
  },
  {
    salary: 1231, qualification: 'Developer', city: 'Minsk', date: '03/10/2017', tech: 'R',
  },
  {
    salary: 1402, qualification: 'Developer', city: 'Gomel', date: '03/13/2016', tech: 'R',
  },
  {
    salary: 969, qualification: 'Developer', city: 'Minsk', date: '02/01/2018', tech: 'JS',
  },
  {
    salary: 826, qualification: 'Developer', city: 'Vitebsk', date: '01/05/2016', tech: 'Python',
  },
  {
    salary: 832, qualification: 'Developer', city: 'Gomel', date: '01/31/2016', tech: 'Java',
  },
  {
    salary: 1132, qualification: 'Developer', city: 'Minsk', date: '06/16/2017', tech: 'Java',
  },
  {
    salary: 1011, qualification: 'Developer', city: 'Minsk', date: '09/06/2016', tech: 'Ruby',
  },
  {
    salary: 1469, qualification: 'Developer', city: 'Mogilev', date: '09/19/2016', tech: 'Ruby',
  },
  {
    salary: 828, qualification: 'Developer', city: 'Brest', date: '03/08/2017', tech: 'JS',
  },
  {
    salary: 1390, qualification: 'Developer', city: 'Grodno', date: '05/30/2017', tech: 'R',
  },
  {
    salary: 959, qualification: 'Developer', city: 'Brest', date: '04/14/2017', tech: 'JS',
  },
  {
    salary: 1120, qualification: 'Developer', city: 'Mogilev', date: '12/02/2016', tech: 'C#',
  },
  {
    salary: 859, qualification: 'Developer', city: 'Mogilev', date: '09/05/2017', tech: 'C#',
  },
  {
    salary: 1277, qualification: 'Developer', city: 'Vitebsk', date: '03/26/2016', tech: 'JS',
  },
  {
    salary: 1345, qualification: 'Developer', city: 'Minsk', date: '08/01/2016', tech: 'C#',
  },
  {
    salary: 1169, qualification: 'Developer', city: 'Vitebsk', date: '12/18/2017', tech: 'JS',
  },
  {
    salary: 874, qualification: 'Developer', city: 'Vitebsk', date: '04/10/2017', tech: 'JS',
  },
  {
    salary: 817, qualification: 'Developer', city: 'Grodno', date: '04/23/2016', tech: 'Java',
  },
  {
    salary: 924, qualification: 'Developer', city: 'Grodno', date: '01/01/2018', tech: 'R',
  },
  {
    salary: 1351, qualification: 'Developer', city: 'Minsk', date: '04/11/2018', tech: 'R',
  },
  {
    salary: 1315, qualification: 'Developer', city: 'Minsk', date: '10/04/2016', tech: 'Ruby',
  },
  {
    salary: 978, qualification: 'Developer', city: 'Vitebsk', date: '07/09/2016', tech: 'Python',
  },
  {
    salary: 1014, qualification: 'Developer', city: 'Minsk', date: '07/19/2017', tech: 'R',
  },
  {
    salary: 1219, qualification: 'Developer', city: 'Gomel', date: '09/06/2017', tech: 'Python',
  },
  {
    salary: 988, qualification: 'Developer', city: 'Mogilev', date: '07/19/2016', tech: 'JS',
  },
  {
    salary: 1252, qualification: 'Developer', city: 'Gomel', date: '03/17/2016', tech: 'C#',
  },
  {
    salary: 1013, qualification: 'Developer', city: 'Brest', date: '06/12/2017', tech: 'Java',
  },
  {
    salary: 1388, qualification: 'Developer', city: 'Vitebsk', date: '08/12/2016', tech: 'C#',
  },
  {
    salary: 904, qualification: 'Developer', city: 'Grodno', date: '10/02/2017', tech: 'Python',
  },
  {
    salary: 838, qualification: 'Developer', city: 'Gomel', date: '07/17/2017', tech: 'R',
  },
  {
    salary: 1398, qualification: 'Developer', city: 'Gomel', date: '04/22/2018', tech: 'C#',
  },
  {
    salary: 1006, qualification: 'Developer', city: 'Vitebsk', date: '09/13/2016', tech: 'Python',
  },
  {
    salary: 1128, qualification: 'Developer', city: 'Mogilev', date: '01/23/2018', tech: 'R',
  },
  {
    salary: 1200, qualification: 'Developer', city: 'Grodno', date: '08/07/2016', tech: 'Python',
  },
  {
    salary: 1213, qualification: 'Developer', city: 'Minsk', date: '04/19/2018', tech: 'Java',
  },
  {
    salary: 1451, qualification: 'Developer', city: 'Brest', date: '01/12/2018', tech: 'JS',
  },
  {
    salary: 942, qualification: 'Developer', city: 'Brest', date: '02/18/2018', tech: 'Ruby',
  },
  {
    salary: 1304, qualification: 'Developer', city: 'Vitebsk', date: '04/18/2018', tech: 'Java',
  },
  {
    salary: 813, qualification: 'Developer', city: 'Minsk', date: '03/05/2016', tech: 'R',
  },
  {
    salary: 945, qualification: 'Developer', city: 'Mogilev', date: '10/31/2016', tech: 'C#',
  },
  {
    salary: 1108, qualification: 'Developer', city: 'Grodno', date: '01/08/2016', tech: 'Java',
  },
  {
    salary: 1388, qualification: 'Developer', city: 'Vitebsk', date: '01/26/2016', tech: 'C#',
  },
  {
    salary: 1445, qualification: 'Developer', city: 'Vitebsk', date: '10/11/2016', tech: 'Python',
  },
  {
    salary: 1056, qualification: 'Developer', city: 'Mogilev', date: '08/27/2017', tech: 'JS',
  },
  {
    salary: 1242, qualification: 'Developer', city: 'Mogilev', date: '01/11/2017', tech: 'JS',
  },
  {
    salary: 1138, qualification: 'Developer', city: 'Grodno', date: '08/03/2016', tech: 'C#',
  },
  {
    salary: 1159, qualification: 'Developer', city: 'Gomel', date: '07/09/2016', tech: 'Java',
  },
  {
    salary: 1141, qualification: 'Developer', city: 'Minsk', date: '04/30/2017', tech: 'Java',
  },
  {
    salary: 1220, qualification: 'Developer', city: 'Mogilev', date: '11/16/2017', tech: 'Python',
  },
  {
    salary: 1454, qualification: 'Developer', city: 'Brest', date: '04/09/2016', tech: 'Ruby',
  },
  {
    salary: 937, qualification: 'Developer', city: 'Gomel', date: '02/26/2016', tech: 'R',
  },
  {
    salary: 962, qualification: 'Developer', city: 'Gomel', date: '02/11/2017', tech: 'Python',
  },
  {
    salary: 1310, qualification: 'Developer', city: 'Vitebsk', date: '02/02/2017', tech: 'R',
  },
  {
    salary: 883, qualification: 'Developer', city: 'Mogilev', date: '02/17/2018', tech: 'Java',
  },
  {
    salary: 882, qualification: 'Developer', city: 'Mogilev', date: '10/13/2017', tech: 'Python',
  },
  {
    salary: 1318, qualification: 'Developer', city: 'Gomel', date: '04/23/2016', tech: 'R',
  },
  {
    salary: 1320, qualification: 'Developer', city: 'Minsk', date: '08/11/2016', tech: 'C#',
  },
  {
    salary: 1050, qualification: 'Developer', city: 'Vitebsk', date: '01/14/2018', tech: 'Ruby',
  },
  {
    salary: 1495, qualification: 'Developer', city: 'Minsk', date: '02/08/2017', tech: 'Ruby',
  },
  {
    salary: 1346, qualification: 'Developer', city: 'Vitebsk', date: '09/24/2016', tech: 'Python',
  },
  {
    salary: 846, qualification: 'Developer', city: 'Grodno', date: '06/28/2016', tech: 'JS',
  },
  {
    salary: 890, qualification: 'Developer', city: 'Brest', date: '12/11/2016', tech: 'Python',
  },
  {
    salary: 916, qualification: 'Developer', city: 'Minsk', date: '09/12/2016', tech: 'Ruby',
  },
  {
    salary: 1461, qualification: 'Developer', city: 'Gomel', date: '07/23/2017', tech: 'Python',
  },
  {
    salary: 1080, qualification: 'Developer', city: 'Gomel', date: '07/05/2017', tech: 'JS',
  },
  {
    salary: 862, qualification: 'Developer', city: 'Brest', date: '04/12/2017', tech: 'Java',
  },
  {
    salary: 894, qualification: 'Developer', city: 'Gomel', date: '04/08/2017', tech: 'R',
  },
  {
    salary: 1353, qualification: 'Developer', city: 'Gomel', date: '12/22/2017', tech: 'JS',
  },
  {
    salary: 828, qualification: 'Developer', city: 'Brest', date: '02/14/2018', tech: 'Java',
  },
  {
    salary: 846, qualification: 'Developer', city: 'Vitebsk', date: '03/03/2018', tech: 'Ruby',
  },
  {
    salary: 951, qualification: 'Developer', city: 'Gomel', date: '01/24/2018', tech: 'Java',
  },
  {
    salary: 1040, qualification: 'Developer', city: 'Vitebsk', date: '05/30/2017', tech: 'Python',
  },
  {
    salary: 837, qualification: 'Developer', city: 'Grodno', date: '09/30/2016', tech: 'Ruby',
  },
  {
    salary: 1210, qualification: 'Developer', city: 'Brest', date: '05/12/2016', tech: 'Ruby',
  },
  {
    salary: 875, qualification: 'Developer', city: 'Grodno', date: '07/11/2016', tech: 'Python',
  },
  {
    salary: 1154, qualification: 'Developer', city: 'Brest', date: '02/25/2016', tech: 'C#',
  },
  {
    salary: 938, qualification: 'Developer', city: 'Vitebsk', date: '09/03/2017', tech: 'Java',
  },
  {
    salary: 892, qualification: 'Developer', city: 'Vitebsk', date: '06/24/2017', tech: 'JS',
  },
  {
    salary: 1283, qualification: 'Developer', city: 'Grodno', date: '01/31/2018', tech: 'Ruby',
  },
  {
    salary: 899, qualification: 'Developer', city: 'Minsk', date: '12/28/2017', tech: 'Java',
  },
  {
    salary: 1091, qualification: 'Developer', city: 'Brest', date: '08/06/2016', tech: 'Ruby',
  },
  {
    salary: 1345, qualification: 'Developer', city: 'Minsk', date: '05/20/2017', tech: 'Java',
  },
  {
    salary: 1469, qualification: 'Developer', city: 'Brest', date: '02/16/2018', tech: 'Java',
  },
  {
    salary: 970, qualification: 'Developer', city: 'Gomel', date: '09/15/2017', tech: 'Ruby',
  },
  {
    salary: 834, qualification: 'Developer', city: 'Mogilev', date: '06/10/2016', tech: 'C#',
  },
  {
    salary: 1079, qualification: 'Developer', city: 'Brest', date: '08/23/2016', tech: 'Java',
  },
  {
    salary: 963, qualification: 'Developer', city: 'Gomel', date: '03/15/2017', tech: 'C#',
  },
  {
    salary: 1084, qualification: 'Developer', city: 'Mogilev', date: '07/06/2017', tech: 'JS',
  },
  {
    salary: 1151, qualification: 'Developer', city: 'Gomel', date: '08/23/2016', tech: 'Java',
  },
  {
    salary: 808, qualification: 'Developer', city: 'Grodno', date: '08/27/2017', tech: 'Ruby',
  },
  {
    salary: 1474, qualification: 'Developer', city: 'Gomel', date: '07/30/2017', tech: 'JS',
  },
  {
    salary: 918, qualification: 'Developer', city: 'Vitebsk', date: '12/15/2016', tech: 'R',
  },
  {
    salary: 822, qualification: 'Developer', city: 'Vitebsk', date: '09/09/2017', tech: 'Python',
  },
  {
    salary: 1404, qualification: 'Developer', city: 'Gomel', date: '09/03/2016', tech: 'Ruby',
  },
  {
    salary: 904, qualification: 'Developer', city: 'Mogilev', date: '09/09/2016', tech: 'Python',
  },
  {
    salary: 1380, qualification: 'Developer', city: 'Mogilev', date: '04/13/2017', tech: 'Java',
  },
  {
    salary: 1499, qualification: 'Developer', city: 'Grodno', date: '05/18/2016', tech: 'Python',
  },
  {
    salary: 1123, qualification: 'Developer', city: 'Minsk', date: '03/23/2016', tech: 'Ruby',
  },
  {
    salary: 1440, qualification: 'Developer', city: 'Mogilev', date: '01/27/2018', tech: 'C#',
  },
  {
    salary: 1407, qualification: 'Developer', city: 'Vitebsk', date: '05/21/2017', tech: 'JS',
  },
  {
    salary: 967, qualification: 'Developer', city: 'Mogilev', date: '02/04/2018', tech: 'JS',
  },
  {
    salary: 1132, qualification: 'Developer', city: 'Mogilev', date: '07/26/2017', tech: 'C#',
  },
  {
    salary: 830, qualification: 'Developer', city: 'Brest', date: '06/07/2017', tech: 'Python',
  },
  {
    salary: 1307, qualification: 'Developer', city: 'Minsk', date: '07/04/2017', tech: 'Python',
  },
  {
    salary: 1382, qualification: 'Developer', city: 'Mogilev', date: '04/13/2018', tech: 'Python',
  },
  {
    salary: 1319, qualification: 'Developer', city: 'Gomel', date: '10/10/2016', tech: 'Ruby',
  },
  {
    salary: 1316, qualification: 'Developer', city: 'Gomel', date: '10/12/2017', tech: 'R',
  },
  {
    salary: 955, qualification: 'Developer', city: 'Grodno', date: '08/15/2016', tech: 'JS',
  },
  {
    salary: 884, qualification: 'Developer', city: 'Gomel', date: '02/03/2017', tech: 'Java',
  },
  {
    salary: 873, qualification: 'Developer', city: 'Vitebsk', date: '08/16/2016', tech: 'Java',
  },
  {
    salary: 1442, qualification: 'Developer', city: 'Brest', date: '06/17/2017', tech: 'Python',
  },
  {
    salary: 1231, qualification: 'Developer', city: 'Grodno', date: '12/29/2017', tech: 'Java',
  },
  {
    salary: 1322, qualification: 'Developer', city: 'Mogilev', date: '12/31/2016', tech: 'Python',
  },
  {
    salary: 1056, qualification: 'Developer', city: 'Minsk', date: '11/01/2016', tech: 'Java',
  },
  {
    salary: 839, qualification: 'Developer', city: 'Vitebsk', date: '01/17/2016', tech: 'R',
  },
  {
    salary: 914, qualification: 'Developer', city: 'Grodno', date: '04/22/2018', tech: 'Ruby',
  },
  {
    salary: 1134, qualification: 'Developer', city: 'Grodno', date: '12/21/2017', tech: 'C#',
  },
  {
    salary: 1448, qualification: 'Developer', city: 'Grodno', date: '12/09/2016', tech: 'C#',
  },
  {
    salary: 1184, qualification: 'Developer', city: 'Gomel', date: '05/23/2017', tech: 'Python',
  },
  {
    salary: 1094, qualification: 'Developer', city: 'Gomel', date: '04/20/2017', tech: 'Ruby',
  },
  {
    salary: 1456, qualification: 'Developer', city: 'Brest', date: '07/02/2016', tech: 'Java',
  },
  {
    salary: 927, qualification: 'Developer', city: 'Grodno', date: '08/28/2016', tech: 'R',
  },
  {
    salary: 1277, qualification: 'Developer', city: 'Gomel', date: '05/23/2016', tech: 'Ruby',
  },
  {
    salary: 1463, qualification: 'Developer', city: 'Minsk', date: '12/09/2016', tech: 'C#',
  },
  {
    salary: 935, qualification: 'Developer', city: 'Grodno', date: '08/10/2017', tech: 'R',
  },
  {
    salary: 1041, qualification: 'Developer', city: 'Grodno', date: '12/24/2017', tech: 'Java',
  },
  {
    salary: 1081, qualification: 'Developer', city: 'Mogilev', date: '10/16/2016', tech: 'Ruby',
  },
  {
    salary: 1426, qualification: 'Developer', city: 'Vitebsk', date: '04/17/2018', tech: 'Ruby',
  },
  {
    salary: 1455, qualification: 'Developer', city: 'Minsk', date: '03/24/2017', tech: 'Java',
  },
  {
    salary: 1367, qualification: 'Developer', city: 'Mogilev', date: '11/14/2017', tech: 'Ruby',
  },
  {
    salary: 1149, qualification: 'Developer', city: 'Mogilev', date: '07/20/2017', tech: 'JS',
  },
  {
    salary: 1191, qualification: 'Developer', city: 'Gomel', date: '06/02/2017', tech: 'Ruby',
  },
  {
    salary: 1373, qualification: 'Developer', city: 'Grodno', date: '09/23/2017', tech: 'Java',
  },
  {
    salary: 1142, qualification: 'Developer', city: 'Brest', date: '08/17/2017', tech: 'Ruby',
  },
  {
    salary: 1174, qualification: 'Developer', city: 'Vitebsk', date: '10/04/2017', tech: 'Ruby',
  },
  {
    salary: 1200, qualification: 'Developer', city: 'Mogilev', date: '07/23/2017', tech: 'Ruby',
  },
  {
    salary: 986, qualification: 'Developer', city: 'Gomel', date: '11/04/2017', tech: 'R',
  },
  {
    salary: 1296, qualification: 'Developer', city: 'Mogilev', date: '06/27/2016', tech: 'JS',
  },
  {
    salary: 1141, qualification: 'Developer', city: 'Vitebsk', date: '11/26/2016', tech: 'JS',
  },
  {
    salary: 1230, qualification: 'Developer', city: 'Vitebsk', date: '07/16/2016', tech: 'C#',
  },
  {
    salary: 1259, qualification: 'Developer', city: 'Vitebsk', date: '01/13/2017', tech: 'C#',
  },
  {
    salary: 1258, qualification: 'Developer', city: 'Mogilev', date: '02/03/2018', tech: 'Python',
  },
  {
    salary: 800, qualification: 'Developer', city: 'Mogilev', date: '10/24/2017', tech: 'C#',
  },
  {
    salary: 855, qualification: 'Developer', city: 'Grodno', date: '07/31/2017', tech: 'Java',
  },
  {
    salary: 1192, qualification: 'Developer', city: 'Brest', date: '01/02/2016', tech: 'R',
  },
  {
    salary: 1215, qualification: 'Developer', city: 'Minsk', date: '02/06/2016', tech: 'Ruby',
  },
  {
    salary: 1007, qualification: 'Developer', city: 'Grodno', date: '02/16/2018', tech: 'C#',
  },
  {
    salary: 1025, qualification: 'Developer', city: 'Gomel', date: '08/31/2017', tech: 'JS',
  },
  {
    salary: 1321, qualification: 'Developer', city: 'Vitebsk', date: '12/23/2017', tech: 'Ruby',
  },
  {
    salary: 892, qualification: 'Developer', city: 'Gomel', date: '02/13/2017', tech: 'R',
  },
  {
    salary: 1131, qualification: 'Developer', city: 'Brest', date: '12/20/2016', tech: 'Ruby',
  },
  {
    salary: 916, qualification: 'Developer', city: 'Brest', date: '01/01/2016', tech: 'R',
  },
  {
    salary: 955, qualification: 'Developer', city: 'Vitebsk', date: '07/27/2016', tech: 'Ruby',
  },
  {
    salary: 1167, qualification: 'Developer', city: 'Grodno', date: '08/13/2016', tech: 'Ruby',
  },
  {
    salary: 806, qualification: 'Developer', city: 'Minsk', date: '04/17/2018', tech: 'JS',
  },
  {
    salary: 1253, qualification: 'Developer', city: 'Minsk', date: '03/05/2017', tech: 'Java',
  },
  {
    salary: 1313, qualification: 'Developer', city: 'Grodno', date: '08/18/2017', tech: 'C#',
  },
  {
    salary: 1213, qualification: 'Developer', city: 'Gomel', date: '12/21/2016', tech: 'Python',
  },
  {
    salary: 1081, qualification: 'Developer', city: 'Mogilev', date: '11/26/2017', tech: 'Java',
  },
  {
    salary: 1218, qualification: 'Developer', city: 'Mogilev', date: '11/24/2016', tech: 'C#',
  },
  {
    salary: 1155, qualification: 'Developer', city: 'Gomel', date: '08/01/2017', tech: 'Python',
  },
  {
    salary: 1395, qualification: 'Developer', city: 'Vitebsk', date: '08/18/2017', tech: 'R',
  },
  {
    salary: 1146, qualification: 'Developer', city: 'Vitebsk', date: '09/21/2016', tech: 'Ruby',
  },
  {
    salary: 1373, qualification: 'Developer', city: 'Gomel', date: '12/16/2016', tech: 'Ruby',
  },
  {
    salary: 1356, qualification: 'Developer', city: 'Grodno', date: '06/29/2017', tech: 'Ruby',
  },
  {
    salary: 1298, qualification: 'Developer', city: 'Vitebsk', date: '02/23/2018', tech: 'Ruby',
  },
  {
    salary: 1227, qualification: 'Developer', city: 'Grodno', date: '07/02/2016', tech: 'Python',
  },
  {
    salary: 1207, qualification: 'Developer', city: 'Minsk', date: '04/01/2018', tech: 'Ruby',
  },
  {
    salary: 1177, qualification: 'Developer', city: 'Mogilev', date: '04/04/2018', tech: 'Python',
  },
  {
    salary: 1071, qualification: 'Developer', city: 'Grodno', date: '02/15/2018', tech: 'Python',
  },
  {
    salary: 1288, qualification: 'Developer', city: 'Grodno', date: '02/16/2017', tech: 'R',
  },
  {
    salary: 990, qualification: 'Developer', city: 'Mogilev', date: '05/31/2017', tech: 'R',
  },
  {
    salary: 991, qualification: 'Developer', city: 'Brest', date: '04/11/2018', tech: 'Python',
  },
  {
    salary: 993, qualification: 'Developer', city: 'Mogilev', date: '02/07/2017', tech: 'Java',
  },
  {
    salary: 879, qualification: 'Developer', city: 'Brest', date: '02/16/2017', tech: 'Python',
  },
  {
    salary: 1247, qualification: 'Developer', city: 'Minsk', date: '09/16/2017', tech: 'Python',
  },
  {
    salary: 1267, qualification: 'Developer', city: 'Gomel', date: '09/02/2016', tech: 'C#',
  },
  {
    salary: 1148, qualification: 'Developer', city: 'Vitebsk', date: '04/07/2018', tech: 'Python',
  },
  {
    salary: 1201, qualification: 'Developer', city: 'Vitebsk', date: '05/01/2017', tech: 'Python',
  },
  {
    salary: 1142, qualification: 'Developer', city: 'Gomel', date: '12/22/2016', tech: 'Java',
  },
  {
    salary: 1085, qualification: 'Developer', city: 'Minsk', date: '08/05/2016', tech: 'JS',
  },
  {
    salary: 1225, qualification: 'Developer', city: 'Minsk', date: '05/04/2016', tech: 'Ruby',
  },
  {
    salary: 1214, qualification: 'Developer', city: 'Vitebsk', date: '10/14/2017', tech: 'Ruby',
  },
  {
    salary: 982, qualification: 'Developer', city: 'Gomel', date: '01/20/2017', tech: 'Java',
  },
  {
    salary: 1472, qualification: 'Developer', city: 'Minsk', date: '02/08/2018', tech: 'Java',
  },
  {
    salary: 1263, qualification: 'Developer', city: 'Mogilev', date: '04/05/2017', tech: 'C#',
  },
  {
    salary: 830, qualification: 'Developer', city: 'Grodno', date: '02/07/2017', tech: 'C#',
  },
  {
    salary: 1379, qualification: 'Developer', city: 'Minsk', date: '01/20/2018', tech: 'R',
  },
  {
    salary: 1172, qualification: 'Developer', city: 'Brest', date: '09/12/2016', tech: 'Python',
  },
  {
    salary: 1288, qualification: 'Developer', city: 'Brest', date: '10/15/2016', tech: 'Python',
  },
  {
    salary: 1205, qualification: 'Developer', city: 'Grodno', date: '06/19/2017', tech: 'Ruby',
  },
  {
    salary: 1024, qualification: 'Developer', city: 'Gomel', date: '04/29/2016', tech: 'Python',
  },
  {
    salary: 1336, qualification: 'Developer', city: 'Vitebsk', date: '05/03/2017', tech: 'C#',
  },
  {
    salary: 870, qualification: 'Developer', city: 'Grodno', date: '02/14/2016', tech: 'JS',
  },
  {
    salary: 1177, qualification: 'Developer', city: 'Brest', date: '09/13/2016', tech: 'Python',
  },
  {
    salary: 999, qualification: 'Developer', city: 'Vitebsk', date: '03/02/2018', tech: 'Ruby',
  },
  {
    salary: 1382, qualification: 'Developer', city: 'Minsk', date: '06/18/2017', tech: 'C#',
  },
  {
    salary: 1174, qualification: 'Developer', city: 'Vitebsk', date: '07/04/2017', tech: 'R',
  },
  {
    salary: 1435, qualification: 'Developer', city: 'Gomel', date: '08/06/2016', tech: 'C#',
  },
  {
    salary: 1034, qualification: 'Developer', city: 'Minsk', date: '08/02/2017', tech: 'C#',
  },
  {
    salary: 1233, qualification: 'Developer', city: 'Mogilev', date: '06/26/2016', tech: 'Java',
  },
  {
    salary: 1077, qualification: 'Developer', city: 'Vitebsk', date: '03/24/2016', tech: 'Ruby',
  },
  {
    salary: 1280, qualification: 'Developer', city: 'Brest', date: '04/02/2018', tech: 'Java',
  },
  {
    salary: 921, qualification: 'Developer', city: 'Grodno', date: '07/29/2016', tech: 'Java',
  },
  {
    salary: 807, qualification: 'Developer', city: 'Brest', date: '02/11/2018', tech: 'JS',
  },
  {
    salary: 1426, qualification: 'Developer', city: 'Vitebsk', date: '09/16/2017', tech: 'Ruby',
  },
  {
    salary: 1359, qualification: 'Developer', city: 'Brest', date: '01/06/2016', tech: 'Ruby',
  },
  {
    salary: 895, qualification: 'Developer', city: 'Gomel', date: '08/04/2017', tech: 'Python',
  },
  {
    salary: 1076, qualification: 'Developer', city: 'Vitebsk', date: '01/16/2017', tech: 'JS',
  },
  {
    salary: 1111, qualification: 'Developer', city: 'Mogilev', date: '01/18/2016', tech: 'Java',
  },
  {
    salary: 1351, qualification: 'Developer', city: 'Minsk', date: '07/08/2016', tech: 'Ruby',
  },
  {
    salary: 1048, qualification: 'Developer', city: 'Brest', date: '04/06/2017', tech: 'Python',
  },
  {
    salary: 805, qualification: 'Developer', city: 'Gomel', date: '05/08/2017', tech: 'Python',
  },
  {
    salary: 1172, qualification: 'Developer', city: 'Gomel', date: '12/07/2016', tech: 'Ruby',
  },
  {
    salary: 1193, qualification: 'Developer', city: 'Vitebsk', date: '12/13/2017', tech: 'C#',
  },
  {
    salary: 1124, qualification: 'Developer', city: 'Mogilev', date: '01/06/2018', tech: 'C#',
  },
  {
    salary: 1176, qualification: 'Developer', city: 'Grodno', date: '10/09/2017', tech: 'Python',
  },
  {
    salary: 840, qualification: 'Developer', city: 'Minsk', date: '01/19/2018', tech: 'Python',
  },
  {
    salary: 1100, qualification: 'Developer', city: 'Mogilev', date: '04/01/2018', tech: 'Java',
  },
  {
    salary: 1385, qualification: 'Developer', city: 'Grodno', date: '12/16/2016', tech: 'Python',
  },
  {
    salary: 1162, qualification: 'Developer', city: 'Vitebsk', date: '07/21/2017', tech: 'Java',
  },
  {
    salary: 942, qualification: 'Developer', city: 'Mogilev', date: '01/31/2018', tech: 'Ruby',
  },
  {
    salary: 1318, qualification: 'Developer', city: 'Vitebsk', date: '03/08/2017', tech: 'Ruby',
  },
  {
    salary: 821, qualification: 'Developer', city: 'Grodno', date: '11/12/2016', tech: 'Java',
  },
  {
    salary: 1372, qualification: 'Developer', city: 'Brest', date: '10/24/2017', tech: 'Java',
  },
  {
    salary: 1328, qualification: 'Developer', city: 'Brest', date: '09/17/2017', tech: 'C#',
  },
  {
    salary: 1026, qualification: 'Developer', city: 'Vitebsk', date: '01/20/2017', tech: 'Java',
  },
  {
    salary: 1359, qualification: 'Developer', city: 'Grodno', date: '04/12/2018', tech: 'C#',
  },
  {
    salary: 1112, qualification: 'Developer', city: 'Gomel', date: '07/02/2016', tech: 'Java',
  },
  {
    salary: 1121, qualification: 'Developer', city: 'Brest', date: '07/18/2016', tech: 'Python',
  },
  {
    salary: 1304, qualification: 'Developer', city: 'Vitebsk', date: '10/14/2017', tech: 'R',
  },
  {
    salary: 868, qualification: 'Developer', city: 'Gomel', date: '05/08/2017', tech: 'R',
  },
  {
    salary: 908, qualification: 'Developer', city: 'Gomel', date: '06/15/2016', tech: 'Python',
  },
  {
    salary: 1130, qualification: 'Developer', city: 'Gomel', date: '12/10/2016', tech: 'Ruby',
  },
  {
    salary: 982, qualification: 'Developer', city: 'Grodno', date: '02/23/2016', tech: 'Python',
  },
  {
    salary: 1397, qualification: 'Developer', city: 'Minsk', date: '01/17/2018', tech: 'Java',
  },
  {
    salary: 1472, qualification: 'Developer', city: 'Gomel', date: '05/23/2017', tech: 'C#',
  },
  {
    salary: 1227, qualification: 'Developer', city: 'Minsk', date: '09/01/2017', tech: 'Ruby',
  },
  {
    salary: 874, qualification: 'Developer', city: 'Grodno', date: '09/29/2016', tech: 'R',
  },
  {
    salary: 1101, qualification: 'Developer', city: 'Brest', date: '03/27/2018', tech: 'Java',
  },
  {
    salary: 936, qualification: 'Developer', city: 'Minsk', date: '10/03/2016', tech: 'Java',
  },
  {
    salary: 1053, qualification: 'Developer', city: 'Grodno', date: '12/16/2017', tech: 'C#',
  },
  {
    salary: 1107, qualification: 'Developer', city: 'Minsk', date: '11/30/2016', tech: 'JS',
  },
  {
    salary: 1070, qualification: 'Developer', city: 'Minsk', date: '03/18/2017', tech: 'C#',
  },
  {
    salary: 1244, qualification: 'Developer', city: 'Minsk', date: '05/29/2017', tech: 'C#',
  },
  {
    salary: 863, qualification: 'Developer', city: 'Grodno', date: '08/14/2016', tech: 'C#',
  },
  {
    salary: 824, qualification: 'Developer', city: 'Mogilev', date: '03/01/2018', tech: 'Ruby',
  },
  {
    salary: 1325, qualification: 'Developer', city: 'Minsk', date: '09/10/2016', tech: 'C#',
  },
  {
    salary: 1337, qualification: 'Developer', city: 'Mogilev', date: '12/01/2017', tech: 'C#',
  },
  {
    salary: 1205, qualification: 'Developer', city: 'Gomel', date: '11/04/2017', tech: 'Python',
  },
  {
    salary: 1215, qualification: 'Developer', city: 'Gomel', date: '08/28/2017', tech: 'C#',
  },
  {
    salary: 1261, qualification: 'Developer', city: 'Mogilev', date: '02/08/2018', tech: 'C#',
  },
  {
    salary: 1189, qualification: 'Developer', city: 'Mogilev', date: '03/22/2018', tech: 'C#',
  },
  {
    salary: 1435, qualification: 'Developer', city: 'Mogilev', date: '07/11/2016', tech: 'Ruby',
  },
  {
    salary: 1003, qualification: 'Developer', city: 'Vitebsk', date: '04/15/2018', tech: 'Ruby',
  },
  {
    salary: 1019, qualification: 'Developer', city: 'Mogilev', date: '07/04/2016', tech: 'C#',
  },
  {
    salary: 843, qualification: 'Developer', city: 'Vitebsk', date: '03/29/2017', tech: 'JS',
  },
  {
    salary: 1456, qualification: 'Developer', city: 'Mogilev', date: '09/16/2016', tech: 'Java',
  },
  {
    salary: 872, qualification: 'Developer', city: 'Mogilev', date: '04/25/2018', tech: 'C#',
  },
  {
    salary: 811, qualification: 'Developer', city: 'Vitebsk', date: '11/06/2016', tech: 'JS',
  },
  {
    salary: 1234, qualification: 'Developer', city: 'Minsk', date: '03/25/2018', tech: 'Ruby',
  },
  {
    salary: 1368, qualification: 'Developer', city: 'Brest', date: '11/03/2017', tech: 'Ruby',
  },
  {
    salary: 899, qualification: 'Developer', city: 'Mogilev', date: '06/01/2016', tech: 'Java',
  },
  {
    salary: 954, qualification: 'Developer', city: 'Grodno', date: '11/18/2017', tech: 'Python',
  },
  {
    salary: 1092, qualification: 'Developer', city: 'Gomel', date: '12/25/2017', tech: 'Python',
  },
  {
    salary: 1264, qualification: 'Developer', city: 'Mogilev', date: '04/24/2017', tech: 'Python',
  },
  {
    salary: 977, qualification: 'Developer', city: 'Vitebsk', date: '04/06/2018', tech: 'C#',
  },
  {
    salary: 1016, qualification: 'Developer', city: 'Brest', date: '12/23/2016', tech: 'C#',
  },
  {
    salary: 948, qualification: 'Developer', city: 'Minsk', date: '06/27/2017', tech: 'JS',
  },
  {
    salary: 1273, qualification: 'Developer', city: 'Gomel', date: '06/25/2017', tech: 'C#',
  },
  {
    salary: 1089, qualification: 'Developer', city: 'Grodno', date: '09/25/2016', tech: 'R',
  },
  {
    salary: 1014, qualification: 'Developer', city: 'Brest', date: '09/18/2017', tech: 'JS',
  },
  {
    salary: 1336, qualification: 'Developer', city: 'Gomel', date: '03/09/2018', tech: 'Python',
  },
  {
    salary: 1135, qualification: 'Developer', city: 'Grodno', date: '07/10/2016', tech: 'JS',
  },
  {
    salary: 1068, qualification: 'Developer', city: 'Mogilev', date: '10/18/2016', tech: 'Python',
  },
  {
    salary: 1485, qualification: 'Developer', city: 'Grodno', date: '03/01/2017', tech: 'Ruby',
  },
  {
    salary: 1262, qualification: 'Developer', city: 'Vitebsk', date: '04/02/2018', tech: 'JS',
  },
  {
    salary: 1118, qualification: 'Developer', city: 'Vitebsk', date: '11/07/2016', tech: 'JS',
  },
  {
    salary: 1332, qualification: 'Developer', city: 'Vitebsk', date: '03/18/2018', tech: 'Ruby',
  },
  {
    salary: 1199, qualification: 'Developer', city: 'Gomel', date: '07/22/2016', tech: 'C#',
  },
  {
    salary: 1055, qualification: 'Developer', city: 'Mogilev', date: '02/08/2016', tech: 'C#',
  },
  {
    salary: 842, qualification: 'Developer', city: 'Gomel', date: '05/10/2017', tech: 'R',
  },
  {
    salary: 889, qualification: 'Developer', city: 'Grodno', date: '08/28/2017', tech: 'Ruby',
  },
  {
    salary: 868, qualification: 'Developer', city: 'Gomel', date: '11/16/2017', tech: 'R',
  },
  {
    salary: 1333, qualification: 'Developer', city: 'Grodno', date: '03/17/2017', tech: 'C#',
  },
  {
    salary: 1066, qualification: 'Developer', city: 'Brest', date: '10/15/2016', tech: 'JS',
  },
  {
    salary: 1216, qualification: 'Developer', city: 'Grodno', date: '02/10/2016', tech: 'C#',
  },
  {
    salary: 1007, qualification: 'Developer', city: 'Minsk', date: '04/18/2017', tech: 'Python',
  },
  {
    salary: 1056, qualification: 'Developer', city: 'Gomel', date: '02/21/2017', tech: 'R',
  },
  {
    salary: 1378, qualification: 'Developer', city: 'Gomel', date: '02/17/2018', tech: 'Python',
  },
  {
    salary: 1360, qualification: 'Developer', city: 'Vitebsk', date: '05/08/2017', tech: 'R',
  },
  {
    salary: 986, qualification: 'Developer', city: 'Minsk', date: '03/28/2016', tech: 'JS',
  },
  {
    salary: 1319, qualification: 'Developer', city: 'Grodno', date: '06/13/2016', tech: 'Ruby',
  },
  {
    salary: 1085, qualification: 'Developer', city: 'Mogilev', date: '03/14/2017', tech: 'R',
  },
  {
    salary: 930, qualification: 'Developer', city: 'Grodno', date: '05/13/2017', tech: 'Java',
  },
  {
    salary: 1341, qualification: 'Developer', city: 'Brest', date: '01/10/2016', tech: 'Java',
  },
  {
    salary: 1140, qualification: 'Developer', city: 'Grodno', date: '03/26/2018', tech: 'C#',
  },
  {
    salary: 1221, qualification: 'Developer', city: 'Brest', date: '06/28/2017', tech: 'R',
  },
  {
    salary: 1263, qualification: 'Developer', city: 'Vitebsk', date: '10/08/2017', tech: 'Java',
  },
  {
    salary: 1217, qualification: 'Developer', city: 'Mogilev', date: '06/13/2017', tech: 'C#',
  },
  {
    salary: 868, qualification: 'Developer', city: 'Minsk', date: '10/30/2017', tech: 'Java',
  },
  {
    salary: 1337, qualification: 'Developer', city: 'Brest', date: '12/24/2017', tech: 'Ruby',
  },
  {
    salary: 1331, qualification: 'Developer', city: 'Mogilev', date: '07/07/2016', tech: 'Java',
  },
  {
    salary: 819, qualification: 'Developer', city: 'Grodno', date: '07/14/2016', tech: 'C#',
  },
  {
    salary: 978, qualification: 'Developer', city: 'Minsk', date: '05/21/2017', tech: 'Python',
  },
  {
    salary: 1297, qualification: 'Developer', city: 'Mogilev', date: '06/14/2017', tech: 'JS',
  },
  {
    salary: 1492, qualification: 'Developer', city: 'Grodno', date: '03/28/2017', tech: 'Ruby',
  },
  {
    salary: 1129, qualification: 'Developer', city: 'Gomel', date: '07/14/2016', tech: 'C#',
  },
  {
    salary: 898, qualification: 'Developer', city: 'Gomel', date: '03/18/2017', tech: 'Python',
  },
  {
    salary: 1166, qualification: 'Developer', city: 'Grodno', date: '04/04/2018', tech: 'Python',
  },
  {
    salary: 884, qualification: 'Developer', city: 'Grodno', date: '06/12/2017', tech: 'C#',
  },
  {
    salary: 979, qualification: 'Developer', city: 'Minsk', date: '11/30/2017', tech: 'Ruby',
  },
  {
    salary: 810, qualification: 'Developer', city: 'Minsk', date: '02/04/2016', tech: 'R',
  },
  {
    salary: 1223, qualification: 'Developer', city: 'Gomel', date: '07/18/2017', tech: 'C#',
  },
  {
    salary: 1123, qualification: 'Developer', city: 'Minsk', date: '05/14/2017', tech: 'C#',
  },
  {
    salary: 1194, qualification: 'Developer', city: 'Brest', date: '09/23/2017', tech: 'C#',
  },
  {
    salary: 1481, qualification: 'Developer', city: 'Grodno', date: '03/15/2016', tech: 'Java',
  },
  {
    salary: 869, qualification: 'Developer', city: 'Gomel', date: '11/14/2016', tech: 'R',
  },
  {
    salary: 873, qualification: 'Developer', city: 'Gomel', date: '12/15/2017', tech: 'C#',
  },
  {
    salary: 1177, qualification: 'Developer', city: 'Gomel', date: '06/12/2016', tech: 'C#',
  },
  {
    salary: 1154, qualification: 'Developer', city: 'Gomel', date: '01/09/2016', tech: 'R',
  },
  {
    salary: 937, qualification: 'Developer', city: 'Brest', date: '01/15/2018', tech: 'C#',
  },
  {
    salary: 1207, qualification: 'Developer', city: 'Gomel', date: '10/24/2017', tech: 'Python',
  },
  {
    salary: 1392, qualification: 'Developer', city: 'Mogilev', date: '03/01/2017', tech: 'JS',
  },
  {
    salary: 880, qualification: 'Developer', city: 'Mogilev', date: '11/14/2016', tech: 'JS',
  },
  {
    salary: 1145, qualification: 'Developer', city: 'Minsk', date: '10/24/2016', tech: 'Java',
  },
  {
    salary: 849, qualification: 'Developer', city: 'Vitebsk', date: '09/25/2017', tech: 'R',
  },
  {
    salary: 913, qualification: 'Developer', city: 'Vitebsk', date: '11/26/2016', tech: 'Python',
  },
  {
    salary: 955, qualification: 'Developer', city: 'Brest', date: '07/07/2017', tech: 'Ruby',
  },
  {
    salary: 1484, qualification: 'Developer', city: 'Minsk', date: '05/20/2017', tech: 'C#',
  },
  {
    salary: 1303, qualification: 'Developer', city: 'Vitebsk', date: '10/10/2017', tech: 'Java',
  },
  {
    salary: 921, qualification: 'Developer', city: 'Vitebsk', date: '09/09/2016', tech: 'Ruby',
  },
  {
    salary: 1147, qualification: 'Developer', city: 'Mogilev', date: '07/10/2017', tech: 'C#',
  },
  {
    salary: 1462, qualification: 'Developer', city: 'Mogilev', date: '06/13/2017', tech: 'Java',
  },
  {
    salary: 943, qualification: 'Developer', city: 'Mogilev', date: '03/02/2016', tech: 'JS',
  },
  {
    salary: 1349, qualification: 'Developer', city: 'Gomel', date: '04/02/2016', tech: 'Ruby',
  },
  {
    salary: 927, qualification: 'Developer', city: 'Brest', date: '02/16/2017', tech: 'C#',
  },
  {
    salary: 1337, qualification: 'Developer', city: 'Grodno', date: '06/20/2017', tech: 'C#',
  },
  {
    salary: 1121, qualification: 'Developer', city: 'Vitebsk', date: '01/03/2016', tech: 'JS',
  },
  {
    salary: 1455, qualification: 'Developer', city: 'Grodno', date: '04/05/2017', tech: 'Ruby',
  },
  {
    salary: 1056, qualification: 'Developer', city: 'Minsk', date: '07/30/2016', tech: 'JS',
  },
  {
    salary: 1160, qualification: 'Developer', city: 'Minsk', date: '04/15/2016', tech: 'Java',
  },
  {
    salary: 1095, qualification: 'Developer', city: 'Grodno', date: '06/23/2016', tech: 'Java',
  },
  {
    salary: 947, qualification: 'Developer', city: 'Brest', date: '05/21/2017', tech: 'Java',
  },
  {
    salary: 1061, qualification: 'Developer', city: 'Grodno', date: '10/12/2017', tech: 'Java',
  },
  {
    salary: 845, qualification: 'Developer', city: 'Brest', date: '01/16/2018', tech: 'Python',
  },
  {
    salary: 827, qualification: 'Developer', city: 'Brest', date: '01/15/2018', tech: 'Java',
  },
  {
    salary: 1413, qualification: 'Developer', city: 'Grodno', date: '03/12/2018', tech: 'Ruby',
  },
  {
    salary: 1453, qualification: 'Developer', city: 'Brest', date: '02/13/2016', tech: 'JS',
  },
  {
    salary: 1482, qualification: 'Developer', city: 'Brest', date: '01/13/2017', tech: 'JS',
  },
  {
    salary: 1356, qualification: 'Developer', city: 'Grodno', date: '01/21/2017', tech: 'JS',
  },
  {
    salary: 1031, qualification: 'Developer', city: 'Grodno', date: '01/26/2017', tech: 'Ruby',
  },
  {
    salary: 928, qualification: 'Developer', city: 'Vitebsk', date: '02/17/2018', tech: 'R',
  },
  {
    salary: 999, qualification: 'Developer', city: 'Gomel', date: '04/21/2017', tech: 'Java',
  },
  {
    salary: 1080, qualification: 'Developer', city: 'Minsk', date: '12/19/2016', tech: 'C#',
  },
  {
    salary: 1172, qualification: 'Developer', city: 'Brest', date: '04/30/2017', tech: 'Java',
  },
  {
    salary: 1275, qualification: 'Developer', city: 'Minsk', date: '07/05/2016', tech: 'Java',
  },
  {
    salary: 1354, qualification: 'Developer', city: 'Mogilev', date: '08/14/2017', tech: 'Java',
  },
  {
    salary: 1132, qualification: 'Developer', city: 'Gomel', date: '08/29/2017', tech: 'JS',
  },
  {
    salary: 1132, qualification: 'Developer', city: 'Mogilev', date: '02/19/2016', tech: 'Ruby',
  },
  {
    salary: 1280, qualification: 'Developer', city: 'Mogilev', date: '12/21/2017', tech: 'C#',
  },
  {
    salary: 1127, qualification: 'Developer', city: 'Vitebsk', date: '02/26/2017', tech: 'JS',
  },
  {
    salary: 1496, qualification: 'Developer', city: 'Brest', date: '01/04/2018', tech: 'Ruby',
  },
  {
    salary: 1430, qualification: 'Developer', city: 'Grodno', date: '10/05/2016', tech: 'Java',
  },
  {
    salary: 1402, qualification: 'Developer', city: 'Brest', date: '05/13/2017', tech: 'Java',
  },
  {
    salary: 1283, qualification: 'Developer', city: 'Minsk', date: '01/20/2017', tech: 'C#',
  },
  {
    salary: 1498, qualification: 'Developer', city: 'Grodno', date: '12/14/2016', tech: 'C#',
  },
  {
    salary: 828, qualification: 'Developer', city: 'Grodno', date: '03/14/2016', tech: 'Ruby',
  },
  {
    salary: 1198, qualification: 'Developer', city: 'Vitebsk', date: '09/21/2016', tech: 'JS',
  },
  {
    salary: 815, qualification: 'Developer', city: 'Vitebsk', date: '10/25/2017', tech: 'Java',
  },
  {
    salary: 838, qualification: 'Developer', city: 'Gomel', date: '02/01/2017', tech: 'JS',
  },
  {
    salary: 964, qualification: 'Developer', city: 'Gomel', date: '08/27/2016', tech: 'Java',
  },
  {
    salary: 1213, qualification: 'Developer', city: 'Grodno', date: '01/20/2017', tech: 'JS',
  },
  {
    salary: 1041, qualification: 'Developer', city: 'Mogilev', date: '05/26/2017', tech: 'Python',
  },
  {
    salary: 1476, qualification: 'Developer', city: 'Brest', date: '01/25/2018', tech: 'C#',
  },
  {
    salary: 1144, qualification: 'Developer', city: 'Minsk', date: '11/03/2016', tech: 'Java',
  },
  {
    salary: 1062, qualification: 'Developer', city: 'Mogilev', date: '06/10/2017', tech: 'JS',
  },
  {
    salary: 1154, qualification: 'Developer', city: 'Brest', date: '03/17/2018', tech: 'Ruby',
  },
  {
    salary: 1229, qualification: 'Developer', city: 'Minsk', date: '07/06/2017', tech: 'Java',
  },
  {
    salary: 891, qualification: 'Developer', city: 'Gomel', date: '09/29/2016', tech: 'R',
  },
  {
    salary: 1320, qualification: 'Developer', city: 'Brest', date: '11/15/2017', tech: 'Python',
  },
  {
    salary: 927, qualification: 'Developer', city: 'Gomel', date: '01/26/2017', tech: 'Java',
  },
  {
    salary: 1452, qualification: 'Developer', city: 'Vitebsk', date: '07/30/2016', tech: 'JS',
  },
  {
    salary: 848, qualification: 'Developer', city: 'Mogilev', date: '08/17/2016', tech: 'R',
  },
  {
    salary: 1123, qualification: 'Developer', city: 'Vitebsk', date: '02/26/2016', tech: 'Ruby',
  },
  {
    salary: 1447, qualification: 'Developer', city: 'Gomel', date: '10/06/2016', tech: 'C#',
  },
  {
    salary: 835, qualification: 'Developer', city: 'Vitebsk', date: '06/01/2017', tech: 'Java',
  },
  {
    salary: 1001, qualification: 'Developer', city: 'Grodno', date: '07/29/2016', tech: 'R',
  },
  {
    salary: 932, qualification: 'Developer', city: 'Gomel', date: '01/24/2018', tech: 'JS',
  },
  {
    salary: 1296, qualification: 'Developer', city: 'Brest', date: '02/23/2017', tech: 'Java',
  },
  {
    salary: 1141, qualification: 'Developer', city: 'Minsk', date: '09/30/2016', tech: 'C#',
  },
  {
    salary: 1059, qualification: 'Developer', city: 'Grodno', date: '05/16/2016', tech: 'Java',
  },
  {
    salary: 1191, qualification: 'Developer', city: 'Mogilev', date: '10/30/2017', tech: 'Java',
  },
  {
    salary: 969, qualification: 'Developer', city: 'Minsk', date: '05/05/2017', tech: 'JS',
  },
  {
    salary: 902, qualification: 'Developer', city: 'Gomel', date: '08/13/2017', tech: 'R',
  },
  {
    salary: 917, qualification: 'Developer', city: 'Grodno', date: '11/12/2016', tech: 'R',
  },
  {
    salary: 999, qualification: 'Developer', city: 'Mogilev', date: '06/26/2016', tech: 'JS',
  },
  {
    salary: 848, qualification: 'Developer', city: 'Grodno', date: '10/22/2016', tech: 'R',
  },
  {
    salary: 960, qualification: 'Developer', city: 'Minsk', date: '02/26/2018', tech: 'Python',
  },
  {
    salary: 1480, qualification: 'Developer', city: 'Grodno', date: '11/20/2016', tech: 'Ruby',
  },
  {
    salary: 1065, qualification: 'Developer', city: 'Grodno', date: '04/11/2016', tech: 'R',
  },
  {
    salary: 1018, qualification: 'Developer', city: 'Gomel', date: '04/23/2017', tech: 'C#',
  },
  {
    salary: 943, qualification: 'Developer', city: 'Mogilev', date: '05/21/2017', tech: 'Ruby',
  },
  {
    salary: 1022, qualification: 'Developer', city: 'Gomel', date: '06/12/2016', tech: 'C#',
  },
  {
    salary: 923, qualification: 'Developer', city: 'Minsk', date: '11/15/2016', tech: 'JS',
  },
  {
    salary: 1209, qualification: 'Developer', city: 'Minsk', date: '10/16/2016', tech: 'R',
  },
  {
    salary: 936, qualification: 'Developer', city: 'Vitebsk', date: '03/07/2017', tech: 'JS',
  },
  {
    salary: 1179, qualification: 'Developer', city: 'Grodno', date: '08/26/2016', tech: 'Java',
  },
  {
    salary: 842, qualification: 'Developer', city: 'Brest', date: '12/16/2016', tech: 'Ruby',
  },
  {
    salary: 996, qualification: 'Developer', city: 'Gomel', date: '12/03/2016', tech: 'JS',
  },
  {
    salary: 1261, qualification: 'Developer', city: 'Grodno', date: '04/15/2016', tech: 'Ruby',
  },
  {
    salary: 1154, qualification: 'Developer', city: 'Brest', date: '01/29/2016', tech: 'C#',
  },
  {
    salary: 1085, qualification: 'Developer', city: 'Minsk', date: '07/29/2017', tech: 'Python',
  },
  {
    salary: 1480, qualification: 'Developer', city: 'Vitebsk', date: '06/15/2017', tech: 'Python',
  },
  {
    salary: 914, qualification: 'Developer', city: 'Grodno', date: '03/23/2016', tech: 'Python',
  },
  {
    salary: 1259, qualification: 'Developer', city: 'Grodno', date: '03/21/2017', tech: 'Java',
  },
  {
    salary: 879, qualification: 'Developer', city: 'Brest', date: '09/20/2017', tech: 'Java',
  },
  {
    salary: 1300, qualification: 'Developer', city: 'Gomel', date: '11/20/2016', tech: 'Python',
  },
  {
    salary: 1089, qualification: 'Developer', city: 'Minsk', date: '08/23/2017', tech: 'R',
  },
  {
    salary: 834, qualification: 'Developer', city: 'Gomel', date: '07/23/2017', tech: 'R',
  },
  {
    salary: 1036, qualification: 'Developer', city: 'Vitebsk', date: '03/18/2018', tech: 'Python',
  },
  {
    salary: 1110, qualification: 'Developer', city: 'Minsk', date: '02/16/2016', tech: 'Python',
  },
  {
    salary: 1215, qualification: 'Developer', city: 'Minsk', date: '10/22/2017', tech: 'Python',
  },
  {
    salary: 855, qualification: 'Developer', city: 'Brest', date: '06/28/2017', tech: 'Python',
  },
  {
    salary: 1043, qualification: 'Developer', city: 'Grodno', date: '10/14/2016', tech: 'Ruby',
  },
  {
    salary: 977, qualification: 'Developer', city: 'Gomel', date: '05/25/2017', tech: 'C#',
  },
  {
    salary: 1080, qualification: 'Developer', city: 'Vitebsk', date: '05/04/2016', tech: 'Python',
  },
  {
    salary: 1292, qualification: 'Developer', city: 'Mogilev', date: '05/06/2016', tech: 'C#',
  },
  {
    salary: 1180, qualification: 'Developer', city: 'Gomel', date: '02/04/2017', tech: 'Python',
  },
  {
    salary: 975, qualification: 'Developer', city: 'Mogilev', date: '01/29/2017', tech: 'Ruby',
  },
  {
    salary: 1202, qualification: 'Developer', city: 'Grodno', date: '11/08/2016', tech: 'C#',
  },
  {
    salary: 1255, qualification: 'Developer', city: 'Gomel', date: '05/13/2017', tech: 'Java',
  },
  {
    salary: 1238, qualification: 'Developer', city: 'Vitebsk', date: '06/15/2016', tech: 'Python',
  },
  {
    salary: 1130, qualification: 'Developer', city: 'Grodno', date: '08/03/2017', tech: 'Ruby',
  },
  {
    salary: 938, qualification: 'Developer', city: 'Mogilev', date: '06/10/2017', tech: 'Java',
  },
  {
    salary: 1377, qualification: 'Developer', city: 'Minsk', date: '02/15/2017', tech: 'Java',
  },
  {
    salary: 1279, qualification: 'Developer', city: 'Minsk', date: '02/21/2016', tech: 'R',
  },
  {
    salary: 859, qualification: 'Developer', city: 'Minsk', date: '08/26/2017', tech: 'C#',
  },
  {
    salary: 1052, qualification: 'Developer', city: 'Minsk', date: '12/01/2017', tech: 'C#',
  },
  {
    salary: 1263, qualification: 'Developer', city: 'Vitebsk', date: '11/26/2017', tech: 'Python',
  },
  {
    salary: 1046, qualification: 'Developer', city: 'Vitebsk', date: '01/22/2018', tech: 'Java',
  },
  {
    salary: 1191, qualification: 'Developer', city: 'Grodno', date: '03/29/2016', tech: 'Java',
  },
  {
    salary: 1295, qualification: 'Developer', city: 'Brest', date: '02/11/2018', tech: 'JS',
  },
  {
    salary: 878, qualification: 'Developer', city: 'Brest', date: '09/25/2016', tech: 'C#',
  },
  {
    salary: 1413, qualification: 'Developer', city: 'Gomel', date: '03/02/2016', tech: 'C#',
  },
  {
    salary: 1241, qualification: 'Developer', city: 'Grodno', date: '06/30/2017', tech: 'Java',
  },
  {
    salary: 1368, qualification: 'Developer', city: 'Mogilev', date: '10/14/2017', tech: 'JS',
  },
  {
    salary: 1003, qualification: 'Developer', city: 'Brest', date: '12/05/2016', tech: 'Java',
  },
  {
    salary: 1408, qualification: 'Developer', city: 'Mogilev', date: '11/29/2017', tech: 'Ruby',
  },
  {
    salary: 1127, qualification: 'Developer', city: 'Brest', date: '09/18/2017', tech: 'C#',
  },
  {
    salary: 1098, qualification: 'Developer', city: 'Grodno', date: '10/18/2017', tech: 'Python',
  },
  {
    salary: 1120, qualification: 'Developer', city: 'Mogilev', date: '01/11/2018', tech: 'JS',
  },
  {
    salary: 807, qualification: 'Developer', city: 'Brest', date: '04/26/2018', tech: 'R',
  },
  {
    salary: 1408, qualification: 'Developer', city: 'Grodno', date: '06/10/2017', tech: 'Ruby',
  },
  {
    salary: 1476, qualification: 'Developer', city: 'Gomel', date: '02/20/2018', tech: 'Ruby',
  },
  {
    salary: 1449, qualification: 'Developer', city: 'Brest', date: '04/17/2016', tech: 'Ruby',
  },
  {
    salary: 1392, qualification: 'Developer', city: 'Brest', date: '09/16/2016', tech: 'R',
  },
  {
    salary: 1204, qualification: 'Developer', city: 'Brest', date: '08/21/2016', tech: 'R',
  },
  {
    salary: 1354, qualification: 'Developer', city: 'Grodno', date: '03/24/2016', tech: 'JS',
  },
  {
    salary: 889, qualification: 'Developer', city: 'Grodno', date: '06/22/2016', tech: 'JS',
  },
  {
    salary: 1057, qualification: 'Developer', city: 'Minsk', date: '04/12/2016', tech: 'C#',
  },
  {
    salary: 1157, qualification: 'Developer', city: 'Vitebsk', date: '02/28/2017', tech: 'Java',
  },
  {
    salary: 856, qualification: 'Developer', city: 'Vitebsk', date: '04/16/2016', tech: 'Java',
  },
  {
    salary: 801, qualification: 'Developer', city: 'Gomel', date: '07/16/2017', tech: 'JS',
  },
  {
    salary: 1041, qualification: 'Developer', city: 'Gomel', date: '06/08/2016', tech: 'Python',
  },
  {
    salary: 1159, qualification: 'Developer', city: 'Brest', date: '05/25/2016', tech: 'Ruby',
  },
  {
    salary: 1329, qualification: 'Developer', city: 'Mogilev', date: '04/08/2018', tech: 'Ruby',
  },
  {
    salary: 1303, qualification: 'Developer', city: 'Vitebsk', date: '05/25/2017', tech: 'Python',
  },
  {
    salary: 945, qualification: 'Developer', city: 'Vitebsk', date: '06/20/2017', tech: 'Python',
  },
  {
    salary: 937, qualification: 'Developer', city: 'Brest', date: '04/27/2016', tech: 'Python',
  },
  {
    salary: 1449, qualification: 'Developer', city: 'Gomel', date: '01/03/2018', tech: 'Python',
  },
  {
    salary: 922, qualification: 'Developer', city: 'Gomel', date: '04/11/2016', tech: 'Ruby',
  },
  {
    salary: 1482, qualification: 'Developer', city: 'Minsk', date: '10/26/2016', tech: 'Python',
  },
  {
    salary: 988, qualification: 'Developer', city: 'Mogilev', date: '05/19/2017', tech: 'C#',
  },
  {
    salary: 1479, qualification: 'Developer', city: 'Grodno', date: '04/06/2016', tech: 'R',
  },
  {
    salary: 1139, qualification: 'Developer', city: 'Vitebsk', date: '06/27/2016', tech: 'Java',
  },
  {
    salary: 843, qualification: 'Developer', city: 'Gomel', date: '01/11/2018', tech: 'Python',
  },
  {
    salary: 1234, qualification: 'Developer', city: 'Minsk', date: '07/09/2016', tech: 'C#',
  },
  {
    salary: 1496, qualification: 'Developer', city: 'Mogilev', date: '03/12/2018', tech: 'R',
  },
  {
    salary: 1190, qualification: 'Developer', city: 'Gomel', date: '06/28/2017', tech: 'Ruby',
  },
  {
    salary: 886, qualification: 'Developer', city: 'Mogilev', date: '02/25/2017', tech: 'C#',
  },
  {
    salary: 1116, qualification: 'Developer', city: 'Gomel', date: '01/23/2018', tech: 'Python',
  },
  {
    salary: 1050, qualification: 'Developer', city: 'Mogilev', date: '09/26/2016', tech: 'R',
  },
  {
    salary: 1377, qualification: 'Developer', city: 'Minsk', date: '03/06/2017', tech: 'Ruby',
  },
  {
    salary: 1344, qualification: 'Developer', city: 'Gomel', date: '02/02/2018', tech: 'Python',
  },
  {
    salary: 1247, qualification: 'Developer', city: 'Vitebsk', date: '02/12/2017', tech: 'JS',
  },
  {
    salary: 1159, qualification: 'Developer', city: 'Grodno', date: '10/30/2016', tech: 'R',
  },
  {
    salary: 1191, qualification: 'Developer', city: 'Minsk', date: '05/18/2016', tech: 'Java',
  },
  {
    salary: 1357, qualification: 'Developer', city: 'Grodno', date: '08/07/2017', tech: 'C#',
  },
  {
    salary: 1269, qualification: 'Developer', city: 'Mogilev', date: '05/18/2016', tech: 'Ruby',
  },
  {
    salary: 1286, qualification: 'Developer', city: 'Vitebsk', date: '02/11/2016', tech: 'Ruby',
  },
  {
    salary: 1341, qualification: 'Developer', city: 'Gomel', date: '03/17/2017', tech: 'Python',
  },
  {
    salary: 1350, qualification: 'Developer', city: 'Vitebsk', date: '04/07/2018', tech: 'Java',
  },
  {
    salary: 989, qualification: 'Developer', city: 'Minsk', date: '03/20/2016', tech: 'Java',
  },
  {
    salary: 1232, qualification: 'Developer', city: 'Grodno', date: '11/21/2016', tech: 'JS',
  },
  {
    salary: 1495, qualification: 'Developer', city: 'Vitebsk', date: '09/10/2017', tech: 'Java',
  },
  {
    salary: 1189, qualification: 'Developer', city: 'Minsk', date: '09/03/2016', tech: 'C#',
  },
  {
    salary: 1237, qualification: 'Developer', city: 'Grodno', date: '01/22/2017', tech: 'Java',
  },
  {
    salary: 1435, qualification: 'Developer', city: 'Minsk', date: '06/17/2016', tech: 'Python',
  },
  {
    salary: 1173, qualification: 'Developer', city: 'Vitebsk', date: '09/29/2016', tech: 'R',
  },
  {
    salary: 1395, qualification: 'Developer', city: 'Minsk', date: '07/05/2016', tech: 'R',
  },
  {
    salary: 1251, qualification: 'Developer', city: 'Vitebsk', date: '10/11/2017', tech: 'C#',
  },
  {
    salary: 952, qualification: 'Developer', city: 'Gomel', date: '09/26/2017', tech: 'JS',
  },
  {
    salary: 1383, qualification: 'Developer', city: 'Brest', date: '01/19/2018', tech: 'Python',
  },
  {
    salary: 1294, qualification: 'Developer', city: 'Mogilev', date: '06/01/2017', tech: 'Ruby',
  },
  {
    salary: 1267, qualification: 'Developer', city: 'Vitebsk', date: '12/23/2016', tech: 'C#',
  },
  {
    salary: 1153, qualification: 'Developer', city: 'Mogilev', date: '03/24/2017', tech: 'C#',
  },
  {
    salary: 1126, qualification: 'Developer', city: 'Minsk', date: '02/15/2016', tech: 'Python',
  },
  {
    salary: 1069, qualification: 'Developer', city: 'Brest', date: '02/18/2018', tech: 'JS',
  },
  {
    salary: 815, qualification: 'Developer', city: 'Brest', date: '04/27/2016', tech: 'C#',
  },
  {
    salary: 1383, qualification: 'Developer', city: 'Brest', date: '09/20/2016', tech: 'C#',
  },
  {
    salary: 894, qualification: 'Developer', city: 'Brest', date: '12/23/2017', tech: 'Java',
  },
  {
    salary: 872, qualification: 'Developer', city: 'Grodno', date: '07/25/2017', tech: 'Ruby',
  },
  {
    salary: 1198, qualification: 'Developer', city: 'Vitebsk', date: '03/08/2017', tech: 'JS',
  },
  {
    salary: 1290, qualification: 'Developer', city: 'Minsk', date: '03/01/2018', tech: 'R',
  },
  {
    salary: 1128, qualification: 'Developer', city: 'Vitebsk', date: '11/13/2017', tech: 'C#',
  },
  {
    salary: 1368, qualification: 'Developer', city: 'Mogilev', date: '05/16/2017', tech: 'Ruby',
  },
  {
    salary: 1462, qualification: 'Developer', city: 'Vitebsk', date: '08/20/2016', tech: 'Java',
  },
  {
    salary: 1177, qualification: 'Developer', city: 'Gomel', date: '10/08/2016', tech: 'Java',
  },
  {
    salary: 1154, qualification: 'Developer', city: 'Brest', date: '03/02/2016', tech: 'Python',
  },
  {
    salary: 1049, qualification: 'Developer', city: 'Vitebsk', date: '04/13/2018', tech: 'Ruby',
  },
  {
    salary: 1432, qualification: 'Developer', city: 'Grodno', date: '01/31/2016', tech: 'JS',
  },
  {
    salary: 1117, qualification: 'Developer', city: 'Vitebsk', date: '01/31/2016', tech: 'R',
  },
  {
    salary: 1047, qualification: 'Developer', city: 'Vitebsk', date: '09/17/2017', tech: 'Java',
  },
  {
    salary: 1065, qualification: 'Developer', city: 'Brest', date: '02/27/2018', tech: 'R',
  },
  {
    salary: 1307, qualification: 'Developer', city: 'Mogilev', date: '07/23/2016', tech: 'Ruby',
  },
  {
    salary: 1064, qualification: 'Developer', city: 'Vitebsk', date: '11/06/2017', tech: 'C#',
  },
  {
    salary: 1025, qualification: 'Developer', city: 'Vitebsk', date: '09/03/2016', tech: 'Ruby',
  },
  {
    salary: 927, qualification: 'Developer', city: 'Brest', date: '03/22/2018', tech: 'Java',
  },
  {
    salary: 1013, qualification: 'Developer', city: 'Vitebsk', date: '03/29/2016', tech: 'JS',
  },
  {
    salary: 808, qualification: 'Developer', city: 'Vitebsk', date: '04/27/2016', tech: 'Ruby',
  },
  {
    salary: 982, qualification: 'Developer', city: 'Grodno', date: '08/22/2016', tech: 'Java',
  },
  {
    salary: 1138, qualification: 'Developer', city: 'Vitebsk', date: '04/09/2018', tech: 'R',
  },
  {
    salary: 1385, qualification: 'Developer', city: 'Vitebsk', date: '03/05/2018', tech: 'C#',
  },
  {
    salary: 1108, qualification: 'Developer', city: 'Brest', date: '04/23/2016', tech: 'JS',
  },
  {
    salary: 1211, qualification: 'Developer', city: 'Mogilev', date: '01/01/2017', tech: 'Java',
  },
  {
    salary: 1325, qualification: 'Developer', city: 'Brest', date: '05/18/2017', tech: 'C#',
  },
  {
    salary: 835, qualification: 'Developer', city: 'Grodno', date: '07/27/2017', tech: 'R',
  },
  {
    salary: 1196, qualification: 'Developer', city: 'Gomel', date: '07/24/2017', tech: 'JS',
  },
  {
    salary: 1390, qualification: 'Developer', city: 'Gomel', date: '10/24/2017', tech: 'Python',
  },
  {
    salary: 1186, qualification: 'Developer', city: 'Vitebsk', date: '04/23/2018', tech: 'JS',
  },
  {
    salary: 882, qualification: 'Developer', city: 'Grodno', date: '03/21/2017', tech: 'JS',
  },
  {
    salary: 1148, qualification: 'Developer', city: 'Grodno', date: '02/08/2017', tech: 'Ruby',
  },
  {
    salary: 916, qualification: 'Developer', city: 'Grodno', date: '02/27/2016', tech: 'Ruby',
  },
  {
    salary: 1190, qualification: 'Developer', city: 'Mogilev', date: '09/25/2016', tech: 'Ruby',
  },
  {
    salary: 1480, qualification: 'Developer', city: 'Mogilev', date: '06/19/2017', tech: 'Java',
  },
  {
    salary: 894, qualification: 'Developer', city: 'Vitebsk', date: '12/26/2017', tech: 'R',
  },
  {
    salary: 1209, qualification: 'Developer', city: 'Gomel', date: '11/12/2016', tech: 'R',
  },
  {
    salary: 1086, qualification: 'Developer', city: 'Mogilev', date: '01/01/2016', tech: 'R',
  },
  {
    salary: 906, qualification: 'Developer', city: 'Grodno', date: '01/21/2017', tech: 'C#',
  },
  {
    salary: 1478, qualification: 'Developer', city: 'Gomel', date: '03/05/2018', tech: 'Python',
  },
  {
    salary: 1327, qualification: 'Developer', city: 'Mogilev', date: '06/23/2017', tech: 'Java',
  },
  {
    salary: 815, qualification: 'Developer', city: 'Gomel', date: '11/17/2017', tech: 'R',
  },
  {
    salary: 849, qualification: 'Developer', city: 'Vitebsk', date: '03/25/2018', tech: 'C#',
  },
  {
    salary: 1148, qualification: 'Developer', city: 'Mogilev', date: '02/02/2017', tech: 'Ruby',
  },
  {
    salary: 967, qualification: 'Developer', city: 'Brest', date: '04/12/2016', tech: 'Python',
  },
  {
    salary: 1400, qualification: 'Developer', city: 'Grodno', date: '10/02/2017', tech: 'Python',
  },
  {
    salary: 1461, qualification: 'Developer', city: 'Gomel', date: '09/12/2017', tech: 'R',
  },
  {
    salary: 868, qualification: 'Developer', city: 'Gomel', date: '07/13/2017', tech: 'Java',
  },
  {
    salary: 1171, qualification: 'Developer', city: 'Brest', date: '01/25/2016', tech: 'Ruby',
  },
  {
    salary: 1135, qualification: 'Developer', city: 'Vitebsk', date: '03/08/2017', tech: 'JS',
  },
  {
    salary: 998, qualification: 'Developer', city: 'Gomel', date: '08/21/2016', tech: 'JS',
  },
  {
    salary: 1301, qualification: 'Developer', city: 'Brest', date: '09/25/2016', tech: 'C#',
  },
  {
    salary: 1283, qualification: 'Developer', city: 'Vitebsk', date: '12/14/2017', tech: 'C#',
  },
  {
    salary: 833, qualification: 'Developer', city: 'Vitebsk', date: '04/24/2018', tech: 'Python',
  },
  {
    salary: 901, qualification: 'Developer', city: 'Minsk', date: '09/25/2016', tech: 'JS',
  },
  {
    salary: 1380, qualification: 'Developer', city: 'Brest', date: '08/30/2016', tech: 'Java',
  },
  {
    salary: 894, qualification: 'Developer', city: 'Vitebsk', date: '02/01/2018', tech: 'C#',
  },
  {
    salary: 915, qualification: 'Developer', city: 'Minsk', date: '08/13/2016', tech: 'R',
  },
  {
    salary: 1200, qualification: 'Developer', city: 'Vitebsk', date: '03/15/2017', tech: 'C#',
  },
  {
    salary: 1215, qualification: 'Developer', city: 'Brest', date: '01/21/2016', tech: 'Python',
  },
  {
    salary: 1129, qualification: 'Developer', city: 'Gomel', date: '06/30/2017', tech: 'Python',
  },
  {
    salary: 1410, qualification: 'Developer', city: 'Grodno', date: '02/28/2016', tech: 'C#',
  },
  {
    salary: 836, qualification: 'Developer', city: 'Brest', date: '10/02/2016', tech: 'Python',
  },
  {
    salary: 947, qualification: 'Developer', city: 'Vitebsk', date: '07/07/2017', tech: 'Python',
  },
  {
    salary: 1241, qualification: 'Developer', city: 'Grodno', date: '02/27/2016', tech: 'Python',
  },
  {
    salary: 948, qualification: 'Developer', city: 'Vitebsk', date: '01/05/2018', tech: 'Python',
  },
  {
    salary: 800, qualification: 'Developer', city: 'Brest', date: '06/15/2016', tech: 'Ruby',
  },
  {
    salary: 1410, qualification: 'Developer', city: 'Brest', date: '08/29/2017', tech: 'JS',
  },
  {
    salary: 923, qualification: 'Developer', city: 'Grodno', date: '09/06/2016', tech: 'C#',
  },
  {
    salary: 1002, qualification: 'Developer', city: 'Grodno', date: '08/08/2017', tech: 'Java',
  },
  {
    salary: 1488, qualification: 'Developer', city: 'Gomel', date: '11/22/2016', tech: 'Python',
  },
  {
    salary: 861, qualification: 'Developer', city: 'Mogilev', date: '12/20/2017', tech: 'C#',
  },
  {
    salary: 1112, qualification: 'Developer', city: 'Grodno', date: '11/20/2016', tech: 'Java',
  },
  {
    salary: 1096, qualification: 'Developer', city: 'Minsk', date: '08/16/2017', tech: 'JS',
  },
  {
    salary: 1103, qualification: 'Developer', city: 'Mogilev', date: '09/26/2016', tech: 'Ruby',
  },
  {
    salary: 840, qualification: 'Developer', city: 'Grodno', date: '12/24/2016', tech: 'R',
  },
  {
    salary: 1016, qualification: 'Developer', city: 'Gomel', date: '09/17/2017', tech: 'Ruby',
  },
  {
    salary: 1433, qualification: 'Developer', city: 'Grodno', date: '01/13/2017', tech: 'Java',
  },
  {
    salary: 1186, qualification: 'Developer', city: 'Brest', date: '01/17/2016', tech: 'Ruby',
  },
  {
    salary: 1224, qualification: 'Developer', city: 'Vitebsk', date: '04/12/2017', tech: 'Ruby',
  },
  {
    salary: 1344, qualification: 'Developer', city: 'Minsk', date: '08/04/2016', tech: 'Ruby',
  },
  {
    salary: 1408, qualification: 'Developer', city: 'Vitebsk', date: '10/05/2017', tech: 'Java',
  },
  {
    salary: 1466, qualification: 'Developer', city: 'Minsk', date: '03/30/2017', tech: 'Python',
  },
  {
    salary: 1095, qualification: 'Developer', city: 'Vitebsk', date: '01/13/2016', tech: 'C#',
  },
  {
    salary: 833, qualification: 'Developer', city: 'Mogilev', date: '11/23/2017', tech: 'Java',
  },
  {
    salary: 1069, qualification: 'Developer', city: 'Minsk', date: '01/11/2017', tech: 'Ruby',
  },
  {
    salary: 1242, qualification: 'Developer', city: 'Minsk', date: '07/31/2017', tech: 'JS',
  },
  {
    salary: 1037, qualification: 'Developer', city: 'Grodno', date: '01/23/2018', tech: 'Ruby',
  },
  {
    salary: 908, qualification: 'Developer', city: 'Mogilev', date: '03/13/2016', tech: 'Python',
  },
  {
    salary: 1341, qualification: 'Developer', city: 'Brest', date: '03/09/2016', tech: 'Java',
  },
  {
    salary: 845, qualification: 'Developer', city: 'Brest', date: '11/20/2017', tech: 'Python',
  },
  {
    salary: 1423, qualification: 'Developer', city: 'Mogilev', date: '12/07/2017', tech: 'C#',
  },
  {
    salary: 1030, qualification: 'Developer', city: 'Brest', date: '01/20/2018', tech: 'JS',
  },
  {
    salary: 1354, qualification: 'Developer', city: 'Gomel', date: '09/15/2016', tech: 'R',
  },
  {
    salary: 1256, qualification: 'Developer', city: 'Vitebsk', date: '08/01/2016', tech: 'Python',
  },
  {
    salary: 1147, qualification: 'Developer', city: 'Grodno', date: '06/21/2017', tech: 'JS',
  },
  {
    salary: 1002, qualification: 'Developer', city: 'Grodno', date: '12/15/2017', tech: 'JS',
  },
  {
    salary: 903, qualification: 'Developer', city: 'Minsk', date: '07/02/2017', tech: 'C#',
  },
  {
    salary: 1390, qualification: 'Developer', city: 'Gomel', date: '03/11/2017', tech: 'JS',
  },
  {
    salary: 1267, qualification: 'Developer', city: 'Grodno', date: '09/14/2016', tech: 'Java',
  },
  {
    salary: 854, qualification: 'Developer', city: 'Minsk', date: '08/21/2016', tech: 'JS',
  },
  {
    salary: 1448, qualification: 'Developer', city: 'Vitebsk', date: '03/30/2018', tech: 'Python',
  },
  {
    salary: 1439, qualification: 'Developer', city: 'Grodno', date: '04/04/2018', tech: 'JS',
  },
  {
    salary: 1072, qualification: 'Developer', city: 'Grodno', date: '03/18/2017', tech: 'Java',
  },
  {
    salary: 1100, qualification: 'Developer', city: 'Minsk', date: '05/19/2017', tech: 'Python',
  },
  {
    salary: 1481, qualification: 'Developer', city: 'Mogilev', date: '03/13/2018', tech: 'Ruby',
  },
  {
    salary: 1453, qualification: 'Developer', city: 'Vitebsk', date: '04/10/2018', tech: 'Java',
  },
  {
    salary: 1173, qualification: 'Developer', city: 'Minsk', date: '05/14/2016', tech: 'Java',
  },
  {
    salary: 1119, qualification: 'Developer', city: 'Minsk', date: '01/05/2017', tech: 'Java',
  },
  {
    salary: 1226, qualification: 'Developer', city: 'Vitebsk', date: '10/16/2016', tech: 'Python',
  },
  {
    salary: 805, qualification: 'Developer', city: 'Gomel', date: '02/11/2017', tech: 'R',
  },
  {
    salary: 1058, qualification: 'Developer', city: 'Minsk', date: '08/15/2016', tech: 'C#',
  },
  {
    salary: 920, qualification: 'Developer', city: 'Brest', date: '12/16/2017', tech: 'R',
  },
  {
    salary: 837, qualification: 'Developer', city: 'Brest', date: '09/09/2016', tech: 'Java',
  },
  {
    salary: 820, qualification: 'Developer', city: 'Brest', date: '07/10/2016', tech: 'Python',
  },
  {
    salary: 870, qualification: 'Developer', city: 'Brest', date: '04/17/2016', tech: 'Java',
  },
  {
    salary: 1274, qualification: 'Developer', city: 'Mogilev', date: '10/03/2017', tech: 'C#',
  },
  {
    salary: 911, qualification: 'Developer', city: 'Vitebsk', date: '03/25/2016', tech: 'C#',
  },
  {
    salary: 1110, qualification: 'Developer', city: 'Gomel', date: '09/11/2017', tech: 'JS',
  },
  {
    salary: 1360, qualification: 'Developer', city: 'Gomel', date: '04/24/2017', tech: 'C#',
  },
  {
    salary: 973, qualification: 'Developer', city: 'Minsk', date: '07/22/2016', tech: 'Java',
  },
  {
    salary: 805, qualification: 'Developer', city: 'Minsk', date: '04/09/2017', tech: 'R',
  },
  {
    salary: 1462, qualification: 'Developer', city: 'Minsk', date: '02/27/2016', tech: 'Java',
  },
  {
    salary: 1297, qualification: 'Developer', city: 'Brest', date: '11/18/2017', tech: 'Ruby',
  },
  {
    salary: 944, qualification: 'Developer', city: 'Brest', date: '02/26/2018', tech: 'Java',
  },
  {
    salary: 1235, qualification: 'Developer', city: 'Minsk', date: '09/15/2016', tech: 'Python',
  },
  {
    salary: 1137, qualification: 'Developer', city: 'Gomel', date: '01/04/2018', tech: 'Java',
  },
  {
    salary: 1280, qualification: 'Developer', city: 'Vitebsk', date: '09/24/2016', tech: 'Ruby',
  },
  {
    salary: 1127, qualification: 'Developer', city: 'Grodno', date: '04/14/2016', tech: 'Java',
  },
  {
    salary: 912, qualification: 'Developer', city: 'Gomel', date: '08/30/2016', tech: 'JS',
  },
  {
    salary: 1416, qualification: 'Developer', city: 'Vitebsk', date: '07/05/2017', tech: 'R',
  },
  {
    salary: 1236, qualification: 'Developer', city: 'Vitebsk', date: '11/16/2017', tech: 'JS',
  },
  {
    salary: 1267, qualification: 'Developer', city: 'Mogilev', date: '01/03/2017', tech: 'JS',
  },
  {
    salary: 1204, qualification: 'Developer', city: 'Mogilev', date: '06/06/2016', tech: 'Java',
  },
  {
    salary: 863, qualification: 'Developer', city: 'Mogilev', date: '09/27/2017', tech: 'C#',
  },
  {
    salary: 1403, qualification: 'Developer', city: 'Grodno', date: '02/12/2018', tech: 'JS',
  },
  {
    salary: 1073, qualification: 'Developer', city: 'Mogilev', date: '11/17/2016', tech: 'JS',
  },
  {
    salary: 1245, qualification: 'Developer', city: 'Brest', date: '05/31/2016', tech: 'Ruby',
  },
  {
    salary: 899, qualification: 'Developer', city: 'Gomel', date: '05/22/2016', tech: 'Python',
  },
  {
    salary: 1362, qualification: 'Developer', city: 'Mogilev', date: '06/22/2017', tech: 'C#',
  },
  {
    salary: 1357, qualification: 'Developer', city: 'Brest', date: '02/13/2017', tech: 'C#',
  },
  {
    salary: 1268, qualification: 'Developer', city: 'Grodno', date: '04/08/2018', tech: 'Ruby',
  },
  {
    salary: 1331, qualification: 'Developer', city: 'Brest', date: '03/10/2016', tech: 'Java',
  },
  {
    salary: 912, qualification: 'Developer', city: 'Brest', date: '05/09/2016', tech: 'JS',
  },
  {
    salary: 1500, qualification: 'Developer', city: 'Minsk', date: '07/20/2016', tech: 'JS',
  },
  {
    salary: 1085, qualification: 'Developer', city: 'Mogilev', date: '05/26/2017', tech: 'Ruby',
  },
  {
    salary: 849, qualification: 'Developer', city: 'Vitebsk', date: '05/04/2017', tech: 'Python',
  },
  {
    salary: 1071, qualification: 'Developer', city: 'Brest', date: '06/27/2017', tech: 'JS',
  },
  {
    salary: 865, qualification: 'Developer', city: 'Brest', date: '06/27/2016', tech: 'R',
  },
  {
    salary: 929, qualification: 'Developer', city: 'Brest', date: '03/31/2016', tech: 'C#',
  },
  {
    salary: 812, qualification: 'Developer', city: 'Gomel', date: '04/23/2016', tech: 'Java',
  },
  {
    salary: 1005, qualification: 'Developer', city: 'Gomel', date: '07/11/2016', tech: 'Python',
  },
  {
    salary: 1046, qualification: 'Developer', city: 'Mogilev', date: '07/16/2017', tech: 'R',
  },
  {
    salary: 1061, qualification: 'Developer', city: 'Minsk', date: '02/15/2018', tech: 'R',
  },
  {
    salary: 1157, qualification: 'Developer', city: 'Grodno', date: '06/10/2017', tech: 'R',
  },
  {
    salary: 1238, qualification: 'Developer', city: 'Vitebsk', date: '01/25/2016', tech: 'Python',
  },
  {
    salary: 1205, qualification: 'Developer', city: 'Minsk', date: '04/03/2017', tech: 'C#',
  },
  {
    salary: 1444, qualification: 'Developer', city: 'Vitebsk', date: '04/10/2017', tech: 'JS',
  },
  {
    salary: 1242, qualification: 'Developer', city: 'Brest', date: '12/11/2017', tech: 'Python',
  },
  {
    salary: 1417, qualification: 'Developer', city: 'Gomel', date: '11/03/2016', tech: 'Python',
  },
  {
    salary: 1047, qualification: 'Developer', city: 'Brest', date: '01/03/2017', tech: 'Java',
  },
  {
    salary: 1035, qualification: 'Developer', city: 'Brest', date: '07/16/2017', tech: 'Python',
  },
  {
    salary: 918, qualification: 'Developer', city: 'Minsk', date: '09/21/2016', tech: 'R',
  },
  {
    salary: 1379, qualification: 'Developer', city: 'Brest', date: '01/22/2016', tech: 'Python',
  },
  {
    salary: 1243, qualification: 'Developer', city: 'Vitebsk', date: '01/18/2016', tech: 'Java',
  },
  {
    salary: 1464, qualification: 'Developer', city: 'Grodno', date: '02/17/2016', tech: 'JS',
  },
  {
    salary: 1052, qualification: 'Developer', city: 'Grodno', date: '04/07/2018', tech: 'Ruby',
  },
  {
    salary: 1028, qualification: 'Developer', city: 'Gomel', date: '03/01/2016', tech: 'JS',
  },
  {
    salary: 1090, qualification: 'Developer', city: 'Grodno', date: '08/25/2016', tech: 'JS',
  },
  {
    salary: 900, qualification: 'Developer', city: 'Brest', date: '08/28/2016', tech: 'C#',
  },
  {
    salary: 860, qualification: 'Developer', city: 'Grodno', date: '04/22/2018', tech: 'Python',
  },
  {
    salary: 1326, qualification: 'Developer', city: 'Vitebsk', date: '11/08/2016', tech: 'Java',
  },
  {
    salary: 941, qualification: 'Developer', city: 'Grodno', date: '07/20/2017', tech: 'Ruby',
  },
  {
    salary: 831, qualification: 'Developer', city: 'Mogilev', date: '03/19/2018', tech: 'R',
  },
  {
    salary: 1376, qualification: 'Developer', city: 'Brest', date: '07/15/2017', tech: 'C#',
  },
  {
    salary: 1339, qualification: 'Developer', city: 'Gomel', date: '10/14/2017', tech: 'Ruby',
  },
  {
    salary: 1446, qualification: 'Developer', city: 'Brest', date: '02/15/2016', tech: 'Ruby',
  },
  {
    salary: 995, qualification: 'Developer', city: 'Brest', date: '03/25/2016', tech: 'R',
  },
  {
    salary: 1226, qualification: 'Developer', city: 'Gomel', date: '08/18/2016', tech: 'JS',
  },
  {
    salary: 1293, qualification: 'Developer', city: 'Brest', date: '05/30/2016', tech: 'R',
  },
  {
    salary: 911, qualification: 'Developer', city: 'Brest', date: '03/17/2017', tech: 'Python',
  },
  {
    salary: 906, qualification: 'Developer', city: 'Gomel', date: '04/18/2017', tech: 'Java',
  },
  {
    salary: 1443, qualification: 'Developer', city: 'Mogilev', date: '01/25/2018', tech: 'R',
  },
  {
    salary: 1000, qualification: 'Developer', city: 'Grodno', date: '06/28/2017', tech: 'R',
  },
  {
    salary: 1069, qualification: 'Developer', city: 'Grodno', date: '04/27/2016', tech: 'R',
  },
  {
    salary: 1286, qualification: 'Developer', city: 'Minsk', date: '01/31/2017', tech: 'R',
  },
  {
    salary: 1462, qualification: 'Developer', city: 'Brest', date: '02/11/2017', tech: 'Ruby',
  },
  {
    salary: 946, qualification: 'Developer', city: 'Minsk', date: '12/03/2017', tech: 'C#',
  },
  {
    salary: 959, qualification: 'Developer', city: 'Gomel', date: '12/23/2016', tech: 'JS',
  },
  {
    salary: 1267, qualification: 'Developer', city: 'Brest', date: '05/19/2017', tech: 'R',
  },
  {
    salary: 804, qualification: 'Developer', city: 'Brest', date: '08/13/2016', tech: 'Python',
  },
  {
    salary: 1426, qualification: 'Developer', city: 'Grodno', date: '03/06/2016', tech: 'C#',
  },
  {
    salary: 1026, qualification: 'Developer', city: 'Grodno', date: '11/16/2017', tech: 'C#',
  },
  {
    salary: 843, qualification: 'Developer', city: 'Vitebsk', date: '11/24/2016', tech: 'JS',
  },
  {
    salary: 1317, qualification: 'Developer', city: 'Vitebsk', date: '06/25/2017', tech: 'R',
  },
  {
    salary: 1371, qualification: 'Developer', city: 'Mogilev', date: '05/05/2017', tech: 'Python',
  },
  {
    salary: 826, qualification: 'Developer', city: 'Gomel', date: '11/11/2017', tech: 'Java',
  },
  {
    salary: 1075, qualification: 'Developer', city: 'Mogilev', date: '12/31/2017', tech: 'Python',
  },
  {
    salary: 1083, qualification: 'Developer', city: 'Minsk', date: '07/21/2016', tech: 'R',
  },
  {
    salary: 1383, qualification: 'Developer', city: 'Grodno', date: '01/30/2018', tech: 'JS',
  },
  {
    salary: 1432, qualification: 'Developer', city: 'Gomel', date: '02/19/2016', tech: 'Python',
  },
  {
    salary: 1216, qualification: 'Developer', city: 'Brest', date: '08/24/2017', tech: 'JS',
  },
  {
    salary: 1200, qualification: 'Developer', city: 'Grodno', date: '09/27/2017', tech: 'C#',
  },
  {
    salary: 997, qualification: 'Developer', city: 'Brest', date: '01/01/2016', tech: 'Java',
  },
  {
    salary: 946, qualification: 'Developer', city: 'Vitebsk', date: '01/27/2017', tech: 'JS',
  },
  {
    salary: 967, qualification: 'Developer', city: 'Vitebsk', date: '12/25/2016', tech: 'R',
  },
  {
    salary: 809, qualification: 'Developer', city: 'Vitebsk', date: '10/12/2017', tech: 'Python',
  },
  {
    salary: 1440, qualification: 'Developer', city: 'Gomel', date: '07/19/2017', tech: 'C#',
  },
  {
    salary: 1004, qualification: 'Developer', city: 'Brest', date: '09/22/2016', tech: 'C#',
  },
  {
    salary: 1011, qualification: 'Developer', city: 'Gomel', date: '11/20/2017', tech: 'JS',
  },
  {
    salary: 1128, qualification: 'Developer', city: 'Gomel', date: '07/16/2017', tech: 'JS',
  },
  {
    salary: 858, qualification: 'Developer', city: 'Gomel', date: '03/07/2016', tech: 'C#',
  },
  {
    salary: 1215, qualification: 'Developer', city: 'Grodno', date: '12/20/2016', tech: 'JS',
  },
  {
    salary: 1322, qualification: 'Developer', city: 'Gomel', date: '06/16/2017', tech: 'R',
  },
  {
    salary: 1356, qualification: 'Developer', city: 'Vitebsk', date: '09/22/2017', tech: 'C#',
  },
  {
    salary: 850, qualification: 'Developer', city: 'Minsk', date: '06/04/2017', tech: 'JS',
  },
  {
    salary: 1084, qualification: 'Developer', city: 'Vitebsk', date: '02/03/2017', tech: 'Python',
  },
  {
    salary: 1377, qualification: 'Developer', city: 'Minsk', date: '12/14/2017', tech: 'C#',
  },
  {
    salary: 1171, qualification: 'Developer', city: 'Minsk', date: '06/26/2017', tech: 'R',
  },
  {
    salary: 894, qualification: 'Developer', city: 'Gomel', date: '07/23/2017', tech: 'Python',
  },
  {
    salary: 1073, qualification: 'Developer', city: 'Brest', date: '07/18/2016', tech: 'R',
  },
  {
    salary: 1291, qualification: 'Developer', city: 'Gomel', date: '09/16/2016', tech: 'Ruby',
  },
  {
    salary: 1453, qualification: 'Developer', city: 'Mogilev', date: '06/06/2017', tech: 'R',
  },
  {
    salary: 1359, qualification: 'Developer', city: 'Minsk', date: '09/27/2017', tech: 'C#',
  },
  {
    salary: 1170, qualification: 'Developer', city: 'Mogilev', date: '05/08/2017', tech: 'Python',
  },
  {
    salary: 1125, qualification: 'Developer', city: 'Grodno', date: '10/30/2017', tech: 'Java',
  },
  {
    salary: 1428, qualification: 'Developer', city: 'Grodno', date: '08/26/2017', tech: 'R',
  },
  {
    salary: 1200, qualification: 'Developer', city: 'Grodno', date: '09/12/2016', tech: 'JS',
  },
  {
    salary: 1443, qualification: 'Developer', city: 'Gomel', date: '10/23/2016', tech: 'C#',
  },
  {
    salary: 1138, qualification: 'Developer', city: 'Minsk', date: '01/22/2017', tech: 'C#',
  },
  {
    salary: 861, qualification: 'Developer', city: 'Gomel', date: '12/29/2016', tech: 'Python',
  },
  {
    salary: 848, qualification: 'Developer', city: 'Brest', date: '11/11/2017', tech: 'Java',
  },
  {
    salary: 1233, qualification: 'Developer', city: 'Gomel', date: '02/02/2018', tech: 'Java',
  },
  {
    salary: 1081, qualification: 'Developer', city: 'Minsk', date: '11/30/2017', tech: 'Python',
  },
  {
    salary: 1248, qualification: 'Developer', city: 'Vitebsk', date: '09/05/2017', tech: 'C#',
  },
  {
    salary: 1382, qualification: 'Developer', city: 'Brest', date: '02/28/2018', tech: 'R',
  },
  {
    salary: 1318, qualification: 'Developer', city: 'Vitebsk', date: '02/25/2018', tech: 'Ruby',
  },
  {
    salary: 934, qualification: 'Developer', city: 'Minsk', date: '09/20/2016', tech: 'C#',
  },
  {
    salary: 814, qualification: 'Developer', city: 'Gomel', date: '09/06/2016', tech: 'Python',
  },
  {
    salary: 1180, qualification: 'Developer', city: 'Gomel', date: '09/23/2017', tech: 'JS',
  },
  {
    salary: 839, qualification: 'Developer', city: 'Gomel', date: '09/30/2016', tech: 'C#',
  },
  {
    salary: 1448, qualification: 'Developer', city: 'Mogilev', date: '02/28/2016', tech: 'Python',
  },
  {
    salary: 1186, qualification: 'Developer', city: 'Vitebsk', date: '07/04/2017', tech: 'C#',
  },
  {
    salary: 1104, qualification: 'Developer', city: 'Grodno', date: '01/21/2018', tech: 'Java',
  },
  {
    salary: 1430, qualification: 'Developer', city: 'Vitebsk', date: '09/18/2017', tech: 'Java',
  },
  {
    salary: 929, qualification: 'Developer', city: 'Minsk', date: '08/15/2016', tech: 'Java',
  },
  {
    salary: 850, qualification: 'Developer', city: 'Gomel', date: '02/26/2018', tech: 'JS',
  },
  {
    salary: 1384, qualification: 'Developer', city: 'Minsk', date: '03/14/2017', tech: 'Ruby',
  },
  {
    salary: 1068, qualification: 'Developer', city: 'Minsk', date: '08/01/2017', tech: 'Python',
  },
  {
    salary: 1483, qualification: 'Developer', city: 'Minsk', date: '02/19/2016', tech: 'R',
  },
  {
    salary: 1070, qualification: 'Developer', city: 'Gomel', date: '09/27/2017', tech: 'JS',
  },
  {
    salary: 982, qualification: 'Developer', city: 'Minsk', date: '03/23/2016', tech: 'Ruby',
  },
  {
    salary: 1336, qualification: 'Developer', city: 'Gomel', date: '03/29/2017', tech: 'R',
  },
  {
    salary: 1102, qualification: 'Developer', city: 'Gomel', date: '03/19/2018', tech: 'JS',
  },
  {
    salary: 1090, qualification: 'Developer', city: 'Vitebsk', date: '10/26/2016', tech: 'R',
  },
  {
    salary: 971, qualification: 'Developer', city: 'Minsk', date: '03/20/2017', tech: 'Java',
  },
  {
    salary: 1158, qualification: 'Developer', city: 'Minsk', date: '07/10/2016', tech: 'JS',
  },
  {
    salary: 842, qualification: 'Developer', city: 'Gomel', date: '12/25/2016', tech: 'R',
  },
  {
    salary: 289, qualification: 'Junior', city: 'Gomel', date: '01/03/2017', tech: 'C#',
  },
  {
    salary: 594, qualification: 'Junior', city: 'Mogilev', date: '05/26/2017', tech: 'C#',
  },
  {
    salary: 364, qualification: 'Junior', city: 'Vitebsk', date: '05/24/2017', tech: 'Python',
  },
  {
    salary: 430, qualification: 'Junior', city: 'Brest', date: '09/30/2016', tech: 'Python',
  },
  {
    salary: 523, qualification: 'Junior', city: 'Mogilev', date: '01/15/2018', tech: 'Python',
  },
  {
    salary: 427, qualification: 'Junior', city: 'Gomel', date: '10/20/2017', tech: 'R',
  },
  {
    salary: 539, qualification: 'Junior', city: 'Vitebsk', date: '09/30/2016', tech: 'R',
  },
  {
    salary: 567, qualification: 'Junior', city: 'Vitebsk', date: '09/22/2017', tech: 'Java',
  },
  {
    salary: 336, qualification: 'Junior', city: 'Grodno', date: '11/03/2017', tech: 'R',
  },
  {
    salary: 260, qualification: 'Junior', city: 'Mogilev', date: '02/14/2017', tech: 'Java',
  },
  {
    salary: 581, qualification: 'Junior', city: 'Vitebsk', date: '01/07/2017', tech: 'Python',
  },
  {
    salary: 282, qualification: 'Junior', city: 'Brest', date: '01/15/2017', tech: 'Python',
  },
  {
    salary: 485, qualification: 'Junior', city: 'Grodno', date: '06/25/2017', tech: 'Java',
  },
  {
    salary: 583, qualification: 'Junior', city: 'Grodno', date: '05/19/2016', tech: 'JS',
  },
  {
    salary: 389, qualification: 'Junior', city: 'Mogilev', date: '06/25/2017', tech: 'Java',
  },
  {
    salary: 506, qualification: 'Junior', city: 'Brest', date: '11/16/2017', tech: 'R',
  },
  {
    salary: 416, qualification: 'Junior', city: 'Mogilev', date: '06/29/2016', tech: 'Ruby',
  },
  {
    salary: 277, qualification: 'Junior', city: 'Brest', date: '06/26/2016', tech: 'R',
  },
  {
    salary: 491, qualification: 'Junior', city: 'Brest', date: '04/08/2016', tech: 'Python',
  },
  {
    salary: 563, qualification: 'Junior', city: 'Gomel', date: '02/22/2016', tech: 'JS',
  },
  {
    salary: 474, qualification: 'Junior', city: 'Grodno', date: '05/06/2016', tech: 'R',
  },
  {
    salary: 412, qualification: 'Junior', city: 'Grodno', date: '07/30/2016', tech: 'Ruby',
  },
  {
    salary: 382, qualification: 'Junior', city: 'Vitebsk', date: '03/25/2016', tech: 'C#',
  },
  {
    salary: 384, qualification: 'Junior', city: 'Minsk', date: '01/09/2016', tech: 'R',
  },
  {
    salary: 464, qualification: 'Junior', city: 'Gomel', date: '08/16/2017', tech: 'R',
  },
  {
    salary: 283, qualification: 'Junior', city: 'Mogilev', date: '04/21/2016', tech: 'R',
  },
  {
    salary: 276, qualification: 'Junior', city: 'Brest', date: '03/23/2017', tech: 'Java',
  },
  {
    salary: 257, qualification: 'Junior', city: 'Mogilev', date: '04/23/2017', tech: 'Java',
  },
  {
    salary: 311, qualification: 'Junior', city: 'Minsk', date: '07/19/2016', tech: 'R',
  },
  {
    salary: 315, qualification: 'Junior', city: 'Gomel', date: '11/22/2016', tech: 'JS',
  },
  {
    salary: 542, qualification: 'Junior', city: 'Vitebsk', date: '11/06/2016', tech: 'Ruby',
  },
  {
    salary: 500, qualification: 'Junior', city: 'Mogilev', date: '09/24/2017', tech: 'R',
  },
  {
    salary: 595, qualification: 'Junior', city: 'Vitebsk', date: '01/16/2016', tech: 'R',
  },
  {
    salary: 585, qualification: 'Junior', city: 'Brest', date: '03/29/2017', tech: 'R',
  },
  {
    salary: 520, qualification: 'Junior', city: 'Gomel', date: '10/12/2016', tech: 'JS',
  },
  {
    salary: 588, qualification: 'Junior', city: 'Mogilev', date: '04/15/2017', tech: 'Python',
  },
  {
    salary: 355, qualification: 'Junior', city: 'Grodno', date: '06/16/2017', tech: 'JS',
  },
  {
    salary: 265, qualification: 'Junior', city: 'Gomel', date: '01/06/2016', tech: 'Python',
  },
  {
    salary: 576, qualification: 'Junior', city: 'Gomel', date: '06/23/2016', tech: 'C#',
  },
  {
    salary: 434, qualification: 'Junior', city: 'Mogilev', date: '02/14/2018', tech: 'Python',
  },
  {
    salary: 480, qualification: 'Junior', city: 'Gomel', date: '10/21/2017', tech: 'Python',
  },
  {
    salary: 436, qualification: 'Junior', city: 'Vitebsk', date: '02/28/2018', tech: 'JS',
  },
  {
    salary: 514, qualification: 'Junior', city: 'Gomel', date: '11/05/2016', tech: 'Python',
  },
  {
    salary: 268, qualification: 'Junior', city: 'Vitebsk', date: '09/02/2016', tech: 'C#',
  },
  {
    salary: 317, qualification: 'Junior', city: 'Grodno', date: '08/22/2017', tech: 'Java',
  },
  {
    salary: 563, qualification: 'Junior', city: 'Grodno', date: '11/04/2017', tech: 'Python',
  },
  {
    salary: 473, qualification: 'Junior', city: 'Grodno', date: '06/05/2017', tech: 'C#',
  },
  {
    salary: 580, qualification: 'Junior', city: 'Gomel', date: '11/20/2016', tech: 'Java',
  },
  {
    salary: 422, qualification: 'Junior', city: 'Mogilev', date: '02/24/2018', tech: 'Java',
  },
  {
    salary: 453, qualification: 'Junior', city: 'Brest', date: '10/23/2017', tech: 'JS',
  },
  {
    salary: 366, qualification: 'Junior', city: 'Vitebsk', date: '12/14/2016', tech: 'Python',
  },
  {
    salary: 537, qualification: 'Junior', city: 'Gomel', date: '06/30/2016', tech: 'Python',
  },
  {
    salary: 589, qualification: 'Junior', city: 'Grodno', date: '05/30/2017', tech: 'JS',
  },
  {
    salary: 518, qualification: 'Junior', city: 'Vitebsk', date: '05/03/2016', tech: 'Ruby',
  },
  {
    salary: 382, qualification: 'Junior', city: 'Vitebsk', date: '08/02/2016', tech: 'R',
  },
  {
    salary: 251, qualification: 'Junior', city: 'Grodno', date: '11/16/2017', tech: 'Java',
  },
  {
    salary: 262, qualification: 'Junior', city: 'Brest', date: '12/27/2016', tech: 'JS',
  },
  {
    salary: 258, qualification: 'Junior', city: 'Vitebsk', date: '03/26/2018', tech: 'Python',
  },
  {
    salary: 316, qualification: 'Junior', city: 'Grodno', date: '12/08/2016', tech: 'JS',
  },
  {
    salary: 497, qualification: 'Junior', city: 'Grodno', date: '04/17/2016', tech: 'JS',
  },
  {
    salary: 320, qualification: 'Junior', city: 'Minsk', date: '09/15/2016', tech: 'Java',
  },
  {
    salary: 537, qualification: 'Junior', city: 'Vitebsk', date: '08/12/2017', tech: 'Ruby',
  },
  {
    salary: 332, qualification: 'Junior', city: 'Vitebsk', date: '05/12/2016', tech: 'Java',
  },
  {
    salary: 264, qualification: 'Junior', city: 'Gomel', date: '10/23/2016', tech: 'Python',
  },
  {
    salary: 480, qualification: 'Junior', city: 'Grodno', date: '02/08/2018', tech: 'Ruby',
  },
  {
    salary: 431, qualification: 'Junior', city: 'Mogilev', date: '07/09/2017', tech: 'C#',
  },
  {
    salary: 545, qualification: 'Junior', city: 'Minsk', date: '07/20/2016', tech: 'Python',
  },
  {
    salary: 543, qualification: 'Junior', city: 'Brest', date: '09/07/2016', tech: 'Ruby',
  },
  {
    salary: 412, qualification: 'Junior', city: 'Grodno', date: '12/28/2016', tech: 'C#',
  },
  {
    salary: 600, qualification: 'Junior', city: 'Grodno', date: '07/23/2017', tech: 'Ruby',
  },
  {
    salary: 469, qualification: 'Junior', city: 'Mogilev', date: '07/23/2016', tech: 'Java',
  },
  {
    salary: 579, qualification: 'Junior', city: 'Gomel', date: '08/22/2017', tech: 'Python',
  },
  {
    salary: 502, qualification: 'Junior', city: 'Grodno', date: '01/18/2016', tech: 'Ruby',
  },
  {
    salary: 554, qualification: 'Junior', city: 'Mogilev', date: '12/16/2017', tech: 'Java',
  },
  {
    salary: 280, qualification: 'Junior', city: 'Brest', date: '03/01/2017', tech: 'Python',
  },
  {
    salary: 382, qualification: 'Junior', city: 'Mogilev', date: '07/21/2016', tech: 'C#',
  },
  {
    salary: 307, qualification: 'Junior', city: 'Mogilev', date: '10/18/2017', tech: 'Java',
  },
  {
    salary: 427, qualification: 'Junior', city: 'Mogilev', date: '09/04/2017', tech: 'Java',
  },
  {
    salary: 543, qualification: 'Junior', city: 'Gomel', date: '07/24/2017', tech: 'Python',
  },
  {
    salary: 473, qualification: 'Junior', city: 'Brest', date: '08/29/2016', tech: 'Ruby',
  },
  {
    salary: 577, qualification: 'Junior', city: 'Vitebsk', date: '07/30/2017', tech: 'JS',
  },
  {
    salary: 285, qualification: 'Junior', city: 'Grodno', date: '09/11/2016', tech: 'Ruby',
  },
  {
    salary: 406, qualification: 'Junior', city: 'Gomel', date: '05/14/2016', tech: 'JS',
  },
  {
    salary: 375, qualification: 'Junior', city: 'Vitebsk', date: '01/30/2016', tech: 'Python',
  },
  {
    salary: 579, qualification: 'Junior', city: 'Gomel', date: '12/25/2017', tech: 'Python',
  },
  {
    salary: 511, qualification: 'Junior', city: 'Brest', date: '11/20/2017', tech: 'Ruby',
  },
  {
    salary: 535, qualification: 'Junior', city: 'Mogilev', date: '01/02/2017', tech: 'JS',
  },
  {
    salary: 420, qualification: 'Junior', city: 'Grodno', date: '08/29/2017', tech: 'Java',
  },
  {
    salary: 260, qualification: 'Junior', city: 'Brest', date: '02/13/2018', tech: 'Ruby',
  },
  {
    salary: 593, qualification: 'Junior', city: 'Gomel', date: '10/04/2017', tech: 'C#',
  },
  {
    salary: 283, qualification: 'Junior', city: 'Vitebsk', date: '10/03/2017', tech: 'Python',
  },
  {
    salary: 290, qualification: 'Junior', city: 'Minsk', date: '02/21/2016', tech: 'Python',
  },
  {
    salary: 303, qualification: 'Junior', city: 'Minsk', date: '01/09/2017', tech: 'JS',
  },
  {
    salary: 491, qualification: 'Junior', city: 'Brest', date: '09/20/2016', tech: 'Java',
  },
  {
    salary: 252, qualification: 'Junior', city: 'Brest', date: '11/02/2016', tech: 'R',
  },
  {
    salary: 413, qualification: 'Junior', city: 'Brest', date: '03/29/2017', tech: 'C#',
  },
  {
    salary: 535, qualification: 'Junior', city: 'Gomel', date: '02/04/2017', tech: 'R',
  },
  {
    salary: 382, qualification: 'Junior', city: 'Minsk', date: '01/10/2018', tech: 'Java',
  },
  {
    salary: 382, qualification: 'Junior', city: 'Minsk', date: '11/07/2016', tech: 'Python',
  },
  {
    salary: 577, qualification: 'Junior', city: 'Vitebsk', date: '04/21/2016', tech: 'Ruby',
  },
  {
    salary: 257, qualification: 'Junior', city: 'Minsk', date: '10/11/2017', tech: 'C#',
  },
  {
    salary: 301, qualification: 'Junior', city: 'Mogilev', date: '10/02/2017', tech: 'Java',
  },
  {
    salary: 257, qualification: 'Junior', city: 'Mogilev', date: '02/26/2017', tech: 'Python',
  },
  {
    salary: 286, qualification: 'Junior', city: 'Gomel', date: '06/11/2017', tech: 'Ruby',
  },
  {
    salary: 369, qualification: 'Junior', city: 'Mogilev', date: '11/26/2017', tech: 'Java',
  },
  {
    salary: 501, qualification: 'Junior', city: 'Brest', date: '01/20/2016', tech: 'JS',
  },
  {
    salary: 396, qualification: 'Junior', city: 'Minsk', date: '10/23/2016', tech: 'JS',
  },
  {
    salary: 408, qualification: 'Junior', city: 'Mogilev', date: '01/18/2017', tech: 'R',
  },
  {
    salary: 525, qualification: 'Junior', city: 'Vitebsk', date: '08/12/2017', tech: 'JS',
  },
  {
    salary: 337, qualification: 'Junior', city: 'Mogilev', date: '07/02/2017', tech: 'R',
  },
  {
    salary: 291, qualification: 'Junior', city: 'Minsk', date: '11/24/2017', tech: 'Python',
  },
  {
    salary: 313, qualification: 'Junior', city: 'Brest', date: '02/05/2016', tech: 'C#',
  },
  {
    salary: 321, qualification: 'Junior', city: 'Mogilev', date: '11/19/2016', tech: 'R',
  },
  {
    salary: 251, qualification: 'Junior', city: 'Vitebsk', date: '01/05/2016', tech: 'Ruby',
  },
  {
    salary: 573, qualification: 'Junior', city: 'Brest', date: '06/20/2016', tech: 'JS',
  },
  {
    salary: 575, qualification: 'Junior', city: 'Gomel', date: '11/02/2016', tech: 'C#',
  },
  {
    salary: 306, qualification: 'Junior', city: 'Minsk', date: '02/26/2017', tech: 'JS',
  },
  {
    salary: 545, qualification: 'Junior', city: 'Vitebsk', date: '03/19/2016', tech: 'Ruby',
  },
  {
    salary: 470, qualification: 'Junior', city: 'Gomel', date: '02/24/2016', tech: 'Python',
  },
  {
    salary: 438, qualification: 'Junior', city: 'Grodno', date: '08/16/2016', tech: 'C#',
  },
  {
    salary: 489, qualification: 'Junior', city: 'Grodno', date: '09/17/2016', tech: 'R',
  },
  {
    salary: 547, qualification: 'Junior', city: 'Mogilev', date: '12/06/2017', tech: 'JS',
  },
  {
    salary: 348, qualification: 'Junior', city: 'Grodno', date: '04/19/2016', tech: 'C#',
  },
  {
    salary: 351, qualification: 'Junior', city: 'Mogilev', date: '07/03/2016', tech: 'Java',
  },
  {
    salary: 254, qualification: 'Junior', city: 'Grodno', date: '01/12/2016', tech: 'C#',
  },
  {
    salary: 269, qualification: 'Junior', city: 'Gomel', date: '10/31/2017', tech: 'R',
  },
  {
    salary: 298, qualification: 'Junior', city: 'Gomel', date: '05/06/2016', tech: 'JS',
  },
  {
    salary: 393, qualification: 'Junior', city: 'Vitebsk', date: '03/04/2016', tech: 'Java',
  },
  {
    salary: 591, qualification: 'Junior', city: 'Vitebsk', date: '12/04/2017', tech: 'R',
  },
  {
    salary: 250, qualification: 'Junior', city: 'Gomel', date: '04/15/2016', tech: 'JS',
  },
  {
    salary: 325, qualification: 'Junior', city: 'Brest', date: '04/28/2016', tech: 'Python',
  },
  {
    salary: 428, qualification: 'Junior', city: 'Vitebsk', date: '10/28/2017', tech: 'C#',
  },
  {
    salary: 592, qualification: 'Junior', city: 'Brest', date: '03/17/2016', tech: 'Python',
  },
  {
    salary: 564, qualification: 'Junior', city: 'Minsk', date: '08/24/2016', tech: 'Java',
  },
  {
    salary: 523, qualification: 'Junior', city: 'Mogilev', date: '01/09/2018', tech: 'C#',
  },
  {
    salary: 554, qualification: 'Junior', city: 'Minsk', date: '05/18/2017', tech: 'Ruby',
  },
  {
    salary: 459, qualification: 'Junior', city: 'Minsk', date: '05/23/2017', tech: 'R',
  },
  {
    salary: 259, qualification: 'Junior', city: 'Gomel', date: '06/01/2017', tech: 'R',
  },
  {
    salary: 423, qualification: 'Junior', city: 'Mogilev', date: '12/23/2017', tech: 'Ruby',
  },
  {
    salary: 470, qualification: 'Junior', city: 'Mogilev', date: '08/24/2017', tech: 'Java',
  },
  {
    salary: 552, qualification: 'Junior', city: 'Grodno', date: '07/09/2017', tech: 'C#',
  },
  {
    salary: 429, qualification: 'Junior', city: 'Vitebsk', date: '02/13/2016', tech: 'R',
  },
  {
    salary: 489, qualification: 'Junior', city: 'Minsk', date: '03/25/2017', tech: 'C#',
  },
  {
    salary: 369, qualification: 'Junior', city: 'Grodno', date: '11/15/2017', tech: 'C#',
  },
  {
    salary: 574, qualification: 'Junior', city: 'Gomel', date: '07/13/2017', tech: 'JS',
  },
  {
    salary: 470, qualification: 'Junior', city: 'Gomel', date: '08/02/2016', tech: 'JS',
  },
  {
    salary: 596, qualification: 'Junior', city: 'Mogilev', date: '11/28/2017', tech: 'Python',
  },
  {
    salary: 416, qualification: 'Junior', city: 'Mogilev', date: '01/30/2017', tech: 'R',
  },
  {
    salary: 337, qualification: 'Junior', city: 'Mogilev', date: '02/27/2016', tech: 'R',
  },
  {
    salary: 531, qualification: 'Junior', city: 'Mogilev', date: '01/22/2017', tech: 'JS',
  },
  {
    salary: 548, qualification: 'Junior', city: 'Gomel', date: '11/08/2017', tech: 'R',
  },
  {
    salary: 321, qualification: 'Junior', city: 'Gomel', date: '06/17/2016', tech: 'Java',
  },
  {
    salary: 253, qualification: 'Junior', city: 'Grodno', date: '02/19/2018', tech: 'JS',
  },
  {
    salary: 507, qualification: 'Junior', city: 'Brest', date: '08/07/2017', tech: 'Ruby',
  },
  {
    salary: 265, qualification: 'Junior', city: 'Gomel', date: '08/05/2017', tech: 'R',
  },
  {
    salary: 534, qualification: 'Junior', city: 'Brest', date: '03/14/2017', tech: 'Java',
  },
  {
    salary: 419, qualification: 'Junior', city: 'Minsk', date: '10/14/2017', tech: 'C#',
  },
  {
    salary: 259, qualification: 'Junior', city: 'Minsk', date: '09/05/2016', tech: 'C#',
  },
  {
    salary: 293, qualification: 'Junior', city: 'Gomel', date: '03/23/2016', tech: 'Java',
  },
  {
    salary: 337, qualification: 'Junior', city: 'Grodno', date: '12/14/2017', tech: 'Ruby',
  },
  {
    salary: 599, qualification: 'Junior', city: 'Minsk', date: '07/22/2016', tech: 'C#',
  },
  {
    salary: 302, qualification: 'Junior', city: 'Vitebsk', date: '08/24/2017', tech: 'JS',
  },
  {
    salary: 250, qualification: 'Junior', city: 'Mogilev', date: '04/07/2018', tech: 'Ruby',
  },
  {
    salary: 279, qualification: 'Junior', city: 'Minsk', date: '11/15/2016', tech: 'Java',
  },
  {
    salary: 257, qualification: 'Junior', city: 'Brest', date: '04/21/2016', tech: 'Java',
  },
  {
    salary: 259, qualification: 'Junior', city: 'Grodno', date: '04/04/2016', tech: 'R',
  },
  {
    salary: 565, qualification: 'Junior', city: 'Vitebsk', date: '03/25/2017', tech: 'Ruby',
  },
  {
    salary: 253, qualification: 'Junior', city: 'Vitebsk', date: '06/05/2016', tech: 'Python',
  },
  {
    salary: 496, qualification: 'Junior', city: 'Mogilev', date: '02/07/2018', tech: 'JS',
  },
  {
    salary: 283, qualification: 'Junior', city: 'Vitebsk', date: '05/15/2017', tech: 'Ruby',
  },
  {
    salary: 534, qualification: 'Junior', city: 'Vitebsk', date: '04/10/2018', tech: 'R',
  },
  {
    salary: 446, qualification: 'Junior', city: 'Vitebsk', date: '12/23/2016', tech: 'Ruby',
  },
  {
    salary: 271, qualification: 'Junior', city: 'Grodno', date: '03/23/2017', tech: 'JS',
  },
  {
    salary: 510, qualification: 'Junior', city: 'Brest', date: '03/23/2016', tech: 'Python',
  },
  {
    salary: 568, qualification: 'Junior', city: 'Brest', date: '08/23/2016', tech: 'R',
  },
  {
    salary: 331, qualification: 'Junior', city: 'Minsk', date: '09/09/2017', tech: 'Java',
  },
  {
    salary: 540, qualification: 'Junior', city: 'Gomel', date: '02/03/2017', tech: 'Ruby',
  },
  {
    salary: 459, qualification: 'Junior', city: 'Gomel', date: '03/28/2018', tech: 'Ruby',
  },
  {
    salary: 537, qualification: 'Junior', city: 'Vitebsk', date: '01/26/2018', tech: 'Python',
  },
  {
    salary: 490, qualification: 'Junior', city: 'Vitebsk', date: '08/14/2016', tech: 'Python',
  },
  {
    salary: 495, qualification: 'Junior', city: 'Vitebsk', date: '06/06/2016', tech: 'Python',
  },
  {
    salary: 472, qualification: 'Junior', city: 'Grodno', date: '12/26/2017', tech: 'JS',
  },
  {
    salary: 404, qualification: 'Junior', city: 'Gomel', date: '05/06/2017', tech: 'R',
  },
  {
    salary: 352, qualification: 'Junior', city: 'Brest', date: '06/23/2017', tech: 'Python',
  },
  {
    salary: 588, qualification: 'Junior', city: 'Gomel', date: '10/07/2017', tech: 'Ruby',
  },
  {
    salary: 494, qualification: 'Junior', city: 'Minsk', date: '01/23/2017', tech: 'JS',
  },
  {
    salary: 568, qualification: 'Junior', city: 'Mogilev', date: '08/21/2017', tech: 'R',
  },
  {
    salary: 568, qualification: 'Junior', city: 'Grodno', date: '11/25/2017', tech: 'Ruby',
  },
  {
    salary: 489, qualification: 'Junior', city: 'Grodno', date: '11/04/2017', tech: 'C#',
  },
  {
    salary: 578, qualification: 'Junior', city: 'Mogilev', date: '07/27/2017', tech: 'Python',
  },
  {
    salary: 561, qualification: 'Junior', city: 'Vitebsk', date: '04/14/2018', tech: 'Ruby',
  },
  {
    salary: 518, qualification: 'Junior', city: 'Grodno', date: '08/01/2016', tech: 'Ruby',
  },
  {
    salary: 258, qualification: 'Junior', city: 'Vitebsk', date: '02/21/2017', tech: 'R',
  },
  {
    salary: 497, qualification: 'Junior', city: 'Gomel', date: '09/01/2017', tech: 'Ruby',
  },
  {
    salary: 447, qualification: 'Junior', city: 'Grodno', date: '08/31/2017', tech: 'Ruby',
  },
  {
    salary: 289, qualification: 'Junior', city: 'Mogilev', date: '01/16/2017', tech: 'Python',
  },
  {
    salary: 258, qualification: 'Junior', city: 'Gomel', date: '04/08/2017', tech: 'Python',
  },
  {
    salary: 333, qualification: 'Junior', city: 'Gomel', date: '05/18/2016', tech: 'R',
  },
  {
    salary: 579, qualification: 'Junior', city: 'Grodno', date: '04/12/2016', tech: 'Java',
  },
  {
    salary: 324, qualification: 'Junior', city: 'Grodno', date: '02/25/2016', tech: 'Java',
  },
  {
    salary: 396, qualification: 'Junior', city: 'Vitebsk', date: '12/15/2016', tech: 'R',
  },
  {
    salary: 300, qualification: 'Junior', city: 'Brest', date: '10/17/2016', tech: 'Ruby',
  },
  {
    salary: 270, qualification: 'Junior', city: 'Brest', date: '11/20/2017', tech: 'Python',
  },
  {
    salary: 575, qualification: 'Junior', city: 'Brest', date: '04/10/2016', tech: 'Python',
  },
  {
    salary: 359, qualification: 'Junior', city: 'Brest', date: '02/18/2016', tech: 'Python',
  },
  {
    salary: 486, qualification: 'Junior', city: 'Brest', date: '01/06/2017', tech: 'JS',
  },
  {
    salary: 402, qualification: 'Junior', city: 'Minsk', date: '12/23/2016', tech: 'Java',
  },
  {
    salary: 350, qualification: 'Junior', city: 'Brest', date: '04/17/2018', tech: 'Ruby',
  },
  {
    salary: 379, qualification: 'Junior', city: 'Grodno', date: '04/15/2016', tech: 'Python',
  },
  {
    salary: 512, qualification: 'Junior', city: 'Grodno', date: '01/12/2017', tech: 'Java',
  },
  {
    salary: 580, qualification: 'Junior', city: 'Minsk', date: '01/17/2017', tech: 'R',
  },
  {
    salary: 570, qualification: 'Junior', city: 'Grodno', date: '05/28/2016', tech: 'JS',
  },
  {
    salary: 418, qualification: 'Junior', city: 'Grodno', date: '08/02/2016', tech: 'R',
  },
  {
    salary: 425, qualification: 'Junior', city: 'Brest', date: '03/25/2016', tech: 'JS',
  },
  {
    salary: 346, qualification: 'Junior', city: 'Vitebsk', date: '04/26/2017', tech: 'JS',
  },
  {
    salary: 565, qualification: 'Junior', city: 'Mogilev', date: '11/15/2017', tech: 'Java',
  },
  {
    salary: 600, qualification: 'Junior', city: 'Vitebsk', date: '07/03/2017', tech: 'C#',
  },
  {
    salary: 267, qualification: 'Junior', city: 'Mogilev', date: '02/16/2017', tech: 'R',
  },
  {
    salary: 300, qualification: 'Junior', city: 'Mogilev', date: '06/04/2017', tech: 'Java',
  },
  {
    salary: 524, qualification: 'Junior', city: 'Gomel', date: '10/11/2016', tech: 'Python',
  },
  {
    salary: 491, qualification: 'Junior', city: 'Minsk', date: '03/20/2018', tech: 'Java',
  },
  {
    salary: 564, qualification: 'Junior', city: 'Brest', date: '05/23/2016', tech: 'Python',
  },
  {
    salary: 340, qualification: 'Junior', city: 'Vitebsk', date: '01/21/2017', tech: 'R',
  },
  {
    salary: 535, qualification: 'Junior', city: 'Grodno', date: '12/24/2016', tech: 'C#',
  },
  {
    salary: 560, qualification: 'Junior', city: 'Brest', date: '10/19/2016', tech: 'R',
  },
  {
    salary: 451, qualification: 'Junior', city: 'Gomel', date: '12/15/2016', tech: 'R',
  },
  {
    salary: 427, qualification: 'Junior', city: 'Mogilev', date: '11/18/2017', tech: 'JS',
  },
  {
    salary: 575, qualification: 'Junior', city: 'Vitebsk', date: '05/23/2017', tech: 'R',
  },
  {
    salary: 278, qualification: 'Junior', city: 'Brest', date: '08/17/2017', tech: 'R',
  },
  {
    salary: 410, qualification: 'Junior', city: 'Vitebsk', date: '07/23/2017', tech: 'Java',
  },
  {
    salary: 357, qualification: 'Junior', city: 'Mogilev', date: '12/06/2017', tech: 'Ruby',
  },
  {
    salary: 363, qualification: 'Junior', city: 'Mogilev', date: '07/26/2017', tech: 'C#',
  },
  {
    salary: 516, qualification: 'Junior', city: 'Brest', date: '12/17/2016', tech: 'JS',
  },
  {
    salary: 259, qualification: 'Junior', city: 'Minsk', date: '05/05/2017', tech: 'C#',
  },
  {
    salary: 487, qualification: 'Junior', city: 'Mogilev', date: '06/09/2016', tech: 'JS',
  },
  {
    salary: 322, qualification: 'Junior', city: 'Minsk', date: '08/21/2017', tech: 'JS',
  },
  {
    salary: 441, qualification: 'Junior', city: 'Gomel', date: '04/01/2018', tech: 'Python',
  },
  {
    salary: 494, qualification: 'Junior', city: 'Grodno', date: '08/30/2016', tech: 'R',
  },
  {
    salary: 346, qualification: 'Junior', city: 'Vitebsk', date: '10/23/2017', tech: 'R',
  },
  {
    salary: 589, qualification: 'Junior', city: 'Mogilev', date: '07/15/2017', tech: 'C#',
  },
  {
    salary: 258, qualification: 'Junior', city: 'Grodno', date: '05/16/2017', tech: 'JS',
  },
  {
    salary: 548, qualification: 'Junior', city: 'Vitebsk', date: '01/21/2017', tech: 'Java',
  },
  {
    salary: 392, qualification: 'Junior', city: 'Minsk', date: '03/29/2016', tech: 'Ruby',
  },
  {
    salary: 503, qualification: 'Junior', city: 'Mogilev', date: '12/23/2016', tech: 'JS',
  },
  {
    salary: 585, qualification: 'Junior', city: 'Mogilev', date: '01/26/2016', tech: 'Python',
  },
  {
    salary: 339, qualification: 'Junior', city: 'Mogilev', date: '07/03/2016', tech: 'JS',
  },
  {
    salary: 524, qualification: 'Junior', city: 'Grodno', date: '05/10/2017', tech: 'Ruby',
  },
  {
    salary: 383, qualification: 'Junior', city: 'Gomel', date: '06/16/2017', tech: 'Java',
  },
  {
    salary: 331, qualification: 'Junior', city: 'Mogilev', date: '01/08/2018', tech: 'JS',
  },
  {
    salary: 570, qualification: 'Junior', city: 'Minsk', date: '02/08/2018', tech: 'JS',
  },
  {
    salary: 287, qualification: 'Junior', city: 'Minsk', date: '11/27/2017', tech: 'C#',
  },
  {
    salary: 599, qualification: 'Junior', city: 'Gomel', date: '04/10/2017', tech: 'JS',
  },
  {
    salary: 330, qualification: 'Junior', city: 'Vitebsk', date: '01/06/2016', tech: 'C#',
  },
  {
    salary: 540, qualification: 'Junior', city: 'Minsk', date: '10/22/2017', tech: 'R',
  },
  {
    salary: 530, qualification: 'Junior', city: 'Mogilev', date: '03/27/2016', tech: 'Python',
  },
  {
    salary: 564, qualification: 'Junior', city: 'Vitebsk', date: '03/19/2017', tech: 'Python',
  },
  {
    salary: 286, qualification: 'Junior', city: 'Mogilev', date: '01/16/2016', tech: 'Java',
  },
  {
    salary: 600, qualification: 'Junior', city: 'Grodno', date: '05/07/2017', tech: 'R',
  },
  {
    salary: 585, qualification: 'Junior', city: 'Gomel', date: '04/21/2018', tech: 'JS',
  },
  {
    salary: 437, qualification: 'Junior', city: 'Mogilev', date: '01/21/2017', tech: 'R',
  },
  {
    salary: 254, qualification: 'Junior', city: 'Gomel', date: '05/04/2016', tech: 'Python',
  },
  {
    salary: 398, qualification: 'Junior', city: 'Vitebsk', date: '08/15/2017', tech: 'JS',
  },
  {
    salary: 513, qualification: 'Junior', city: 'Gomel', date: '12/24/2017', tech: 'R',
  },
  {
    salary: 450, qualification: 'Junior', city: 'Vitebsk', date: '02/03/2017', tech: 'Java',
  },
  {
    salary: 388, qualification: 'Junior', city: 'Gomel', date: '02/08/2016', tech: 'C#',
  },
  {
    salary: 566, qualification: 'Junior', city: 'Mogilev', date: '02/02/2017', tech: 'Ruby',
  },
  {
    salary: 484, qualification: 'Junior', city: 'Grodno', date: '10/05/2017', tech: 'R',
  },
  {
    salary: 434, qualification: 'Junior', city: 'Minsk', date: '09/09/2016', tech: 'JS',
  },
  {
    salary: 428, qualification: 'Junior', city: 'Mogilev', date: '08/21/2016', tech: 'C#',
  },
  {
    salary: 303, qualification: 'Junior', city: 'Vitebsk', date: '01/29/2016', tech: 'Ruby',
  },
  {
    salary: 418, qualification: 'Junior', city: 'Vitebsk', date: '08/13/2016', tech: 'C#',
  },
  {
    salary: 538, qualification: 'Junior', city: 'Minsk', date: '01/19/2018', tech: 'Ruby',
  },
  {
    salary: 492, qualification: 'Junior', city: 'Brest', date: '06/23/2017', tech: 'C#',
  },
  {
    salary: 581, qualification: 'Junior', city: 'Grodno', date: '10/17/2016', tech: 'JS',
  },
  {
    salary: 598, qualification: 'Junior', city: 'Mogilev', date: '03/27/2017', tech: 'Ruby',
  },
  {
    salary: 256, qualification: 'Junior', city: 'Vitebsk', date: '01/11/2017', tech: 'Python',
  },
  {
    salary: 469, qualification: 'Junior', city: 'Grodno', date: '04/23/2017', tech: 'Java',
  },
  {
    salary: 557, qualification: 'Junior', city: 'Vitebsk', date: '05/12/2016', tech: 'Python',
  },
  {
    salary: 402, qualification: 'Junior', city: 'Brest', date: '04/27/2016', tech: 'R',
  },
  {
    salary: 582, qualification: 'Junior', city: 'Brest', date: '01/26/2018', tech: 'Ruby',
  },
  {
    salary: 576, qualification: 'Junior', city: 'Minsk', date: '06/11/2016', tech: 'Ruby',
  },
  {
    salary: 273, qualification: 'Junior', city: 'Minsk', date: '06/12/2017', tech: 'Python',
  },
  {
    salary: 390, qualification: 'Junior', city: 'Minsk', date: '12/16/2016', tech: 'Python',
  },
  {
    salary: 553, qualification: 'Junior', city: 'Mogilev', date: '03/06/2017', tech: 'Java',
  },
  {
    salary: 392, qualification: 'Junior', city: 'Vitebsk', date: '08/28/2017', tech: 'Java',
  },
  {
    salary: 503, qualification: 'Junior', city: 'Grodno', date: '03/31/2017', tech: 'Python',
  },
  {
    salary: 425, qualification: 'Junior', city: 'Grodno', date: '10/31/2016', tech: 'Ruby',
  },
  {
    salary: 494, qualification: 'Junior', city: 'Gomel', date: '05/07/2017', tech: 'R',
  },
  {
    salary: 588, qualification: 'Junior', city: 'Vitebsk', date: '03/23/2016', tech: 'C#',
  },
  {
    salary: 419, qualification: 'Junior', city: 'Grodno', date: '12/22/2016', tech: 'C#',
  },
  {
    salary: 263, qualification: 'Junior', city: 'Minsk', date: '01/11/2018', tech: 'Ruby',
  },
  {
    salary: 268, qualification: 'Junior', city: 'Vitebsk', date: '03/19/2018', tech: 'Ruby',
  },
  {
    salary: 297, qualification: 'Junior', city: 'Minsk', date: '03/18/2016', tech: 'Ruby',
  },
  {
    salary: 413, qualification: 'Junior', city: 'Vitebsk', date: '05/05/2017', tech: 'Java',
  },
  {
    salary: 392, qualification: 'Junior', city: 'Vitebsk', date: '03/10/2018', tech: 'R',
  },
  {
    salary: 404, qualification: 'Junior', city: 'Mogilev', date: '02/27/2017', tech: 'Ruby',
  },
  {
    salary: 522, qualification: 'Junior', city: 'Gomel', date: '01/24/2016', tech: 'JS',
  },
  {
    salary: 322, qualification: 'Junior', city: 'Grodno', date: '10/08/2017', tech: 'JS',
  },
  {
    salary: 542, qualification: 'Junior', city: 'Grodno', date: '12/07/2016', tech: 'Java',
  },
  {
    salary: 555, qualification: 'Junior', city: 'Mogilev', date: '09/30/2016', tech: 'Python',
  },
  {
    salary: 384, qualification: 'Junior', city: 'Brest', date: '11/07/2017', tech: 'Ruby',
  },
  {
    salary: 326, qualification: 'Junior', city: 'Mogilev', date: '06/24/2016', tech: 'C#',
  },
  {
    salary: 283, qualification: 'Junior', city: 'Grodno', date: '05/24/2017', tech: 'C#',
  },
  {
    salary: 588, qualification: 'Junior', city: 'Grodno', date: '11/09/2016', tech: 'Java',
  },
  {
    salary: 487, qualification: 'Junior', city: 'Grodno', date: '02/25/2018', tech: 'Java',
  },
  {
    salary: 309, qualification: 'Junior', city: 'Brest', date: '09/08/2017', tech: 'Java',
  },
  {
    salary: 287, qualification: 'Junior', city: 'Minsk', date: '05/30/2016', tech: 'R',
  },
  {
    salary: 282, qualification: 'Junior', city: 'Grodno', date: '03/07/2017', tech: 'R',
  },
  {
    salary: 348, qualification: 'Junior', city: 'Mogilev', date: '08/17/2016', tech: 'C#',
  },
  {
    salary: 280, qualification: 'Junior', city: 'Brest', date: '05/25/2016', tech: 'C#',
  },
  {
    salary: 354, qualification: 'Junior', city: 'Grodno', date: '09/07/2016', tech: 'Java',
  },
  {
    salary: 531, qualification: 'Junior', city: 'Minsk', date: '07/29/2017', tech: 'JS',
  },
  {
    salary: 285, qualification: 'Junior', city: 'Brest', date: '09/20/2017', tech: 'R',
  },
  {
    salary: 524, qualification: 'Junior', city: 'Mogilev', date: '10/24/2016', tech: 'Java',
  },
  {
    salary: 506, qualification: 'Junior', city: 'Gomel', date: '04/22/2017', tech: 'C#',
  },
  {
    salary: 327, qualification: 'Junior', city: 'Brest', date: '02/05/2016', tech: 'Java',
  },
  {
    salary: 323, qualification: 'Junior', city: 'Vitebsk', date: '11/02/2017', tech: 'C#',
  },
  {
    salary: 438, qualification: 'Junior', city: 'Minsk', date: '09/17/2017', tech: 'Ruby',
  },
  {
    salary: 531, qualification: 'Junior', city: 'Gomel', date: '01/07/2016', tech: 'C#',
  },
  {
    salary: 327, qualification: 'Junior', city: 'Mogilev', date: '01/17/2017', tech: 'Ruby',
  },
  {
    salary: 300, qualification: 'Junior', city: 'Brest', date: '08/16/2016', tech: 'Ruby',
  },
  {
    salary: 481, qualification: 'Junior', city: 'Gomel', date: '06/11/2016', tech: 'Ruby',
  },
  {
    salary: 534, qualification: 'Junior', city: 'Minsk', date: '02/20/2018', tech: 'Ruby',
  },
  {
    salary: 501, qualification: 'Junior', city: 'Minsk', date: '01/26/2018', tech: 'Ruby',
  },
  {
    salary: 281, qualification: 'Junior', city: 'Mogilev', date: '01/16/2018', tech: 'Java',
  },
  {
    salary: 300, qualification: 'Junior', city: 'Mogilev', date: '01/28/2017', tech: 'Python',
  },
  {
    salary: 277, qualification: 'Junior', city: 'Mogilev', date: '11/08/2017', tech: 'Java',
  },
  {
    salary: 479, qualification: 'Junior', city: 'Vitebsk', date: '11/05/2016', tech: 'Ruby',
  },
  {
    salary: 536, qualification: 'Junior', city: 'Mogilev', date: '08/07/2017', tech: 'Python',
  },
  {
    salary: 274, qualification: 'Junior', city: 'Gomel', date: '10/06/2016', tech: 'JS',
  },
  {
    salary: 425, qualification: 'Junior', city: 'Vitebsk', date: '12/24/2016', tech: 'Python',
  },
  {
    salary: 536, qualification: 'Junior', city: 'Grodno', date: '03/29/2018', tech: 'Python',
  },
  {
    salary: 414, qualification: 'Junior', city: 'Minsk', date: '12/18/2017', tech: 'Python',
  },
  {
    salary: 421, qualification: 'Junior', city: 'Minsk', date: '11/09/2017', tech: 'C#',
  },
  {
    salary: 295, qualification: 'Junior', city: 'Gomel', date: '03/20/2018', tech: 'Java',
  },
  {
    salary: 462, qualification: 'Junior', city: 'Grodno', date: '03/25/2018', tech: 'Ruby',
  },
  {
    salary: 336, qualification: 'Junior', city: 'Mogilev', date: '11/24/2016', tech: 'Python',
  },
  {
    salary: 427, qualification: 'Junior', city: 'Minsk', date: '03/20/2018', tech: 'Java',
  },
  {
    salary: 576, qualification: 'Junior', city: 'Gomel', date: '02/18/2018', tech: 'C#',
  },
  {
    salary: 415, qualification: 'Junior', city: 'Gomel', date: '06/02/2017', tech: 'JS',
  },
  {
    salary: 301, qualification: 'Junior', city: 'Brest', date: '06/09/2017', tech: 'Python',
  },
  {
    salary: 310, qualification: 'Junior', city: 'Gomel', date: '12/14/2016', tech: 'Python',
  },
  {
    salary: 426, qualification: 'Junior', city: 'Gomel', date: '12/29/2016', tech: 'Python',
  },
  {
    salary: 316, qualification: 'Junior', city: 'Gomel', date: '03/05/2017', tech: 'C#',
  },
  {
    salary: 254, qualification: 'Junior', city: 'Minsk', date: '06/02/2016', tech: 'Python',
  },
  {
    salary: 383, qualification: 'Junior', city: 'Vitebsk', date: '06/01/2017', tech: 'Java',
  },
  {
    salary: 528, qualification: 'Junior', city: 'Minsk', date: '10/25/2016', tech: 'JS',
  },
  {
    salary: 551, qualification: 'Junior', city: 'Mogilev', date: '06/06/2016', tech: 'C#',
  },
  {
    salary: 587, qualification: 'Junior', city: 'Brest', date: '05/08/2016', tech: 'C#',
  },
  {
    salary: 577, qualification: 'Junior', city: 'Brest', date: '01/16/2017', tech: 'Python',
  },
  {
    salary: 507, qualification: 'Junior', city: 'Minsk', date: '01/26/2017', tech: 'Ruby',
  },
  {
    salary: 371, qualification: 'Junior', city: 'Gomel', date: '02/19/2016', tech: 'C#',
  },
  {
    salary: 394, qualification: 'Junior', city: 'Minsk', date: '01/17/2018', tech: 'JS',
  },
  {
    salary: 307, qualification: 'Junior', city: 'Grodno', date: '07/22/2017', tech: 'Ruby',
  },
  {
    salary: 426, qualification: 'Junior', city: 'Minsk', date: '04/24/2017', tech: 'Python',
  },
  {
    salary: 258, qualification: 'Junior', city: 'Brest', date: '07/31/2016', tech: 'Ruby',
  },
  {
    salary: 411, qualification: 'Junior', city: 'Gomel', date: '02/22/2017', tech: 'R',
  },
  {
    salary: 330, qualification: 'Junior', city: 'Vitebsk', date: '12/03/2017', tech: 'Ruby',
  },
  {
    salary: 365, qualification: 'Junior', city: 'Minsk', date: '03/19/2017', tech: 'JS',
  },
  {
    salary: 369, qualification: 'Junior', city: 'Minsk', date: '07/12/2017', tech: 'C#',
  },
  {
    salary: 516, qualification: 'Junior', city: 'Minsk', date: '05/19/2017', tech: 'Python',
  },
  {
    salary: 398, qualification: 'Junior', city: 'Grodno', date: '01/10/2016', tech: 'R',
  },
  {
    salary: 367, qualification: 'Junior', city: 'Vitebsk', date: '11/30/2016', tech: 'JS',
  },
  {
    salary: 543, qualification: 'Junior', city: 'Grodno', date: '12/29/2017', tech: 'R',
  },
  {
    salary: 291, qualification: 'Junior', city: 'Gomel', date: '03/14/2016', tech: 'R',
  },
  {
    salary: 528, qualification: 'Junior', city: 'Gomel', date: '12/06/2017', tech: 'C#',
  },
  {
    salary: 505, qualification: 'Junior', city: 'Minsk', date: '12/29/2016', tech: 'Ruby',
  },
  {
    salary: 325, qualification: 'Junior', city: 'Grodno', date: '03/28/2016', tech: 'Python',
  },
  {
    salary: 585, qualification: 'Junior', city: 'Gomel', date: '08/09/2017', tech: 'R',
  },
  {
    salary: 494, qualification: 'Junior', city: 'Minsk', date: '04/23/2016', tech: 'Ruby',
  },
  {
    salary: 486, qualification: 'Junior', city: 'Mogilev', date: '03/05/2017', tech: 'C#',
  },
  {
    salary: 485, qualification: 'Junior', city: 'Vitebsk', date: '03/22/2018', tech: 'Ruby',
  },
  {
    salary: 296, qualification: 'Junior', city: 'Mogilev', date: '11/07/2016', tech: 'C#',
  },
  {
    salary: 347, qualification: 'Junior', city: 'Brest', date: '07/20/2016', tech: 'Ruby',
  },
  {
    salary: 506, qualification: 'Junior', city: 'Grodno', date: '08/03/2016', tech: 'R',
  },
  {
    salary: 394, qualification: 'Junior', city: 'Minsk', date: '05/26/2017', tech: 'Ruby',
  },
  {
    salary: 581, qualification: 'Junior', city: 'Brest', date: '12/31/2017', tech: 'C#',
  },
  {
    salary: 581, qualification: 'Junior', city: 'Vitebsk', date: '06/17/2016', tech: 'C#',
  },
  {
    salary: 456, qualification: 'Junior', city: 'Grodno', date: '04/30/2017', tech: 'JS',
  },
  {
    salary: 514, qualification: 'Junior', city: 'Vitebsk', date: '01/11/2016', tech: 'JS',
  },
  {
    salary: 445, qualification: 'Junior', city: 'Minsk', date: '06/28/2016', tech: 'Java',
  },
  {
    salary: 362, qualification: 'Junior', city: 'Vitebsk', date: '05/19/2017', tech: 'JS',
  },
  {
    salary: 281, qualification: 'Junior', city: 'Brest', date: '12/11/2016', tech: 'JS',
  },
  {
    salary: 404, qualification: 'Junior', city: 'Vitebsk', date: '07/02/2017', tech: 'C#',
  },
  {
    salary: 496, qualification: 'Junior', city: 'Mogilev', date: '06/08/2017', tech: 'Java',
  },
  {
    salary: 294, qualification: 'Junior', city: 'Brest', date: '03/12/2016', tech: 'JS',
  },
  {
    salary: 515, qualification: 'Junior', city: 'Vitebsk', date: '09/28/2017', tech: 'JS',
  },
  {
    salary: 581, qualification: 'Junior', city: 'Minsk', date: '12/15/2016', tech: 'Ruby',
  },
  {
    salary: 576, qualification: 'Junior', city: 'Mogilev', date: '11/15/2016', tech: 'Ruby',
  },
  {
    salary: 261, qualification: 'Junior', city: 'Minsk', date: '04/19/2017', tech: 'R',
  },
  {
    salary: 253, qualification: 'Junior', city: 'Grodno', date: '05/31/2017', tech: 'Python',
  },
  {
    salary: 291, qualification: 'Junior', city: 'Gomel', date: '04/11/2017', tech: 'Python',
  },
  {
    salary: 287, qualification: 'Junior', city: 'Minsk', date: '03/05/2016', tech: 'Ruby',
  },
  {
    salary: 293, qualification: 'Junior', city: 'Mogilev', date: '07/14/2017', tech: 'R',
  },
  {
    salary: 398, qualification: 'Junior', city: 'Vitebsk', date: '12/21/2017', tech: 'Ruby',
  },
  {
    salary: 340, qualification: 'Junior', city: 'Grodno', date: '05/04/2017', tech: 'C#',
  },
  {
    salary: 306, qualification: 'Junior', city: 'Grodno', date: '01/19/2018', tech: 'JS',
  },
  {
    salary: 435, qualification: 'Junior', city: 'Brest', date: '12/26/2016', tech: 'Java',
  },
  {
    salary: 544, qualification: 'Junior', city: 'Vitebsk', date: '11/26/2016', tech: 'Ruby',
  },
  {
    salary: 452, qualification: 'Junior', city: 'Grodno', date: '12/03/2016', tech: 'Python',
  },
  {
    salary: 361, qualification: 'Junior', city: 'Brest', date: '03/29/2017', tech: 'R',
  },
  {
    salary: 341, qualification: 'Junior', city: 'Minsk', date: '06/06/2016', tech: 'Java',
  },
  {
    salary: 302, qualification: 'Junior', city: 'Mogilev', date: '10/13/2016', tech: 'Ruby',
  },
  {
    salary: 361, qualification: 'Junior', city: 'Mogilev', date: '03/21/2016', tech: 'C#',
  },
  {
    salary: 399, qualification: 'Junior', city: 'Minsk', date: '08/02/2017', tech: 'JS',
  },
  {
    salary: 584, qualification: 'Junior', city: 'Grodno', date: '08/08/2016', tech: 'JS',
  },
  {
    salary: 386, qualification: 'Junior', city: 'Gomel', date: '09/24/2017', tech: 'R',
  },
  {
    salary: 529, qualification: 'Junior', city: 'Grodno', date: '07/20/2017', tech: 'Java',
  },
  {
    salary: 277, qualification: 'Junior', city: 'Grodno', date: '10/11/2017', tech: 'Ruby',
  },
  {
    salary: 475, qualification: 'Junior', city: 'Mogilev', date: '08/03/2016', tech: 'C#',
  },
  {
    salary: 514, qualification: 'Junior', city: 'Mogilev', date: '02/29/2016', tech: 'Ruby',
  },
  {
    salary: 573, qualification: 'Junior', city: 'Vitebsk', date: '08/03/2016', tech: 'R',
  },
  {
    salary: 527, qualification: 'Junior', city: 'Gomel', date: '07/06/2016', tech: 'Ruby',
  },
  {
    salary: 302, qualification: 'Junior', city: 'Mogilev', date: '04/07/2018', tech: 'Java',
  },
  {
    salary: 531, qualification: 'Junior', city: 'Brest', date: '02/13/2016', tech: 'Ruby',
  },
  {
    salary: 385, qualification: 'Junior', city: 'Mogilev', date: '05/14/2017', tech: 'Ruby',
  },
  {
    salary: 381, qualification: 'Junior', city: 'Grodno', date: '09/03/2016', tech: 'R',
  },
  {
    salary: 336, qualification: 'Junior', city: 'Minsk', date: '07/24/2016', tech: 'R',
  },
  {
    salary: 364, qualification: 'Junior', city: 'Gomel', date: '03/24/2016', tech: 'Python',
  },
  {
    salary: 261, qualification: 'Junior', city: 'Mogilev', date: '10/21/2016', tech: 'Python',
  },
  {
    salary: 385, qualification: 'Junior', city: 'Gomel', date: '12/20/2016', tech: 'JS',
  },
  {
    salary: 562, qualification: 'Junior', city: 'Gomel', date: '12/13/2016', tech: 'Ruby',
  },
  {
    salary: 480, qualification: 'Junior', city: 'Brest', date: '09/04/2016', tech: 'Java',
  },
  {
    salary: 519, qualification: 'Junior', city: 'Brest', date: '04/30/2017', tech: 'JS',
  },
  {
    salary: 453, qualification: 'Junior', city: 'Minsk', date: '10/01/2016', tech: 'C#',
  },
  {
    salary: 559, qualification: 'Junior', city: 'Vitebsk', date: '06/19/2016', tech: 'Java',
  },
  {
    salary: 270, qualification: 'Junior', city: 'Vitebsk', date: '03/04/2016', tech: 'R',
  },
  {
    salary: 521, qualification: 'Junior', city: 'Minsk', date: '04/13/2017', tech: 'Ruby',
  },
  {
    salary: 574, qualification: 'Junior', city: 'Minsk', date: '01/13/2018', tech: 'JS',
  },
  {
    salary: 513, qualification: 'Junior', city: 'Gomel', date: '09/29/2017', tech: 'C#',
  },
  {
    salary: 349, qualification: 'Junior', city: 'Mogilev', date: '03/13/2018', tech: 'C#',
  },
  {
    salary: 327, qualification: 'Junior', city: 'Grodno', date: '10/30/2016', tech: 'R',
  },
  {
    salary: 544, qualification: 'Junior', city: 'Minsk', date: '05/11/2017', tech: 'JS',
  },
  {
    salary: 427, qualification: 'Junior', city: 'Mogilev', date: '07/19/2016', tech: 'JS',
  },
  {
    salary: 419, qualification: 'Junior', city: 'Minsk', date: '11/19/2016', tech: 'Python',
  },
  {
    salary: 277, qualification: 'Junior', city: 'Minsk', date: '11/10/2017', tech: 'Python',
  },
  {
    salary: 486, qualification: 'Junior', city: 'Mogilev', date: '04/02/2017', tech: 'Ruby',
  },
  {
    salary: 343, qualification: 'Junior', city: 'Vitebsk', date: '02/11/2017', tech: 'Java',
  },
  {
    salary: 528, qualification: 'Junior', city: 'Grodno', date: '03/18/2018', tech: 'C#',
  },
  {
    salary: 399, qualification: 'Junior', city: 'Mogilev', date: '08/26/2017', tech: 'Ruby',
  },
  {
    salary: 379, qualification: 'Junior', city: 'Vitebsk', date: '02/06/2017', tech: 'JS',
  },
  {
    salary: 574, qualification: 'Junior', city: 'Vitebsk', date: '03/12/2016', tech: 'Python',
  },
  {
    salary: 588, qualification: 'Junior', city: 'Vitebsk', date: '07/16/2016', tech: 'R',
  },
  {
    salary: 467, qualification: 'Junior', city: 'Brest', date: '11/12/2017', tech: 'R',
  },
  {
    salary: 480, qualification: 'Junior', city: 'Vitebsk', date: '03/22/2016', tech: 'JS',
  },
  {
    salary: 319, qualification: 'Junior', city: 'Vitebsk', date: '09/07/2016', tech: 'JS',
  },
  {
    salary: 513, qualification: 'Junior', city: 'Vitebsk', date: '09/19/2016', tech: 'Ruby',
  },
  {
    salary: 254, qualification: 'Junior', city: 'Mogilev', date: '01/08/2018', tech: 'R',
  },
  {
    salary: 484, qualification: 'Junior', city: 'Brest', date: '11/05/2016', tech: 'C#',
  },
  {
    salary: 407, qualification: 'Junior', city: 'Vitebsk', date: '03/01/2016', tech: 'JS',
  },
  {
    salary: 443, qualification: 'Junior', city: 'Grodno', date: '11/25/2017', tech: 'Ruby',
  },
  {
    salary: 264, qualification: 'Junior', city: 'Mogilev', date: '03/20/2018', tech: 'JS',
  },
  {
    salary: 305, qualification: 'Junior', city: 'Vitebsk', date: '06/01/2016', tech: 'JS',
  },
  {
    salary: 401, qualification: 'Junior', city: 'Gomel', date: '06/02/2016', tech: 'JS',
  },
  {
    salary: 267, qualification: 'Junior', city: 'Grodno', date: '12/06/2016', tech: 'C#',
  },
  {
    salary: 566, qualification: 'Junior', city: 'Minsk', date: '02/18/2017', tech: 'Python',
  },
  {
    salary: 261, qualification: 'Junior', city: 'Grodno', date: '04/05/2017', tech: 'R',
  },
  {
    salary: 432, qualification: 'Junior', city: 'Vitebsk', date: '04/07/2017', tech: 'Python',
  },
  {
    salary: 486, qualification: 'Junior', city: 'Gomel', date: '01/22/2017', tech: 'C#',
  },
  {
    salary: 282, qualification: 'Junior', city: 'Vitebsk', date: '10/26/2017', tech: 'C#',
  },
  {
    salary: 546, qualification: 'Junior', city: 'Brest', date: '04/07/2017', tech: 'R',
  },
  {
    salary: 552, qualification: 'Junior', city: 'Grodno', date: '01/17/2018', tech: 'Python',
  },
  {
    salary: 448, qualification: 'Junior', city: 'Mogilev', date: '06/13/2017', tech: 'Ruby',
  },
  {
    salary: 486, qualification: 'Junior', city: 'Brest', date: '04/12/2017', tech: 'Ruby',
  },
  {
    salary: 424, qualification: 'Junior', city: 'Vitebsk', date: '05/09/2017', tech: 'Java',
  },
  {
    salary: 562, qualification: 'Junior', city: 'Brest', date: '01/07/2018', tech: 'C#',
  },
  {
    salary: 288, qualification: 'Junior', city: 'Vitebsk', date: '08/19/2017', tech: 'Ruby',
  },
  {
    salary: 513, qualification: 'Junior', city: 'Brest', date: '06/15/2016', tech: 'Python',
  },
  {
    salary: 534, qualification: 'Junior', city: 'Gomel', date: '02/27/2017', tech: 'Ruby',
  },
  {
    salary: 464, qualification: 'Junior', city: 'Gomel', date: '09/27/2017', tech: 'R',
  },
  {
    salary: 277, qualification: 'Junior', city: 'Grodno', date: '01/24/2018', tech: 'Java',
  },
  {
    salary: 441, qualification: 'Junior', city: 'Grodno', date: '03/14/2017', tech: 'Java',
  },
  {
    salary: 254, qualification: 'Junior', city: 'Mogilev', date: '12/10/2016', tech: 'R',
  },
  {
    salary: 572, qualification: 'Junior', city: 'Gomel', date: '03/10/2017', tech: 'Python',
  },
  {
    salary: 544, qualification: 'Junior', city: 'Mogilev', date: '11/20/2017', tech: 'Python',
  },
  {
    salary: 436, qualification: 'Junior', city: 'Minsk', date: '02/20/2016', tech: 'JS',
  },
  {
    salary: 575, qualification: 'Junior', city: 'Vitebsk', date: '02/19/2017', tech: 'Ruby',
  },
  {
    salary: 323, qualification: 'Junior', city: 'Mogilev', date: '10/30/2016', tech: 'Java',
  },
  {
    salary: 323, qualification: 'Junior', city: 'Brest', date: '05/20/2016', tech: 'Java',
  },
  {
    salary: 511, qualification: 'Junior', city: 'Grodno', date: '08/25/2016', tech: 'C#',
  },
  {
    salary: 333, qualification: 'Junior', city: 'Mogilev', date: '07/26/2017', tech: 'JS',
  },
  {
    salary: 422, qualification: 'Junior', city: 'Mogilev', date: '01/12/2018', tech: 'C#',
  },
  {
    salary: 261, qualification: 'Junior', city: 'Grodno', date: '05/20/2016', tech: 'Python',
  },
  {
    salary: 556, qualification: 'Junior', city: 'Mogilev', date: '11/28/2017', tech: 'C#',
  },
  {
    salary: 473, qualification: 'Junior', city: 'Gomel', date: '10/13/2016', tech: 'C#',
  },
  {
    salary: 525, qualification: 'Junior', city: 'Mogilev', date: '07/03/2016', tech: 'C#',
  },
  {
    salary: 345, qualification: 'Junior', city: 'Brest', date: '12/07/2016', tech: 'R',
  },
  {
    salary: 543, qualification: 'Junior', city: 'Brest', date: '06/14/2017', tech: 'Python',
  },
  {
    salary: 250, qualification: 'Junior', city: 'Minsk', date: '10/22/2016', tech: 'R',
  },
  {
    salary: 405, qualification: 'Junior', city: 'Brest', date: '05/21/2016', tech: 'R',
  },
  {
    salary: 583, qualification: 'Junior', city: 'Gomel', date: '01/12/2017', tech: 'C#',
  },
  {
    salary: 375, qualification: 'Junior', city: 'Brest', date: '03/18/2017', tech: 'Java',
  },
  {
    salary: 582, qualification: 'Junior', city: 'Gomel', date: '01/14/2017', tech: 'C#',
  },
  {
    salary: 506, qualification: 'Junior', city: 'Minsk', date: '07/27/2016', tech: 'R',
  },
  {
    salary: 431, qualification: 'Junior', city: 'Brest', date: '02/24/2017', tech: 'Python',
  },
  {
    salary: 463, qualification: 'Junior', city: 'Minsk', date: '05/23/2016', tech: 'C#',
  },
  {
    salary: 568, qualification: 'Junior', city: 'Grodno', date: '11/21/2017', tech: 'C#',
  },
  {
    salary: 487, qualification: 'Junior', city: 'Mogilev', date: '02/28/2018', tech: 'C#',
  },
  {
    salary: 502, qualification: 'Junior', city: 'Minsk', date: '04/29/2016', tech: 'JS',
  },
  {
    salary: 258, qualification: 'Junior', city: 'Gomel', date: '03/05/2018', tech: 'Python',
  },
  {
    salary: 547, qualification: 'Junior', city: 'Mogilev', date: '02/12/2016', tech: 'R',
  },
  {
    salary: 505, qualification: 'Junior', city: 'Brest', date: '03/13/2018', tech: 'Python',
  },
  {
    salary: 547, qualification: 'Junior', city: 'Gomel', date: '04/11/2016', tech: 'C#',
  },
  {
    salary: 573, qualification: 'Junior', city: 'Brest', date: '04/25/2017', tech: 'Python',
  },
  {
    salary: 492, qualification: 'Junior', city: 'Minsk', date: '11/09/2017', tech: 'JS',
  },
  {
    salary: 453, qualification: 'Junior', city: 'Grodno', date: '07/29/2017', tech: 'JS',
  },
  {
    salary: 446, qualification: 'Junior', city: 'Vitebsk', date: '01/10/2018', tech: 'Python',
  },
  {
    salary: 475, qualification: 'Junior', city: 'Brest', date: '01/15/2016', tech: 'Java',
  },
  {
    salary: 465, qualification: 'Junior', city: 'Vitebsk', date: '02/14/2016', tech: 'Python',
  },
  {
    salary: 522, qualification: 'Junior', city: 'Brest', date: '03/14/2017', tech: 'Java',
  },
  {
    salary: 461, qualification: 'Junior', city: 'Mogilev', date: '11/10/2016', tech: 'Python',
  },
  {
    salary: 404, qualification: 'Junior', city: 'Grodno', date: '12/14/2016', tech: 'R',
  },
  {
    salary: 250, qualification: 'Junior', city: 'Brest', date: '12/15/2016', tech: 'Java',
  },
  {
    salary: 394, qualification: 'Junior', city: 'Vitebsk', date: '09/26/2016', tech: 'R',
  },
  {
    salary: 297, qualification: 'Junior', city: 'Mogilev', date: '11/17/2016', tech: 'C#',
  },
  {
    salary: 477, qualification: 'Junior', city: 'Gomel', date: '10/24/2017', tech: 'C#',
  },
  {
    salary: 497, qualification: 'Junior', city: 'Brest', date: '12/12/2016', tech: 'Java',
  },
  {
    salary: 321, qualification: 'Junior', city: 'Grodno', date: '01/27/2017', tech: 'R',
  },
  {
    salary: 307, qualification: 'Junior', city: 'Mogilev', date: '03/11/2017', tech: 'Java',
  },
  {
    salary: 427, qualification: 'Junior', city: 'Grodno', date: '07/24/2016', tech: 'Java',
  },
  {
    salary: 334, qualification: 'Junior', city: 'Mogilev', date: '09/16/2016', tech: 'Java',
  },
  {
    salary: 547, qualification: 'Junior', city: 'Mogilev', date: '06/01/2017', tech: 'R',
  },
  {
    salary: 460, qualification: 'Junior', city: 'Grodno', date: '11/12/2017', tech: 'R',
  },
  {
    salary: 443, qualification: 'Junior', city: 'Gomel', date: '05/05/2017', tech: 'C#',
  },
  {
    salary: 445, qualification: 'Junior', city: 'Minsk', date: '03/30/2017', tech: 'JS',
  },
  {
    salary: 427, qualification: 'Junior', city: 'Mogilev', date: '11/28/2017', tech: 'JS',
  },
  {
    salary: 480, qualification: 'Junior', city: 'Grodno', date: '07/17/2016', tech: 'R',
  },
  {
    salary: 304, qualification: 'Junior', city: 'Minsk', date: '07/29/2017', tech: 'Python',
  },
  {
    salary: 492, qualification: 'Junior', city: 'Brest', date: '06/14/2017', tech: 'R',
  },
  {
    salary: 474, qualification: 'Junior', city: 'Brest', date: '06/22/2016', tech: 'JS',
  },
  {
    salary: 474, qualification: 'Junior', city: 'Minsk', date: '05/29/2016', tech: 'Python',
  },
  {
    salary: 307, qualification: 'Junior', city: 'Gomel', date: '03/28/2018', tech: 'C#',
  },
  {
    salary: 429, qualification: 'Junior', city: 'Mogilev', date: '01/23/2018', tech: 'JS',
  },
  {
    salary: 522, qualification: 'Junior', city: 'Brest', date: '12/19/2017', tech: 'R',
  },
  {
    salary: 427, qualification: 'Junior', city: 'Grodno', date: '08/10/2017', tech: 'Python',
  },
  {
    salary: 275, qualification: 'Junior', city: 'Mogilev', date: '01/12/2016', tech: 'Ruby',
  },
  {
    salary: 478, qualification: 'Junior', city: 'Grodno', date: '11/02/2016', tech: 'Python',
  },
  {
    salary: 568, qualification: 'Junior', city: 'Brest', date: '12/15/2016', tech: 'R',
  },
  {
    salary: 280, qualification: 'Junior', city: 'Grodno', date: '11/16/2017', tech: 'C#',
  },
  {
    salary: 518, qualification: 'Junior', city: 'Mogilev', date: '07/25/2017', tech: 'Python',
  },
  {
    salary: 279, qualification: 'Junior', city: 'Grodno', date: '09/30/2016', tech: 'Python',
  },
  {
    salary: 430, qualification: 'Junior', city: 'Mogilev', date: '02/23/2018', tech: 'Java',
  },
  {
    salary: 266, qualification: 'Junior', city: 'Mogilev', date: '02/03/2016', tech: 'Ruby',
  },
  {
    salary: 314, qualification: 'Junior', city: 'Mogilev', date: '06/08/2017', tech: 'Python',
  },
  {
    salary: 297, qualification: 'Junior', city: 'Vitebsk', date: '10/29/2017', tech: 'R',
  },
  {
    salary: 486, qualification: 'Junior', city: 'Brest', date: '01/08/2016', tech: 'R',
  },
  {
    salary: 324, qualification: 'Junior', city: 'Minsk', date: '09/26/2017', tech: 'C#',
  },
  {
    salary: 468, qualification: 'Junior', city: 'Vitebsk', date: '03/29/2016', tech: 'Java',
  },
  {
    salary: 373, qualification: 'Junior', city: 'Mogilev', date: '10/26/2016', tech: 'Java',
  },
  {
    salary: 322, qualification: 'Junior', city: 'Brest', date: '02/03/2017', tech: 'Java',
  },
  {
    salary: 340, qualification: 'Junior', city: 'Mogilev', date: '05/19/2017', tech: 'Java',
  },
  {
    salary: 326, qualification: 'Junior', city: 'Minsk', date: '11/03/2016', tech: 'Ruby',
  },
  {
    salary: 275, qualification: 'Junior', city: 'Mogilev', date: '07/09/2017', tech: 'Python',
  },
  {
    salary: 256, qualification: 'Junior', city: 'Gomel', date: '05/16/2017', tech: 'C#',
  },
  {
    salary: 377, qualification: 'Junior', city: 'Gomel', date: '03/03/2017', tech: 'C#',
  },
  {
    salary: 274, qualification: 'Junior', city: 'Vitebsk', date: '08/31/2017', tech: 'Python',
  },
  {
    salary: 454, qualification: 'Junior', city: 'Brest', date: '04/22/2018', tech: 'Ruby',
  },
  {
    salary: 427, qualification: 'Junior', city: 'Minsk', date: '02/27/2016', tech: 'C#',
  },
  {
    salary: 341, qualification: 'Junior', city: 'Gomel', date: '04/02/2016', tech: 'Java',
  },
  {
    salary: 319, qualification: 'Junior', city: 'Grodno', date: '05/27/2016', tech: 'R',
  },
  {
    salary: 600, qualification: 'Junior', city: 'Brest', date: '02/09/2017', tech: 'Java',
  },
  {
    salary: 470, qualification: 'Junior', city: 'Mogilev', date: '10/21/2017', tech: 'Ruby',
  },
  {
    salary: 307, qualification: 'Junior', city: 'Minsk', date: '07/22/2017', tech: 'Ruby',
  },
  {
    salary: 343, qualification: 'Junior', city: 'Gomel', date: '02/03/2018', tech: 'C#',
  },
  {
    salary: 422, qualification: 'Junior', city: 'Gomel', date: '09/12/2016', tech: 'Java',
  },
  {
    salary: 536, qualification: 'Junior', city: 'Minsk', date: '09/12/2016', tech: 'Python',
  },
  {
    salary: 393, qualification: 'Junior', city: 'Brest', date: '11/07/2017', tech: 'C#',
  },
  {
    salary: 256, qualification: 'Junior', city: 'Minsk', date: '06/16/2017', tech: 'JS',
  },
  {
    salary: 335, qualification: 'Junior', city: 'Vitebsk', date: '02/11/2017', tech: 'Ruby',
  },
  {
    salary: 407, qualification: 'Junior', city: 'Vitebsk', date: '12/21/2017', tech: 'Ruby',
  },
  {
    salary: 337, qualification: 'Junior', city: 'Grodno', date: '09/24/2016', tech: 'R',
  },
  {
    salary: 429, qualification: 'Junior', city: 'Grodno', date: '07/06/2016', tech: 'JS',
  },
  {
    salary: 279, qualification: 'Junior', city: 'Grodno', date: '11/24/2016', tech: 'R',
  },
  {
    salary: 558, qualification: 'Junior', city: 'Brest', date: '04/09/2017', tech: 'C#',
  },
  {
    salary: 311, qualification: 'Junior', city: 'Vitebsk', date: '04/24/2016', tech: 'R',
  },
  {
    salary: 415, qualification: 'Junior', city: 'Vitebsk', date: '05/23/2017', tech: 'Ruby',
  },
  {
    salary: 294, qualification: 'Junior', city: 'Grodno', date: '04/03/2016', tech: 'Java',
  },
  {
    salary: 303, qualification: 'Junior', city: 'Brest', date: '07/02/2016', tech: 'Java',
  },
  {
    salary: 587, qualification: 'Junior', city: 'Mogilev', date: '03/24/2018', tech: 'R',
  },
  {
    salary: 566, qualification: 'Junior', city: 'Grodno', date: '06/29/2017', tech: 'Ruby',
  },
  {
    salary: 259, qualification: 'Junior', city: 'Brest', date: '12/22/2016', tech: 'Ruby',
  },
  {
    salary: 395, qualification: 'Junior', city: 'Vitebsk', date: '10/28/2017', tech: 'Python',
  },
  {
    salary: 585, qualification: 'Junior', city: 'Grodno', date: '05/25/2016', tech: 'R',
  },
  {
    salary: 483, qualification: 'Junior', city: 'Mogilev', date: '03/19/2018', tech: 'JS',
  },
  {
    salary: 571, qualification: 'Junior', city: 'Minsk', date: '07/22/2016', tech: 'C#',
  },
  {
    salary: 533, qualification: 'Junior', city: 'Mogilev', date: '08/04/2016', tech: 'R',
  },
  {
    salary: 484, qualification: 'Junior', city: 'Mogilev', date: '09/16/2016', tech: 'JS',
  },
  {
    salary: 440, qualification: 'Junior', city: 'Grodno', date: '12/20/2017', tech: 'R',
  },
  {
    salary: 350, qualification: 'Junior', city: 'Minsk', date: '12/26/2017', tech: 'Java',
  },
  {
    salary: 297, qualification: 'Junior', city: 'Gomel', date: '10/31/2016', tech: 'Python',
  },
  {
    salary: 283, qualification: 'Junior', city: 'Gomel', date: '10/05/2017', tech: 'JS',
  },
  {
    salary: 333, qualification: 'Junior', city: 'Grodno', date: '04/10/2017', tech: 'R',
  },
  {
    salary: 466, qualification: 'Junior', city: 'Grodno', date: '11/24/2016', tech: 'C#',
  },
  {
    salary: 519, qualification: 'Junior', city: 'Grodno', date: '07/04/2016', tech: 'Ruby',
  },
  {
    salary: 491, qualification: 'Junior', city: 'Grodno', date: '03/06/2018', tech: 'Ruby',
  },
  {
    salary: 520, qualification: 'Junior', city: 'Vitebsk', date: '11/15/2016', tech: 'JS',
  },
  {
    salary: 294, qualification: 'Junior', city: 'Minsk', date: '02/18/2017', tech: 'R',
  },
  {
    salary: 548, qualification: 'Junior', city: 'Vitebsk', date: '01/05/2017', tech: 'R',
  },
  {
    salary: 578, qualification: 'Junior', city: 'Brest', date: '08/09/2017', tech: 'R',
  },
  {
    salary: 407, qualification: 'Junior', city: 'Mogilev', date: '01/26/2017', tech: 'R',
  },
  {
    salary: 426, qualification: 'Junior', city: 'Brest', date: '02/11/2016', tech: 'Ruby',
  },
  {
    salary: 396, qualification: 'Junior', city: 'Vitebsk', date: '11/04/2017', tech: 'Java',
  },
  {
    salary: 365, qualification: 'Junior', city: 'Grodno', date: '06/30/2016', tech: 'JS',
  },
  {
    salary: 358, qualification: 'Junior', city: 'Brest', date: '12/01/2017', tech: 'R',
  },
  {
    salary: 534, qualification: 'Junior', city: 'Vitebsk', date: '08/16/2017', tech: 'C#',
  },
  {
    salary: 310, qualification: 'Junior', city: 'Minsk', date: '07/11/2017', tech: 'Python',
  },
  {
    salary: 374, qualification: 'Junior', city: 'Grodno', date: '10/03/2016', tech: 'R',
  },
  {
    salary: 380, qualification: 'Junior', city: 'Mogilev', date: '08/29/2016', tech: 'R',
  },
  {
    salary: 515, qualification: 'Junior', city: 'Gomel', date: '03/06/2016', tech: 'Python',
  },
  {
    salary: 542, qualification: 'Junior', city: 'Gomel', date: '04/07/2017', tech: 'Python',
  },
  {
    salary: 366, qualification: 'Junior', city: 'Vitebsk', date: '06/10/2016', tech: 'Java',
  },
  {
    salary: 494, qualification: 'Junior', city: 'Mogilev', date: '12/08/2016', tech: 'Python',
  },
  {
    salary: 425, qualification: 'Junior', city: 'Minsk', date: '05/25/2016', tech: 'Java',
  },
  {
    salary: 534, qualification: 'Junior', city: 'Grodno', date: '08/21/2017', tech: 'Java',
  },
  {
    salary: 420, qualification: 'Junior', city: 'Gomel', date: '11/10/2017', tech: 'Ruby',
  },
  {
    salary: 402, qualification: 'Junior', city: 'Mogilev', date: '07/05/2016', tech: 'R',
  },
  {
    salary: 478, qualification: 'Junior', city: 'Mogilev', date: '03/19/2017', tech: 'JS',
  },
  {
    salary: 255, qualification: 'Junior', city: 'Minsk', date: '04/29/2017', tech: 'R',
  },
  {
    salary: 295, qualification: 'Junior', city: 'Gomel', date: '07/29/2017', tech: 'C#',
  },
  {
    salary: 333, qualification: 'Junior', city: 'Brest', date: '05/19/2016', tech: 'Ruby',
  },
  {
    salary: 579, qualification: 'Junior', city: 'Grodno', date: '02/04/2018', tech: 'Python',
  },
  {
    salary: 293, qualification: 'Junior', city: 'Vitebsk', date: '07/10/2016', tech: 'Python',
  },
  {
    salary: 465, qualification: 'Junior', city: 'Mogilev', date: '07/22/2017', tech: 'C#',
  },
  {
    salary: 359, qualification: 'Junior', city: 'Gomel', date: '05/30/2017', tech: 'C#',
  },
  {
    salary: 449, qualification: 'Junior', city: 'Gomel', date: '11/21/2016', tech: 'Python',
  },
  {
    salary: 316, qualification: 'Junior', city: 'Grodno', date: '06/07/2017', tech: 'C#',
  },
  {
    salary: 483, qualification: 'Junior', city: 'Gomel', date: '02/23/2018', tech: 'Java',
  },
  {
    salary: 486, qualification: 'Junior', city: 'Mogilev', date: '05/15/2016', tech: 'Java',
  },
  {
    salary: 338, qualification: 'Junior', city: 'Vitebsk', date: '05/30/2016', tech: 'Java',
  },
  {
    salary: 481, qualification: 'Junior', city: 'Mogilev', date: '08/15/2017', tech: 'Ruby',
  },
  {
    salary: 445, qualification: 'Junior', city: 'Mogilev', date: '11/26/2016', tech: 'JS',
  },
  {
    salary: 590, qualification: 'Junior', city: 'Brest', date: '10/17/2016', tech: 'R',
  },
  {
    salary: 281, qualification: 'Junior', city: 'Minsk', date: '05/29/2017', tech: 'Ruby',
  },
  {
    salary: 580, qualification: 'Junior', city: 'Minsk', date: '12/06/2017', tech: 'Java',
  },
  {
    salary: 468, qualification: 'Junior', city: 'Mogilev', date: '02/08/2016', tech: 'R',
  },
  {
    salary: 318, qualification: 'Junior', city: 'Vitebsk', date: '02/22/2018', tech: 'Ruby',
  },
  {
    salary: 553, qualification: 'Junior', city: 'Grodno', date: '03/02/2018', tech: 'C#',
  },
  {
    salary: 373, qualification: 'Junior', city: 'Mogilev', date: '12/26/2017', tech: 'R',
  },
  {
    salary: 473, qualification: 'Junior', city: 'Minsk', date: '04/27/2017', tech: 'Ruby',
  },
  {
    salary: 507, qualification: 'Junior', city: 'Gomel', date: '07/24/2017', tech: 'Ruby',
  },
  {
    salary: 359, qualification: 'Junior', city: 'Gomel', date: '01/03/2018', tech: 'Ruby',
  },
  {
    salary: 595, qualification: 'Junior', city: 'Mogilev', date: '07/23/2016', tech: 'Java',
  },
  {
    salary: 306, qualification: 'Junior', city: 'Gomel', date: '03/24/2018', tech: 'JS',
  },
  {
    salary: 400, qualification: 'Junior', city: 'Mogilev', date: '10/05/2016', tech: 'Python',
  },
  {
    salary: 573, qualification: 'Junior', city: 'Vitebsk', date: '02/05/2018', tech: 'Java',
  },
  {
    salary: 556, qualification: 'Junior', city: 'Mogilev', date: '12/09/2017', tech: 'Java',
  },
  {
    salary: 575, qualification: 'Junior', city: 'Mogilev', date: '07/05/2016', tech: 'Java',
  },
  {
    salary: 551, qualification: 'Junior', city: 'Gomel', date: '07/21/2016', tech: 'C#',
  },
  {
    salary: 250, qualification: 'Junior', city: 'Mogilev', date: '08/11/2017', tech: 'Python',
  },
  {
    salary: 572, qualification: 'Junior', city: 'Vitebsk', date: '02/08/2018', tech: 'JS',
  },
  {
    salary: 500, qualification: 'Junior', city: 'Minsk', date: '03/16/2017', tech: 'Java',
  },
  {
    salary: 485, qualification: 'Junior', city: 'Mogilev', date: '08/31/2017', tech: 'R',
  },
  {
    salary: 293, qualification: 'Junior', city: 'Minsk', date: '01/10/2017', tech: 'Python',
  },
  {
    salary: 368, qualification: 'Junior', city: 'Grodno', date: '11/02/2017', tech: 'Python',
  },
  {
    salary: 508, qualification: 'Junior', city: 'Mogilev', date: '05/01/2016', tech: 'Java',
  },
  {
    salary: 318, qualification: 'Junior', city: 'Brest', date: '02/15/2018', tech: 'R',
  },
  {
    salary: 442, qualification: 'Junior', city: 'Vitebsk', date: '07/19/2016', tech: 'Java',
  },
  {
    salary: 503, qualification: 'Junior', city: 'Vitebsk', date: '10/19/2017', tech: 'R',
  },
  {
    salary: 561, qualification: 'Junior', city: 'Brest', date: '09/29/2017', tech: 'Ruby',
  },
  {
    salary: 395, qualification: 'Junior', city: 'Vitebsk', date: '01/16/2016', tech: 'JS',
  },
  {
    salary: 455, qualification: 'Junior', city: 'Vitebsk', date: '08/23/2016', tech: 'C#',
  },
  {
    salary: 327, qualification: 'Junior', city: 'Mogilev', date: '11/27/2017', tech: 'C#',
  },
  {
    salary: 295, qualification: 'Junior', city: 'Vitebsk', date: '08/26/2017', tech: 'Ruby',
  },
  {
    salary: 327, qualification: 'Junior', city: 'Mogilev', date: '04/08/2017', tech: 'Java',
  },
  {
    salary: 461, qualification: 'Junior', city: 'Minsk', date: '06/12/2017', tech: 'JS',
  },
  {
    salary: 317, qualification: 'Junior', city: 'Brest', date: '11/22/2016', tech: 'Python',
  },
  {
    salary: 253, qualification: 'Junior', city: 'Grodno', date: '06/29/2017', tech: 'JS',
  },
  {
    salary: 564, qualification: 'Junior', city: 'Minsk', date: '02/12/2016', tech: 'R',
  },
  {
    salary: 439, qualification: 'Junior', city: 'Vitebsk', date: '06/21/2016', tech: 'Python',
  },
  {
    salary: 424, qualification: 'Junior', city: 'Minsk', date: '10/06/2017', tech: 'JS',
  },
  {
    salary: 327, qualification: 'Junior', city: 'Mogilev', date: '10/10/2016', tech: 'R',
  },
  {
    salary: 269, qualification: 'Junior', city: 'Brest', date: '05/22/2017', tech: 'R',
  },
  {
    salary: 561, qualification: 'Junior', city: 'Vitebsk', date: '03/01/2017', tech: 'C#',
  },
  {
    salary: 389, qualification: 'Junior', city: 'Brest', date: '07/14/2017', tech: 'JS',
  },
  {
    salary: 333, qualification: 'Junior', city: 'Vitebsk', date: '03/16/2017', tech: 'Python',
  },
  {
    salary: 507, qualification: 'Junior', city: 'Mogilev', date: '09/14/2017', tech: 'Ruby',
  },
  {
    salary: 261, qualification: 'Junior', city: 'Minsk', date: '07/17/2016', tech: 'R',
  },
  {
    salary: 406, qualification: 'Junior', city: 'Minsk', date: '09/12/2017', tech: 'Ruby',
  },
  {
    salary: 489, qualification: 'Junior', city: 'Minsk', date: '04/27/2016', tech: 'R',
  },
  {
    salary: 581, qualification: 'Junior', city: 'Minsk', date: '10/01/2017', tech: 'Ruby',
  },
  {
    salary: 585, qualification: 'Junior', city: 'Brest', date: '03/25/2017', tech: 'JS',
  },
  {
    salary: 385, qualification: 'Junior', city: 'Grodno', date: '05/07/2017', tech: 'Ruby',
  },
  {
    salary: 498, qualification: 'Junior', city: 'Brest', date: '09/22/2017', tech: 'JS',
  },
  {
    salary: 522, qualification: 'Junior', city: 'Gomel', date: '10/17/2016', tech: 'Python',
  },
  {
    salary: 262, qualification: 'Junior', city: 'Vitebsk', date: '09/17/2017', tech: 'C#',
  },
  {
    salary: 519, qualification: 'Junior', city: 'Gomel', date: '02/23/2017', tech: 'R',
  },
  {
    salary: 543, qualification: 'Junior', city: 'Grodno', date: '11/30/2017', tech: 'Java',
  },
  {
    salary: 403, qualification: 'Junior', city: 'Mogilev', date: '01/22/2017', tech: 'JS',
  },
  {
    salary: 262, qualification: 'Junior', city: 'Grodno', date: '08/05/2016', tech: 'Ruby',
  },
  {
    salary: 277, qualification: 'Junior', city: 'Minsk', date: '06/11/2016', tech: 'C#',
  },
  {
    salary: 438, qualification: 'Junior', city: 'Brest', date: '11/25/2017', tech: 'Java',
  },
  {
    salary: 267, qualification: 'Junior', city: 'Mogilev', date: '09/17/2016', tech: 'Java',
  },
  {
    salary: 593, qualification: 'Junior', city: 'Grodno', date: '12/11/2017', tech: 'Python',
  },
  {
    salary: 407, qualification: 'Junior', city: 'Vitebsk', date: '03/08/2018', tech: 'Java',
  },
  {
    salary: 527, qualification: 'Junior', city: 'Minsk', date: '05/13/2016', tech: 'R',
  },
  {
    salary: 489, qualification: 'Junior', city: 'Vitebsk', date: '07/26/2017', tech: 'Java',
  },
  {
    salary: 315, qualification: 'Junior', city: 'Minsk', date: '11/09/2016', tech: 'R',
  },
  {
    salary: 456, qualification: 'Junior', city: 'Minsk', date: '12/05/2017', tech: 'Java',
  },
  {
    salary: 501, qualification: 'Junior', city: 'Mogilev', date: '03/08/2017', tech: 'Java',
  },
  {
    salary: 477, qualification: 'Junior', city: 'Vitebsk', date: '01/01/2016', tech: 'JS',
  },
  {
    salary: 331, qualification: 'Junior', city: 'Brest', date: '03/22/2016', tech: 'JS',
  },
  {
    salary: 600, qualification: 'Junior', city: 'Grodno', date: '01/21/2018', tech: 'JS',
  },
  {
    salary: 380, qualification: 'Junior', city: 'Mogilev', date: '03/21/2017', tech: 'R',
  },
  {
    salary: 317, qualification: 'Junior', city: 'Minsk', date: '03/11/2016', tech: 'JS',
  },
  {
    salary: 258, qualification: 'Junior', city: 'Grodno', date: '08/26/2017', tech: 'JS',
  },
  {
    salary: 586, qualification: 'Junior', city: 'Grodno', date: '11/05/2017', tech: 'Ruby',
  },
  {
    salary: 372, qualification: 'Junior', city: 'Minsk', date: '09/28/2016', tech: 'Python',
  },
  {
    salary: 309, qualification: 'Junior', city: 'Brest', date: '07/26/2017', tech: 'Ruby',
  },
  {
    salary: 596, qualification: 'Junior', city: 'Grodno', date: '04/13/2017', tech: 'Java',
  },
  {
    salary: 299, qualification: 'Junior', city: 'Grodno', date: '07/18/2017', tech: 'JS',
  },
  {
    salary: 433, qualification: 'Junior', city: 'Brest', date: '06/12/2016', tech: 'Java',
  },
  {
    salary: 323, qualification: 'Junior', city: 'Minsk', date: '12/07/2016', tech: 'Java',
  },
  {
    salary: 439, qualification: 'Junior', city: 'Brest', date: '07/22/2016', tech: 'JS',
  },
  {
    salary: 504, qualification: 'Junior', city: 'Vitebsk', date: '11/16/2016', tech: 'JS',
  },
  {
    salary: 421, qualification: 'Junior', city: 'Gomel', date: '02/28/2017', tech: 'R',
  },
  {
    salary: 330, qualification: 'Junior', city: 'Gomel', date: '09/23/2017', tech: 'R',
  },
  {
    salary: 403, qualification: 'Junior', city: 'Grodno', date: '04/22/2017', tech: 'C#',
  },
  {
    salary: 490, qualification: 'Junior', city: 'Gomel', date: '07/20/2016', tech: 'R',
  },
  {
    salary: 343, qualification: 'Junior', city: 'Grodno', date: '12/22/2017', tech: 'Python',
  },
  {
    salary: 354, qualification: 'Junior', city: 'Brest', date: '12/09/2016', tech: 'Java',
  },
  {
    salary: 284, qualification: 'Junior', city: 'Grodno', date: '06/25/2017', tech: 'C#',
  },
  {
    salary: 593, qualification: 'Junior', city: 'Mogilev', date: '03/03/2018', tech: 'Java',
  },
  {
    salary: 438, qualification: 'Junior', city: 'Gomel', date: '04/01/2018', tech: 'JS',
  },
  {
    salary: 345, qualification: 'Junior', city: 'Grodno', date: '02/14/2018', tech: 'R',
  },
  {
    salary: 388, qualification: 'Junior', city: 'Grodno', date: '03/31/2017', tech: 'R',
  },
  {
    salary: 296, qualification: 'Junior', city: 'Grodno', date: '09/07/2017', tech: 'R',
  },
  {
    salary: 291, qualification: 'Junior', city: 'Gomel', date: '06/05/2017', tech: 'Python',
  },
  {
    salary: 375, qualification: 'Junior', city: 'Vitebsk', date: '08/14/2017', tech: 'JS',
  },
  {
    salary: 529, qualification: 'Junior', city: 'Vitebsk', date: '03/26/2018', tech: 'R',
  },
  {
    salary: 452, qualification: 'Junior', city: 'Mogilev', date: '03/27/2018', tech: 'R',
  },
  {
    salary: 503, qualification: 'Junior', city: 'Gomel', date: '03/20/2016', tech: 'Python',
  },
  {
    salary: 352, qualification: 'Junior', city: 'Gomel', date: '01/23/2016', tech: 'R',
  },
  {
    salary: 276, qualification: 'Junior', city: 'Minsk', date: '09/02/2016', tech: 'Python',
  },
  {
    salary: 330, qualification: 'Junior', city: 'Mogilev', date: '05/21/2016', tech: 'Ruby',
  },
  {
    salary: 394, qualification: 'Junior', city: 'Grodno', date: '03/14/2016', tech: 'C#',
  },
  {
    salary: 486, qualification: 'Junior', city: 'Brest', date: '06/16/2017', tech: 'R',
  },
  {
    salary: 406, qualification: 'Junior', city: 'Brest', date: '09/15/2017', tech: 'Java',
  },
  {
    salary: 451, qualification: 'Junior', city: 'Grodno', date: '04/23/2016', tech: 'Ruby',
  },
  {
    salary: 361, qualification: 'Junior', city: 'Gomel', date: '01/26/2018', tech: 'C#',
  },
  {
    salary: 562, qualification: 'Junior', city: 'Grodno', date: '04/13/2017', tech: 'Ruby',
  },
  {
    salary: 348, qualification: 'Junior', city: 'Vitebsk', date: '02/07/2018', tech: 'Java',
  },
  {
    salary: 307, qualification: 'Junior', city: 'Mogilev', date: '11/28/2017', tech: 'JS',
  },
  {
    salary: 594, qualification: 'Junior', city: 'Vitebsk', date: '01/09/2016', tech: 'R',
  },
  {
    salary: 435, qualification: 'Junior', city: 'Brest', date: '01/11/2018', tech: 'Python',
  },
  {
    salary: 426, qualification: 'Junior', city: 'Brest', date: '11/01/2017', tech: 'R',
  },
  {
    salary: 565, qualification: 'Junior', city: 'Minsk', date: '08/02/2016', tech: 'Ruby',
  },
  {
    salary: 371, qualification: 'Junior', city: 'Mogilev', date: '04/07/2018', tech: 'JS',
  },
  {
    salary: 494, qualification: 'Junior', city: 'Grodno', date: '12/10/2016', tech: 'Ruby',
  },
  {
    salary: 596, qualification: 'Junior', city: 'Gomel', date: '10/12/2017', tech: 'R',
  },
  {
    salary: 509, qualification: 'Junior', city: 'Minsk', date: '10/16/2017', tech: 'Ruby',
  },
  {
    salary: 382, qualification: 'Junior', city: 'Brest', date: '03/03/2016', tech: 'Java',
  },
  {
    salary: 301, qualification: 'Junior', city: 'Mogilev', date: '12/21/2017', tech: 'R',
  },
  {
    salary: 262, qualification: 'Junior', city: 'Gomel', date: '09/10/2017', tech: 'Ruby',
  },
  {
    salary: 542, qualification: 'Junior', city: 'Grodno', date: '05/31/2017', tech: 'C#',
  },
  {
    salary: 571, qualification: 'Junior', city: 'Mogilev', date: '02/21/2018', tech: 'Ruby',
  },
  {
    salary: 420, qualification: 'Junior', city: 'Brest', date: '04/21/2018', tech: 'R',
  },
  {
    salary: 437, qualification: 'Junior', city: 'Vitebsk', date: '01/17/2017', tech: 'JS',
  },
  {
    salary: 559, qualification: 'Junior', city: 'Brest', date: '06/26/2017', tech: 'C#',
  },
  {
    salary: 404, qualification: 'Junior', city: 'Grodno', date: '04/19/2017', tech: 'R',
  },
  {
    salary: 354, qualification: 'Junior', city: 'Gomel', date: '04/24/2016', tech: 'R',
  },
  {
    salary: 316, qualification: 'Junior', city: 'Brest', date: '11/12/2016', tech: 'R',
  },
  {
    salary: 357, qualification: 'Junior', city: 'Brest', date: '02/23/2016', tech: 'Ruby',
  },
  {
    salary: 567, qualification: 'Junior', city: 'Grodno', date: '01/07/2017', tech: 'JS',
  },
  {
    salary: 421, qualification: 'Junior', city: 'Brest', date: '07/14/2017', tech: 'C#',
  },
  {
    salary: 358, qualification: 'Junior', city: 'Gomel', date: '01/13/2017', tech: 'Java',
  },
  {
    salary: 276, qualification: 'Junior', city: 'Grodno', date: '06/10/2016', tech: 'Python',
  },
  {
    salary: 595, qualification: 'Junior', city: 'Vitebsk', date: '08/07/2016', tech: 'R',
  },
  {
    salary: 418, qualification: 'Junior', city: 'Vitebsk', date: '02/03/2018', tech: 'R',
  },
  {
    salary: 535, qualification: 'Junior', city: 'Mogilev', date: '02/10/2017', tech: 'Java',
  },
  {
    salary: 525, qualification: 'Junior', city: 'Gomel', date: '05/26/2016', tech: 'JS',
  },
  {
    salary: 595, qualification: 'Junior', city: 'Brest', date: '09/25/2017', tech: 'C#',
  },
  {
    salary: 258, qualification: 'Junior', city: 'Brest', date: '12/08/2016', tech: 'JS',
  },
  {
    salary: 276, qualification: 'Junior', city: 'Grodno', date: '03/31/2017', tech: 'C#',
  },
  {
    salary: 530, qualification: 'Junior', city: 'Gomel', date: '02/25/2016', tech: 'R',
  },
  {
    salary: 299, qualification: 'Junior', city: 'Grodno', date: '05/25/2017', tech: 'C#',
  },
  {
    salary: 416, qualification: 'Junior', city: 'Grodno', date: '10/10/2017', tech: 'C#',
  },
  {
    salary: 528, qualification: 'Junior', city: 'Gomel', date: '01/27/2017', tech: 'Python',
  },
  {
    salary: 291, qualification: 'Junior', city: 'Gomel', date: '12/20/2017', tech: 'R',
  },
  {
    salary: 399, qualification: 'Junior', city: 'Vitebsk', date: '05/05/2017', tech: 'Ruby',
  },
  {
    salary: 571, qualification: 'Junior', city: 'Brest', date: '04/20/2017', tech: 'Ruby',
  },
  {
    salary: 253, qualification: 'Junior', city: 'Brest', date: '10/11/2016', tech: 'R',
  },
  {
    salary: 562, qualification: 'Junior', city: 'Grodno', date: '04/06/2017', tech: 'Java',
  },
  {
    salary: 385, qualification: 'Junior', city: 'Vitebsk', date: '05/17/2017', tech: 'Ruby',
  },
  {
    salary: 455, qualification: 'Junior', city: 'Grodno', date: '03/07/2016', tech: 'C#',
  },
  {
    salary: 316, qualification: 'Junior', city: 'Brest', date: '06/19/2017', tech: 'JS',
  },
  {
    salary: 568, qualification: 'Junior', city: 'Gomel', date: '02/18/2018', tech: 'Ruby',
  },
  {
    salary: 515, qualification: 'Junior', city: 'Grodno', date: '10/11/2017', tech: 'C#',
  },
  {
    salary: 391, qualification: 'Junior', city: 'Grodno', date: '01/13/2017', tech: 'Python',
  },
  {
    salary: 465, qualification: 'Junior', city: 'Minsk', date: '06/18/2017', tech: 'R',
  },
  {
    salary: 359, qualification: 'Junior', city: 'Gomel', date: '11/05/2016', tech: 'C#',
  },
  {
    salary: 376, qualification: 'Junior', city: 'Minsk', date: '03/24/2018', tech: 'JS',
  },
  {
    salary: 363, qualification: 'Junior', city: 'Minsk', date: '05/31/2017', tech: 'JS',
  },
  {
    salary: 496, qualification: 'Junior', city: 'Mogilev', date: '10/01/2017', tech: 'JS',
  },
  {
    salary: 578, qualification: 'Junior', city: 'Vitebsk', date: '10/25/2017', tech: 'JS',
  },
  {
    salary: 442, qualification: 'Junior', city: 'Vitebsk', date: '05/31/2016', tech: 'Python',
  },
  {
    salary: 519, qualification: 'Junior', city: 'Gomel', date: '07/15/2016', tech: 'C#',
  },
  {
    salary: 565, qualification: 'Junior', city: 'Vitebsk', date: '08/28/2016', tech: 'Python',
  },
  {
    salary: 463, qualification: 'Junior', city: 'Gomel', date: '02/01/2017', tech: 'R',
  },
  {
    salary: 538, qualification: 'Junior', city: 'Brest', date: '06/08/2016', tech: 'R',
  },
  {
    salary: 346, qualification: 'Junior', city: 'Mogilev', date: '09/23/2016', tech: 'JS',
  },
  {
    salary: 256, qualification: 'Junior', city: 'Mogilev', date: '06/30/2016', tech: 'Ruby',
  },
  {
    salary: 545, qualification: 'Junior', city: 'Gomel', date: '01/23/2018', tech: 'C#',
  },
  {
    salary: 260, qualification: 'Junior', city: 'Gomel', date: '11/03/2016', tech: 'Java',
  },
  {
    salary: 388, qualification: 'Junior', city: 'Grodno', date: '05/30/2017', tech: 'Java',
  },
  {
    salary: 424, qualification: 'Junior', city: 'Mogilev', date: '06/24/2016', tech: 'R',
  },
  {
    salary: 512, qualification: 'Junior', city: 'Mogilev', date: '08/28/2017', tech: 'JS',
  },
  {
    salary: 572, qualification: 'Junior', city: 'Minsk', date: '01/29/2016', tech: 'Java',
  },
  {
    salary: 340, qualification: 'Junior', city: 'Vitebsk', date: '12/06/2017', tech: 'Java',
  },
  {
    salary: 290, qualification: 'Junior', city: 'Vitebsk', date: '10/04/2016', tech: 'C#',
  },
  {
    salary: 561, qualification: 'Junior', city: 'Grodno', date: '07/12/2017', tech: 'Java',
  },
  {
    salary: 373, qualification: 'Junior', city: 'Gomel', date: '12/13/2016', tech: 'R',
  },
  {
    salary: 355, qualification: 'Junior', city: 'Minsk', date: '09/01/2017', tech: 'JS',
  },
  {
    salary: 383, qualification: 'Junior', city: 'Grodno', date: '08/06/2016', tech: 'Ruby',
  },
  {
    salary: 271, qualification: 'Junior', city: 'Mogilev', date: '05/09/2016', tech: 'JS',
  },
  {
    salary: 470, qualification: 'Junior', city: 'Minsk', date: '09/19/2017', tech: 'C#',
  },
  {
    salary: 335, qualification: 'Junior', city: 'Vitebsk', date: '10/29/2017', tech: 'C#',
  },
  {
    salary: 554, qualification: 'Junior', city: 'Mogilev', date: '01/23/2016', tech: 'C#',
  },
  {
    salary: 576, qualification: 'Junior', city: 'Gomel', date: '01/17/2016', tech: 'Ruby',
  },
  {
    salary: 568, qualification: 'Junior', city: 'Brest', date: '04/19/2018', tech: 'R',
  },
  {
    salary: 464, qualification: 'Junior', city: 'Grodno', date: '03/30/2017', tech: 'JS',
  },
  {
    salary: 302, qualification: 'Junior', city: 'Brest', date: '06/16/2017', tech: 'Ruby',
  },
  {
    salary: 285, qualification: 'Junior', city: 'Minsk', date: '03/29/2017', tech: 'Java',
  },
  {
    salary: 359, qualification: 'Junior', city: 'Gomel', date: '06/23/2017', tech: 'R',
  },
  {
    salary: 387, qualification: 'Junior', city: 'Mogilev', date: '08/30/2016', tech: 'Ruby',
  },
  {
    salary: 376, qualification: 'Junior', city: 'Mogilev', date: '09/18/2016', tech: 'Python',
  },
  {
    salary: 587, qualification: 'Junior', city: 'Gomel', date: '09/23/2017', tech: 'R',
  },
  {
    salary: 598, qualification: 'Junior', city: 'Minsk', date: '04/02/2017', tech: 'Ruby',
  },
  {
    salary: 394, qualification: 'Junior', city: 'Vitebsk', date: '05/05/2016', tech: 'Java',
  },
  {
    salary: 534, qualification: 'Junior', city: 'Vitebsk', date: '05/20/2017', tech: 'Python',
  },
  {
    salary: 530, qualification: 'Junior', city: 'Mogilev', date: '04/11/2018', tech: 'Java',
  },
  {
    salary: 436, qualification: 'Junior', city: 'Gomel', date: '08/24/2016', tech: 'JS',
  },
  {
    salary: 397, qualification: 'Junior', city: 'Gomel', date: '03/05/2016', tech: 'C#',
  },
  {
    salary: 483, qualification: 'Junior', city: 'Vitebsk', date: '01/22/2016', tech: 'Ruby',
  },
  {
    salary: 273, qualification: 'Junior', city: 'Minsk', date: '01/13/2017', tech: 'C#',
  },
  {
    salary: 464, qualification: 'Junior', city: 'Gomel', date: '06/21/2016', tech: 'Ruby',
  },
  {
    salary: 289, qualification: 'Junior', city: 'Gomel', date: '07/09/2017', tech: 'Ruby',
  },
  {
    salary: 416, qualification: 'Junior', city: 'Vitebsk', date: '12/29/2016', tech: 'JS',
  },
  {
    salary: 291, qualification: 'Junior', city: 'Mogilev', date: '10/18/2016', tech: 'JS',
  },
  {
    salary: 268, qualification: 'Junior', city: 'Vitebsk', date: '03/12/2017', tech: 'Python',
  },
  {
    salary: 378, qualification: 'Junior', city: 'Minsk', date: '11/27/2017', tech: 'Ruby',
  },
  {
    salary: 392, qualification: 'Junior', city: 'Minsk', date: '03/19/2016', tech: 'Ruby',
  },
  {
    salary: 390, qualification: 'Junior', city: 'Mogilev', date: '05/18/2016', tech: 'Python',
  },
  {
    salary: 368, qualification: 'Junior', city: 'Brest', date: '01/17/2016', tech: 'JS',
  },
  {
    salary: 578, qualification: 'Junior', city: 'Vitebsk', date: '01/02/2018', tech: 'Ruby',
  },
  {
    salary: 285, qualification: 'Junior', city: 'Mogilev', date: '05/20/2017', tech: 'R',
  },
  {
    salary: 407, qualification: 'Junior', city: 'Vitebsk', date: '01/23/2018', tech: 'Python',
  },
  {
    salary: 562, qualification: 'Junior', city: 'Brest', date: '09/10/2017', tech: 'Python',
  },
  {
    salary: 459, qualification: 'Junior', city: 'Vitebsk', date: '12/10/2016', tech: 'Java',
  },
  {
    salary: 577, qualification: 'Junior', city: 'Mogilev', date: '03/25/2017', tech: 'JS',
  },
  {
    salary: 488, qualification: 'Junior', city: 'Grodno', date: '02/26/2017', tech: 'C#',
  },
  {
    salary: 401, qualification: 'Junior', city: 'Vitebsk', date: '08/13/2017', tech: 'Java',
  },
  {
    salary: 422, qualification: 'Junior', city: 'Minsk', date: '11/29/2017', tech: 'Java',
  },
  {
    salary: 423, qualification: 'Junior', city: 'Vitebsk', date: '04/07/2017', tech: 'Python',
  },
  {
    salary: 324, qualification: 'Junior', city: 'Minsk', date: '12/01/2016', tech: 'Python',
  },
  {
    salary: 277, qualification: 'Junior', city: 'Vitebsk', date: '03/25/2017', tech: 'Java',
  },
  {
    salary: 471, qualification: 'Junior', city: 'Brest', date: '04/17/2017', tech: 'Java',
  },
  {
    salary: 297, qualification: 'Junior', city: 'Vitebsk', date: '09/07/2017', tech: 'C#',
  },
  {
    salary: 472, qualification: 'Junior', city: 'Mogilev', date: '03/11/2017', tech: 'Ruby',
  },
  {
    salary: 373, qualification: 'Junior', city: 'Vitebsk', date: '02/23/2016', tech: 'Java',
  },
  {
    salary: 597, qualification: 'Junior', city: 'Gomel', date: '02/01/2018', tech: 'R',
  },
  {
    salary: 334, qualification: 'Junior', city: 'Vitebsk', date: '11/27/2016', tech: 'Ruby',
  },
  {
    salary: 479, qualification: 'Junior', city: 'Minsk', date: '03/26/2018', tech: 'R',
  },
  {
    salary: 543, qualification: 'Junior', city: 'Mogilev', date: '03/18/2018', tech: 'R',
  },
  {
    salary: 363, qualification: 'Junior', city: 'Gomel', date: '06/07/2016', tech: 'R',
  },
  {
    salary: 268, qualification: 'Junior', city: 'Grodno', date: '04/15/2017', tech: 'Python',
  },
  {
    salary: 559, qualification: 'Junior', city: 'Vitebsk', date: '03/08/2017', tech: 'Python',
  },
  {
    salary: 426, qualification: 'Junior', city: 'Gomel', date: '12/09/2016', tech: 'R',
  },
  {
    salary: 545, qualification: 'Junior', city: 'Grodno', date: '11/10/2016', tech: 'C#',
  },
  {
    salary: 250, qualification: 'Junior', city: 'Grodno', date: '04/04/2018', tech: 'Python',
  },
  {
    salary: 596, qualification: 'Junior', city: 'Grodno', date: '10/30/2017', tech: 'R',
  },
  {
    salary: 594, qualification: 'Junior', city: 'Vitebsk', date: '03/12/2017', tech: 'Python',
  },
  {
    salary: 441, qualification: 'Junior', city: 'Vitebsk', date: '09/22/2017', tech: 'Ruby',
  },
  {
    salary: 529, qualification: 'Junior', city: 'Grodno', date: '01/30/2016', tech: 'Java',
  },
  {
    salary: 311, qualification: 'Junior', city: 'Minsk', date: '03/30/2017', tech: 'Ruby',
  },
  {
    salary: 595, qualification: 'Junior', city: 'Brest', date: '03/12/2018', tech: 'R',
  },
  {
    salary: 595, qualification: 'Junior', city: 'Mogilev', date: '05/20/2017', tech: 'JS',
  },
  {
    salary: 434, qualification: 'Junior', city: 'Brest', date: '08/12/2016', tech: 'Ruby',
  },
  {
    salary: 425, qualification: 'Junior', city: 'Gomel', date: '07/28/2016', tech: 'JS',
  },
  {
    salary: 473, qualification: 'Junior', city: 'Grodno', date: '09/13/2016', tech: 'Java',
  },
  {
    salary: 350, qualification: 'Junior', city: 'Vitebsk', date: '10/04/2017', tech: 'Ruby',
  },
  {
    salary: 579, qualification: 'Junior', city: 'Gomel', date: '06/11/2016', tech: 'C#',
  },
  {
    salary: 600, qualification: 'Junior', city: 'Vitebsk', date: '02/11/2017', tech: 'Ruby',
  },
  {
    salary: 599, qualification: 'Junior', city: 'Vitebsk', date: '03/10/2016', tech: 'R',
  },
  {
    salary: 325, qualification: 'Junior', city: 'Vitebsk', date: '04/07/2017', tech: 'R',
  },
  {
    salary: 301, qualification: 'Junior', city: 'Minsk', date: '03/14/2016', tech: 'R',
  },
  {
    salary: 581, qualification: 'Junior', city: 'Brest', date: '06/13/2017', tech: 'R',
  },
  {
    salary: 457, qualification: 'Junior', city: 'Grodno', date: '07/06/2016', tech: 'Java',
  },
  {
    salary: 590, qualification: 'Junior', city: 'Vitebsk', date: '02/16/2018', tech: 'C#',
  },
  {
    salary: 383, qualification: 'Junior', city: 'Minsk', date: '09/04/2016', tech: 'Java',
  },
  {
    salary: 370, qualification: 'Junior', city: 'Minsk', date: '04/26/2018', tech: 'Python',
  },
  {
    salary: 476, qualification: 'Junior', city: 'Brest', date: '07/14/2016', tech: 'C#',
  },
  {
    salary: 489, qualification: 'Junior', city: 'Brest', date: '02/28/2016', tech: 'R',
  },
  {
    salary: 548, qualification: 'Junior', city: 'Mogilev', date: '09/09/2016', tech: 'R',
  },
  {
    salary: 567, qualification: 'Junior', city: 'Minsk', date: '08/05/2017', tech: 'JS',
  },
  {
    salary: 252, qualification: 'Junior', city: 'Gomel', date: '01/07/2018', tech: 'Python',
  },
  {
    salary: 517, qualification: 'Junior', city: 'Gomel', date: '07/05/2017', tech: 'C#',
  },
  {
    salary: 297, qualification: 'Junior', city: 'Minsk', date: '03/11/2016', tech: 'R',
  },
  {
    salary: 598, qualification: 'Junior', city: 'Mogilev', date: '09/19/2017', tech: 'C#',
  },
  {
    salary: 446, qualification: 'Junior', city: 'Minsk', date: '09/24/2017', tech: 'C#',
  },
  {
    salary: 581, qualification: 'Junior', city: 'Minsk', date: '08/27/2017', tech: 'Ruby',
  },
  {
    salary: 481, qualification: 'Junior', city: 'Gomel', date: '01/03/2018', tech: 'C#',
  },
  {
    salary: 581, qualification: 'Junior', city: 'Mogilev', date: '11/27/2017', tech: 'Java',
  },
  {
    salary: 263, qualification: 'Junior', city: 'Brest', date: '01/14/2017', tech: 'Python',
  },
  {
    salary: 541, qualification: 'Junior', city: 'Brest', date: '10/22/2017', tech: 'Python',
  },
  {
    salary: 453, qualification: 'Junior', city: 'Grodno', date: '03/04/2018', tech: 'R',
  },
  {
    salary: 308, qualification: 'Junior', city: 'Mogilev', date: '09/08/2016', tech: 'C#',
  },
  {
    salary: 312, qualification: 'Junior', city: 'Brest', date: '06/19/2016', tech: 'C#',
  },
  {
    salary: 516, qualification: 'Junior', city: 'Minsk', date: '06/11/2017', tech: 'R',
  },
  {
    salary: 481, qualification: 'Junior', city: 'Vitebsk', date: '03/25/2018', tech: 'R',
  },
  {
    salary: 270, qualification: 'Junior', city: 'Mogilev', date: '09/23/2017', tech: 'Python',
  },
  {
    salary: 532, qualification: 'Junior', city: 'Mogilev', date: '04/17/2018', tech: 'JS',
  },
  {
    salary: 524, qualification: 'Junior', city: 'Minsk', date: '02/08/2018', tech: 'JS',
  },
  {
    salary: 579, qualification: 'Junior', city: 'Minsk', date: '09/22/2017', tech: 'R',
  },
  {
    salary: 281, qualification: 'Junior', city: 'Minsk', date: '06/21/2016', tech: 'Java',
  },
  {
    salary: 398, qualification: 'Junior', city: 'Brest', date: '05/13/2017', tech: 'Python',
  },
  {
    salary: 392, qualification: 'Junior', city: 'Grodno', date: '09/18/2017', tech: 'Ruby',
  },
  {
    salary: 307, qualification: 'Junior', city: 'Mogilev', date: '03/22/2017', tech: 'Ruby',
  },
  {
    salary: 556, qualification: 'Junior', city: 'Mogilev', date: '02/28/2017', tech: 'Ruby',
  },
  {
    salary: 259, qualification: 'Junior', city: 'Grodno', date: '04/23/2018', tech: 'Python',
  },
  {
    salary: 573, qualification: 'Junior', city: 'Mogilev', date: '09/22/2017', tech: 'R',
  },
  {
    salary: 571, qualification: 'Junior', city: 'Mogilev', date: '12/24/2016', tech: 'Python',
  },
  {
    salary: 258, qualification: 'Junior', city: 'Brest', date: '11/12/2016', tech: 'Python',
  },
  {
    salary: 331, qualification: 'Junior', city: 'Gomel', date: '05/31/2017', tech: 'Python',
  },
  {
    salary: 280, qualification: 'Junior', city: 'Minsk', date: '02/02/2018', tech: 'C#',
  },
  {
    salary: 578, qualification: 'Junior', city: 'Mogilev', date: '12/14/2016', tech: 'JS',
  },
  {
    salary: 269, qualification: 'Junior', city: 'Minsk', date: '03/29/2018', tech: 'R',
  },
  {
    salary: 415, qualification: 'Junior', city: 'Brest', date: '11/15/2017', tech: 'Java',
  },
  {
    salary: 443, qualification: 'Junior', city: 'Mogilev', date: '11/04/2017', tech: 'Ruby',
  },
  {
    salary: 355, qualification: 'Junior', city: 'Mogilev', date: '10/23/2016', tech: 'Java',
  },
  {
    salary: 457, qualification: 'Junior', city: 'Mogilev', date: '11/14/2016', tech: 'Ruby',
  },
  {
    salary: 341, qualification: 'Junior', city: 'Brest', date: '09/29/2017', tech: 'R',
  },
  {
    salary: 444, qualification: 'Junior', city: 'Gomel', date: '03/20/2017', tech: 'Python',
  },
  {
    salary: 314, qualification: 'Junior', city: 'Minsk', date: '09/15/2017', tech: 'JS',
  },
  {
    salary: 392, qualification: 'Junior', city: 'Gomel', date: '02/18/2018', tech: 'Ruby',
  },
  {
    salary: 308, qualification: 'Junior', city: 'Vitebsk', date: '12/03/2017', tech: 'JS',
  },
  {
    salary: 508, qualification: 'Junior', city: 'Vitebsk', date: '06/16/2016', tech: 'C#',
  },
  {
    salary: 466, qualification: 'Junior', city: 'Vitebsk', date: '02/14/2018', tech: 'Ruby',
  },
  {
    salary: 288, qualification: 'Junior', city: 'Grodno', date: '07/06/2017', tech: 'C#',
  },
  {
    salary: 483, qualification: 'Junior', city: 'Mogilev', date: '08/27/2017', tech: 'Python',
  },
  {
    salary: 512, qualification: 'Junior', city: 'Gomel', date: '07/12/2016', tech: 'Java',
  },
  {
    salary: 595, qualification: 'Junior', city: 'Gomel', date: '04/15/2017', tech: 'C#',
  },
  {
    salary: 586, qualification: 'Junior', city: 'Brest', date: '06/15/2017', tech: 'C#',
  },
  {
    salary: 523, qualification: 'Junior', city: 'Vitebsk', date: '05/21/2016', tech: 'C#',
  },
  {
    salary: 484, qualification: 'Junior', city: 'Gomel', date: '07/25/2017', tech: 'Python',
  },
  {
    salary: 469, qualification: 'Junior', city: 'Mogilev', date: '07/26/2016', tech: 'JS',
  },
  {
    salary: 575, qualification: 'Junior', city: 'Gomel', date: '12/10/2017', tech: 'Ruby',
  },
  {
    salary: 334, qualification: 'Junior', city: 'Brest', date: '06/03/2016', tech: 'JS',
  },
  {
    salary: 566, qualification: 'Junior', city: 'Gomel', date: '04/19/2016', tech: 'Python',
  },
  {
    salary: 553, qualification: 'Junior', city: 'Minsk', date: '03/10/2017', tech: 'Python',
  },
  {
    salary: 410, qualification: 'Junior', city: 'Minsk', date: '08/16/2016', tech: 'C#',
  },
  {
    salary: 321, qualification: 'Junior', city: 'Vitebsk', date: '04/07/2016', tech: 'R',
  },
  {
    salary: 261, qualification: 'Junior', city: 'Mogilev', date: '01/12/2016', tech: 'Ruby',
  },
  {
    salary: 565, qualification: 'Junior', city: 'Mogilev', date: '05/12/2016', tech: 'C#',
  },
  {
    salary: 271, qualification: 'Junior', city: 'Minsk', date: '11/20/2017', tech: 'JS',
  },
  {
    salary: 438, qualification: 'Junior', city: 'Gomel', date: '01/18/2017', tech: 'Ruby',
  },
  {
    salary: 509, qualification: 'Junior', city: 'Mogilev', date: '11/11/2016', tech: 'Ruby',
  },
  {
    salary: 282, qualification: 'Junior', city: 'Mogilev', date: '04/10/2016', tech: 'C#',
  },
  {
    salary: 429, qualification: 'Junior', city: 'Mogilev', date: '12/04/2016', tech: 'Python',
  },
  {
    salary: 323, qualification: 'Junior', city: 'Grodno', date: '04/04/2018', tech: 'C#',
  },
  {
    salary: 381, qualification: 'Junior', city: 'Grodno', date: '01/25/2016', tech: 'JS',
  },
  {
    salary: 521, qualification: 'Junior', city: 'Brest', date: '01/15/2016', tech: 'Ruby',
  },
  {
    salary: 556, qualification: 'Junior', city: 'Minsk', date: '02/15/2018', tech: 'C#',
  },
  {
    salary: 301, qualification: 'Junior', city: 'Mogilev', date: '06/13/2017', tech: 'Java',
  },
  {
    salary: 568, qualification: 'Junior', city: 'Brest', date: '12/14/2016', tech: 'C#',
  },
  {
    salary: 555, qualification: 'Junior', city: 'Gomel', date: '06/20/2016', tech: 'Python',
  },
  {
    salary: 336, qualification: 'Junior', city: 'Minsk', date: '12/03/2017', tech: 'Python',
  },
  {
    salary: 471, qualification: 'Junior', city: 'Minsk', date: '04/20/2017', tech: 'C#',
  },
  {
    salary: 514, qualification: 'Junior', city: 'Vitebsk', date: '02/12/2017', tech: 'Java',
  },
  {
    salary: 429, qualification: 'Junior', city: 'Gomel', date: '04/23/2018', tech: 'Python',
  },
  {
    salary: 475, qualification: 'Junior', city: 'Gomel', date: '07/03/2016', tech: 'Ruby',
  },
  {
    salary: 401, qualification: 'Junior', city: 'Vitebsk', date: '12/15/2016', tech: 'Python',
  },
  {
    salary: 543, qualification: 'Junior', city: 'Brest', date: '02/16/2018', tech: 'Python',
  },
  {
    salary: 396, qualification: 'Junior', city: 'Brest', date: '01/13/2017', tech: 'Python',
  },
  {
    salary: 507, qualification: 'Junior', city: 'Brest', date: '02/08/2016', tech: 'Python',
  },
  {
    salary: 299, qualification: 'Junior', city: 'Gomel', date: '03/19/2017', tech: 'JS',
  },
  {
    salary: 460, qualification: 'Junior', city: 'Grodno', date: '02/16/2018', tech: 'Java',
  },
  {
    salary: 424, qualification: 'Junior', city: 'Vitebsk', date: '07/23/2017', tech: 'Ruby',
  },
  {
    salary: 442, qualification: 'Junior', city: 'Minsk', date: '03/20/2017', tech: 'C#',
  },
  {
    salary: 299, qualification: 'Junior', city: 'Vitebsk', date: '04/30/2017', tech: 'JS',
  },
  {
    salary: 467, qualification: 'Junior', city: 'Mogilev', date: '12/14/2017', tech: 'Python',
  },
  {
    salary: 441, qualification: 'Junior', city: 'Mogilev', date: '04/13/2016', tech: 'Java',
  },
  {
    salary: 468, qualification: 'Junior', city: 'Grodno', date: '11/03/2017', tech: 'Java',
  },
  {
    salary: 405, qualification: 'Junior', city: 'Brest', date: '04/17/2016', tech: 'Ruby',
  },
  {
    salary: 567, qualification: 'Junior', city: 'Brest', date: '11/12/2016', tech: 'C#',
  },
  {
    salary: 535, qualification: 'Junior', city: 'Mogilev', date: '01/20/2016', tech: 'Python',
  },
  {
    salary: 455, qualification: 'Junior', city: 'Mogilev', date: '06/16/2017', tech: 'R',
  },
  {
    salary: 574, qualification: 'Junior', city: 'Grodno', date: '08/14/2016', tech: 'Python',
  },
  {
    salary: 295, qualification: 'Junior', city: 'Minsk', date: '09/26/2017', tech: 'Python',
  },
  {
    salary: 404, qualification: 'Junior', city: 'Mogilev', date: '02/28/2016', tech: 'C#',
  },
  {
    salary: 544, qualification: 'Junior', city: 'Mogilev', date: '09/26/2016', tech: 'R',
  },
  {
    salary: 397, qualification: 'Junior', city: 'Mogilev', date: '10/23/2016', tech: 'Ruby',
  },
  {
    salary: 531, qualification: 'Junior', city: 'Brest', date: '01/26/2017', tech: 'Ruby',
  },
  {
    salary: 288, qualification: 'Junior', city: 'Gomel', date: '09/01/2017', tech: 'C#',
  },
  {
    salary: 424, qualification: 'Junior', city: 'Minsk', date: '07/21/2017', tech: 'JS',
  },
  {
    salary: 503, qualification: 'Junior', city: 'Brest', date: '10/15/2016', tech: 'C#',
  },
  {
    salary: 371, qualification: 'Junior', city: 'Vitebsk', date: '03/04/2016', tech: 'JS',
  },
  {
    salary: 421, qualification: 'Junior', city: 'Grodno', date: '10/15/2017', tech: 'JS',
  },
  {
    salary: 289, qualification: 'Junior', city: 'Minsk', date: '09/02/2017', tech: 'R',
  },
  {
    salary: 259, qualification: 'Junior', city: 'Minsk', date: '07/03/2016', tech: 'Python',
  },
  {
    salary: 318, qualification: 'Junior', city: 'Minsk', date: '05/01/2016', tech: 'Python',
  },
  {
    salary: 2176, qualification: 'Senior', city: 'Vitebsk', date: '09/15/2017', tech: 'Java',
  },
  {
    salary: 2422, qualification: 'Senior', city: 'Minsk', date: '01/16/2017', tech: 'Ruby',
  },
  {
    salary: 2948, qualification: 'Senior', city: 'Vitebsk', date: '11/25/2017', tech: 'Java',
  },
  {
    salary: 1828, qualification: 'Senior', city: 'Mogilev', date: '12/22/2016', tech: 'Java',
  },
  {
    salary: 2303, qualification: 'Senior', city: 'Gomel', date: '12/09/2017', tech: 'Java',
  },
  {
    salary: 2164, qualification: 'Senior', city: 'Grodno', date: '03/12/2018', tech: 'C#',
  },
  {
    salary: 2148, qualification: 'Senior', city: 'Grodno', date: '02/03/2017', tech: 'C#',
  },
  {
    salary: 1982, qualification: 'Senior', city: 'Gomel', date: '03/09/2018', tech: 'Python',
  },
  {
    salary: 2692, qualification: 'Senior', city: 'Vitebsk', date: '02/01/2018', tech: 'C#',
  },
  {
    salary: 2903, qualification: 'Senior', city: 'Gomel', date: '03/08/2018', tech: 'C#',
  },
  {
    salary: 2953, qualification: 'Senior', city: 'Vitebsk', date: '05/24/2016', tech: 'Java',
  },
  {
    salary: 2051, qualification: 'Senior', city: 'Gomel', date: '06/17/2016', tech: 'Python',
  },
  {
    salary: 2171, qualification: 'Senior', city: 'Mogilev', date: '02/13/2018', tech: 'R',
  },
  {
    salary: 2299, qualification: 'Senior', city: 'Mogilev', date: '10/22/2016', tech: 'Python',
  },
  {
    salary: 1975, qualification: 'Senior', city: 'Brest', date: '12/19/2016', tech: 'Python',
  },
  {
    salary: 2276, qualification: 'Senior', city: 'Brest', date: '07/08/2017', tech: 'JS',
  },
  {
    salary: 1730, qualification: 'Senior', city: 'Mogilev', date: '07/06/2016', tech: 'Python',
  },
  {
    salary: 2139, qualification: 'Senior', city: 'Minsk', date: '04/08/2016', tech: 'C#',
  },
  {
    salary: 2121, qualification: 'Senior', city: 'Mogilev', date: '03/31/2016', tech: 'Ruby',
  },
  {
    salary: 2280, qualification: 'Senior', city: 'Grodno', date: '01/05/2018', tech: 'Python',
  },
  {
    salary: 2910, qualification: 'Senior', city: 'Mogilev', date: '04/17/2016', tech: 'Ruby',
  },
  {
    salary: 1911, qualification: 'Senior', city: 'Gomel', date: '02/19/2016', tech: 'Python',
  },
  {
    salary: 2576, qualification: 'Senior', city: 'Grodno', date: '05/07/2016', tech: 'C#',
  },
  {
    salary: 1952, qualification: 'Senior', city: 'Grodno', date: '02/27/2016', tech: 'JS',
  },
  {
    salary: 2059, qualification: 'Senior', city: 'Minsk', date: '03/13/2016', tech: 'JS',
  },
  {
    salary: 2519, qualification: 'Senior', city: 'Vitebsk', date: '06/02/2016', tech: 'C#',
  },
  {
    salary: 2842, qualification: 'Senior', city: 'Grodno', date: '04/12/2018', tech: 'R',
  },
  {
    salary: 1995, qualification: 'Senior', city: 'Grodno', date: '03/27/2016', tech: 'C#',
  },
  {
    salary: 2394, qualification: 'Senior', city: 'Gomel', date: '01/24/2017', tech: 'R',
  },
  {
    salary: 1714, qualification: 'Senior', city: 'Grodno', date: '08/17/2016', tech: 'Java',
  },
  {
    salary: 1935, qualification: 'Senior', city: 'Minsk', date: '10/10/2017', tech: 'Java',
  },
  {
    salary: 2795, qualification: 'Senior', city: 'Minsk', date: '01/24/2016', tech: 'Python',
  },
  {
    salary: 2997, qualification: 'Senior', city: 'Mogilev', date: '09/29/2017', tech: 'JS',
  },
  {
    salary: 2004, qualification: 'Senior', city: 'Brest', date: '07/04/2016', tech: 'R',
  },
  {
    salary: 2631, qualification: 'Senior', city: 'Gomel', date: '06/02/2017', tech: 'Python',
  },
  {
    salary: 2719, qualification: 'Senior', city: 'Minsk', date: '12/12/2016', tech: 'R',
  },
  {
    salary: 2806, qualification: 'Senior', city: 'Gomel', date: '10/14/2016', tech: 'C#',
  },
  {
    salary: 2114, qualification: 'Senior', city: 'Grodno', date: '06/30/2016', tech: 'JS',
  },
  {
    salary: 2858, qualification: 'Senior', city: 'Brest', date: '03/13/2018', tech: 'JS',
  },
  {
    salary: 1890, qualification: 'Senior', city: 'Vitebsk', date: '11/29/2017', tech: 'Java',
  },
  {
    salary: 2022, qualification: 'Senior', city: 'Minsk', date: '11/03/2017', tech: 'C#',
  },
  {
    salary: 1663, qualification: 'Senior', city: 'Brest', date: '07/17/2016', tech: 'R',
  },
  {
    salary: 2001, qualification: 'Senior', city: 'Minsk', date: '05/23/2016', tech: 'R',
  },
  {
    salary: 1841, qualification: 'Senior', city: 'Minsk', date: '09/10/2016', tech: 'R',
  },
  {
    salary: 1878, qualification: 'Senior', city: 'Minsk', date: '12/12/2017', tech: 'Python',
  },
  {
    salary: 1797, qualification: 'Senior', city: 'Brest', date: '02/14/2016', tech: 'Java',
  },
  {
    salary: 2789, qualification: 'Senior', city: 'Brest', date: '06/17/2017', tech: 'Python',
  },
  {
    salary: 2341, qualification: 'Senior', city: 'Minsk', date: '10/08/2017', tech: 'Python',
  },
  {
    salary: 2750, qualification: 'Senior', city: 'Brest', date: '01/02/2018', tech: 'Ruby',
  },
  {
    salary: 2979, qualification: 'Senior', city: 'Gomel', date: '02/02/2018', tech: 'R',
  },
  {
    salary: 2747, qualification: 'Senior', city: 'Gomel', date: '10/14/2017', tech: 'JS',
  },
  {
    salary: 1923, qualification: 'Senior', city: 'Brest', date: '12/19/2017', tech: 'Java',
  },
  {
    salary: 2569, qualification: 'Senior', city: 'Vitebsk', date: '03/11/2017', tech: 'C#',
  },
  {
    salary: 1913, qualification: 'Senior', city: 'Minsk', date: '10/29/2017', tech: 'JS',
  },
  {
    salary: 2030, qualification: 'Senior', city: 'Vitebsk', date: '06/26/2016', tech: 'Python',
  },
  {
    salary: 2747, qualification: 'Senior', city: 'Vitebsk', date: '03/29/2016', tech: 'R',
  },
  {
    salary: 1945, qualification: 'Senior', city: 'Brest', date: '04/22/2017', tech: 'R',
  },
  {
    salary: 2267, qualification: 'Senior', city: 'Brest', date: '09/15/2017', tech: 'Java',
  },
  {
    salary: 1762, qualification: 'Senior', city: 'Mogilev', date: '10/30/2017', tech: 'C#',
  },
  {
    salary: 2393, qualification: 'Senior', city: 'Grodno', date: '06/13/2016', tech: 'Python',
  },
  {
    salary: 1872, qualification: 'Senior', city: 'Brest', date: '06/24/2017', tech: 'C#',
  },
  {
    salary: 1820, qualification: 'Senior', city: 'Mogilev', date: '12/12/2017', tech: 'Ruby',
  },
  {
    salary: 2094, qualification: 'Senior', city: 'Minsk', date: '06/20/2017', tech: 'Python',
  },
  {
    salary: 2167, qualification: 'Senior', city: 'Vitebsk', date: '02/25/2016', tech: 'Java',
  },
  {
    salary: 2811, qualification: 'Senior', city: 'Mogilev', date: '12/12/2016', tech: 'Java',
  },
  {
    salary: 2548, qualification: 'Senior', city: 'Grodno', date: '10/03/2017', tech: 'Ruby',
  },
  {
    salary: 2275, qualification: 'Senior', city: 'Vitebsk', date: '01/16/2018', tech: 'Java',
  },
  {
    salary: 1933, qualification: 'Senior', city: 'Mogilev', date: '10/27/2017', tech: 'Ruby',
  },
  {
    salary: 1735, qualification: 'Senior', city: 'Grodno', date: '07/26/2017', tech: 'C#',
  },
  {
    salary: 2186, qualification: 'Senior', city: 'Vitebsk', date: '07/14/2017', tech: 'Python',
  },
  {
    salary: 1743, qualification: 'Senior', city: 'Grodno', date: '06/07/2017', tech: 'Ruby',
  },
  {
    salary: 2186, qualification: 'Senior', city: 'Mogilev', date: '07/29/2016', tech: 'C#',
  },
  {
    salary: 2991, qualification: 'Senior', city: 'Grodno', date: '11/04/2017', tech: 'Java',
  },
  {
    salary: 1931, qualification: 'Senior', city: 'Brest', date: '08/07/2017', tech: 'Java',
  },
  {
    salary: 1733, qualification: 'Senior', city: 'Brest', date: '03/31/2016', tech: 'Java',
  },
  {
    salary: 2800, qualification: 'Senior', city: 'Grodno', date: '03/15/2017', tech: 'Ruby',
  },
  {
    salary: 1782, qualification: 'Senior', city: 'Grodno', date: '01/12/2017', tech: 'Python',
  },
  {
    salary: 2844, qualification: 'Senior', city: 'Gomel', date: '05/17/2016', tech: 'Python',
  },
  {
    salary: 2572, qualification: 'Senior', city: 'Gomel', date: '02/21/2016', tech: 'Java',
  },
  {
    salary: 2388, qualification: 'Senior', city: 'Brest', date: '12/16/2016', tech: 'C#',
  },
  {
    salary: 2310, qualification: 'Senior', city: 'Brest', date: '05/23/2017', tech: 'JS',
  },
  {
    salary: 2799, qualification: 'Senior', city: 'Gomel', date: '02/20/2017', tech: 'C#',
  },
  {
    salary: 2086, qualification: 'Senior', city: 'Gomel', date: '02/17/2018', tech: 'C#',
  },
  {
    salary: 2313, qualification: 'Senior', city: 'Gomel', date: '09/10/2016', tech: 'R',
  },
  {
    salary: 1751, qualification: 'Senior', city: 'Mogilev', date: '02/15/2018', tech: 'R',
  },
  {
    salary: 2158, qualification: 'Senior', city: 'Vitebsk', date: '02/15/2016', tech: 'C#',
  },
  {
    salary: 2668, qualification: 'Senior', city: 'Vitebsk', date: '01/07/2018', tech: 'JS',
  },
  {
    salary: 2645, qualification: 'Senior', city: 'Grodno', date: '02/17/2016', tech: 'Java',
  },
  {
    salary: 2676, qualification: 'Senior', city: 'Vitebsk', date: '04/11/2017', tech: 'JS',
  },
  {
    salary: 2613, qualification: 'Senior', city: 'Grodno', date: '12/16/2016', tech: 'C#',
  },
  {
    salary: 1950, qualification: 'Senior', city: 'Vitebsk', date: '02/12/2018', tech: 'JS',
  },
  {
    salary: 2681, qualification: 'Senior', city: 'Minsk', date: '04/23/2017', tech: 'C#',
  },
  {
    salary: 2790, qualification: 'Senior', city: 'Grodno', date: '04/09/2018', tech: 'JS',
  },
  {
    salary: 1797, qualification: 'Senior', city: 'Mogilev', date: '12/23/2016', tech: 'R',
  },
  {
    salary: 2152, qualification: 'Senior', city: 'Minsk', date: '01/13/2018', tech: 'Ruby',
  },
  {
    salary: 2983, qualification: 'Senior', city: 'Vitebsk', date: '02/20/2016', tech: 'R',
  },
  {
    salary: 2210, qualification: 'Senior', city: 'Grodno', date: '03/30/2018', tech: 'Python',
  },
  {
    salary: 2482, qualification: 'Senior', city: 'Minsk', date: '02/21/2018', tech: 'Ruby',
  },
  {
    salary: 2264, qualification: 'Senior', city: 'Grodno', date: '11/11/2016', tech: 'Ruby',
  },
  {
    salary: 1675, qualification: 'Senior', city: 'Minsk', date: '09/12/2016', tech: 'Ruby',
  },
  {
    salary: 2275, qualification: 'Senior', city: 'Grodno', date: '09/09/2017', tech: 'Python',
  },
  {
    salary: 1789, qualification: 'Senior', city: 'Mogilev', date: '10/09/2016', tech: 'C#',
  },
  {
    salary: 2952, qualification: 'Senior', city: 'Brest', date: '06/30/2016', tech: 'JS',
  },
  {
    salary: 2826, qualification: 'Senior', city: 'Brest', date: '01/10/2017', tech: 'C#',
  },
  {
    salary: 1702, qualification: 'Senior', city: 'Brest', date: '07/10/2017', tech: 'Java',
  },
  {
    salary: 2513, qualification: 'Senior', city: 'Brest', date: '02/13/2016', tech: 'Java',
  },
  {
    salary: 2964, qualification: 'Senior', city: 'Grodno', date: '03/18/2016', tech: 'R',
  },
  {
    salary: 1961, qualification: 'Senior', city: 'Vitebsk', date: '01/28/2017', tech: 'JS',
  },
  {
    salary: 2070, qualification: 'Senior', city: 'Grodno', date: '04/23/2017', tech: 'C#',
  },
  {
    salary: 2893, qualification: 'Senior', city: 'Brest', date: '03/01/2018', tech: 'C#',
  },
  {
    salary: 2334, qualification: 'Senior', city: 'Mogilev', date: '12/25/2017', tech: 'R',
  },
  {
    salary: 1718, qualification: 'Senior', city: 'Gomel', date: '10/20/2016', tech: 'C#',
  },
  {
    salary: 2141, qualification: 'Senior', city: 'Mogilev', date: '04/09/2017', tech: 'Python',
  },
  {
    salary: 2018, qualification: 'Senior', city: 'Vitebsk', date: '07/30/2017', tech: 'Java',
  },
  {
    salary: 1883, qualification: 'Senior', city: 'Mogilev', date: '06/17/2016', tech: 'R',
  },
  {
    salary: 2309, qualification: 'Senior', city: 'Minsk', date: '10/25/2016', tech: 'Python',
  },
  {
    salary: 2673, qualification: 'Senior', city: 'Vitebsk', date: '04/30/2016', tech: 'Ruby',
  },
  {
    salary: 1927, qualification: 'Senior', city: 'Minsk', date: '03/10/2016', tech: 'Python',
  },
  {
    salary: 2630, qualification: 'Senior', city: 'Minsk', date: '08/29/2017', tech: 'Python',
  },
  {
    salary: 2177, qualification: 'Senior', city: 'Mogilev', date: '05/21/2017', tech: 'Python',
  },
  {
    salary: 2356, qualification: 'Senior', city: 'Mogilev', date: '05/25/2016', tech: 'R',
  },
  {
    salary: 2043, qualification: 'Senior', city: 'Gomel', date: '08/23/2016', tech: 'Python',
  },
  {
    salary: 2858, qualification: 'Senior', city: 'Grodno', date: '03/27/2018', tech: 'C#',
  },
  {
    salary: 2570, qualification: 'Senior', city: 'Grodno', date: '12/30/2017', tech: 'C#',
  },
  {
    salary: 2789, qualification: 'Senior', city: 'Vitebsk', date: '03/06/2016', tech: 'Java',
  },
  {
    salary: 2442, qualification: 'Senior', city: 'Gomel', date: '09/29/2017', tech: 'Python',
  },
  {
    salary: 1974, qualification: 'Senior', city: 'Brest', date: '06/06/2016', tech: 'R',
  },
  {
    salary: 2523, qualification: 'Senior', city: 'Brest', date: '02/01/2018', tech: 'Java',
  },
  {
    salary: 2436, qualification: 'Senior', city: 'Brest', date: '03/27/2016', tech: 'Ruby',
  },
  {
    salary: 1677, qualification: 'Senior', city: 'Minsk', date: '11/04/2016', tech: 'C#',
  },
  {
    salary: 2005, qualification: 'Senior', city: 'Vitebsk', date: '09/12/2016', tech: 'JS',
  },
  {
    salary: 2997, qualification: 'Senior', city: 'Vitebsk', date: '06/08/2016', tech: 'Ruby',
  },
  {
    salary: 1975, qualification: 'Senior', city: 'Brest', date: '10/30/2016', tech: 'C#',
  },
  {
    salary: 1934, qualification: 'Senior', city: 'Mogilev', date: '04/25/2018', tech: 'Python',
  },
  {
    salary: 2763, qualification: 'Senior', city: 'Minsk', date: '05/02/2017', tech: 'C#',
  },
  {
    salary: 2170, qualification: 'Senior', city: 'Grodno', date: '02/13/2017', tech: 'R',
  },
  {
    salary: 2458, qualification: 'Senior', city: 'Minsk', date: '02/22/2018', tech: 'R',
  },
  {
    salary: 2141, qualification: 'Senior', city: 'Mogilev', date: '10/20/2017', tech: 'Java',
  },
  {
    salary: 1945, qualification: 'Senior', city: 'Gomel', date: '08/03/2017', tech: 'Ruby',
  },
  {
    salary: 1747, qualification: 'Senior', city: 'Vitebsk', date: '11/28/2016', tech: 'C#',
  },
  {
    salary: 1977, qualification: 'Senior', city: 'Minsk', date: '02/16/2016', tech: 'JS',
  },
  {
    salary: 1861, qualification: 'Senior', city: 'Minsk', date: '08/18/2016', tech: 'C#',
  },
  {
    salary: 1884, qualification: 'Senior', city: 'Vitebsk', date: '01/04/2016', tech: 'Ruby',
  },
  {
    salary: 2503, qualification: 'Senior', city: 'Gomel', date: '11/21/2017', tech: 'C#',
  },
  {
    salary: 2054, qualification: 'Senior', city: 'Grodno', date: '03/10/2017', tech: 'Ruby',
  },
  {
    salary: 1741, qualification: 'Senior', city: 'Gomel', date: '12/04/2016', tech: 'R',
  },
  {
    salary: 1776, qualification: 'Senior', city: 'Gomel', date: '07/09/2017', tech: 'Ruby',
  },
  {
    salary: 2165, qualification: 'Senior', city: 'Vitebsk', date: '02/06/2018', tech: 'Java',
  },
  {
    salary: 2409, qualification: 'Senior', city: 'Brest', date: '06/16/2016', tech: 'C#',
  },
  {
    salary: 2016, qualification: 'Senior', city: 'Minsk', date: '11/20/2017', tech: 'C#',
  },
  {
    salary: 2753, qualification: 'Senior', city: 'Brest', date: '05/26/2017', tech: 'Ruby',
  },
  {
    salary: 1724, qualification: 'Senior', city: 'Gomel', date: '12/05/2017', tech: 'JS',
  },
  {
    salary: 2611, qualification: 'Senior', city: 'Mogilev', date: '08/07/2017', tech: 'Python',
  },
  {
    salary: 2036, qualification: 'Senior', city: 'Mogilev', date: '10/26/2016', tech: 'JS',
  },
  {
    salary: 2296, qualification: 'Senior', city: 'Grodno', date: '04/11/2018', tech: 'Python',
  },
  {
    salary: 2191, qualification: 'Senior', city: 'Grodno', date: '05/06/2017', tech: 'Ruby',
  },
  {
    salary: 2775, qualification: 'Senior', city: 'Mogilev', date: '08/28/2016', tech: 'R',
  },
  {
    salary: 1678, qualification: 'Senior', city: 'Gomel', date: '03/14/2017', tech: 'C#',
  },
  {
    salary: 1861, qualification: 'Senior', city: 'Grodno', date: '08/24/2017', tech: 'Ruby',
  },
  {
    salary: 2751, qualification: 'Senior', city: 'Gomel', date: '06/23/2017', tech: 'Ruby',
  },
  {
    salary: 2221, qualification: 'Senior', city: 'Brest', date: '02/28/2018', tech: 'R',
  },
  {
    salary: 2768, qualification: 'Senior', city: 'Brest', date: '04/06/2018', tech: 'C#',
  },
  {
    salary: 2550, qualification: 'Senior', city: 'Grodno', date: '01/30/2017', tech: 'Python',
  },
  {
    salary: 1881, qualification: 'Senior', city: 'Brest', date: '04/21/2018', tech: 'R',
  },
  {
    salary: 1769, qualification: 'Senior', city: 'Grodno', date: '09/23/2016', tech: 'R',
  },
  {
    salary: 1938, qualification: 'Senior', city: 'Gomel', date: '04/21/2016', tech: 'R',
  },
  {
    salary: 2960, qualification: 'Senior', city: 'Brest', date: '04/12/2018', tech: 'C#',
  },
  {
    salary: 1854, qualification: 'Senior', city: 'Grodno', date: '07/12/2017', tech: 'Python',
  },
  {
    salary: 2461, qualification: 'Senior', city: 'Gomel', date: '06/10/2016', tech: 'C#',
  },
  {
    salary: 1819, qualification: 'Senior', city: 'Grodno', date: '01/29/2016', tech: 'Python',
  },
  {
    salary: 2804, qualification: 'Senior', city: 'Gomel', date: '04/25/2018', tech: 'JS',
  },
  {
    salary: 2489, qualification: 'Senior', city: 'Brest', date: '09/30/2017', tech: 'R',
  },
  {
    salary: 1703, qualification: 'Senior', city: 'Gomel', date: '01/11/2018', tech: 'Ruby',
  },
  {
    salary: 2411, qualification: 'Senior', city: 'Gomel', date: '11/20/2017', tech: 'C#',
  },
  {
    salary: 2059, qualification: 'Senior', city: 'Gomel', date: '04/11/2017', tech: 'R',
  },
  {
    salary: 1931, qualification: 'Senior', city: 'Minsk', date: '04/18/2016', tech: 'Ruby',
  },
  {
    salary: 1910, qualification: 'Senior', city: 'Brest', date: '08/27/2017', tech: 'Ruby',
  },
  {
    salary: 1997, qualification: 'Senior', city: 'Gomel', date: '06/12/2017', tech: 'Python',
  },
  {
    salary: 1694, qualification: 'Senior', city: 'Gomel', date: '01/28/2016', tech: 'JS',
  },
  {
    salary: 2886, qualification: 'Senior', city: 'Brest', date: '08/09/2016', tech: 'Java',
  },
  {
    salary: 2744, qualification: 'Senior', city: 'Mogilev', date: '08/18/2016', tech: 'Python',
  },
  {
    salary: 1763, qualification: 'Senior', city: 'Vitebsk', date: '11/25/2016', tech: 'R',
  },
  {
    salary: 2239, qualification: 'Senior', city: 'Gomel', date: '10/23/2016', tech: 'Java',
  },
  {
    salary: 2178, qualification: 'Senior', city: 'Vitebsk', date: '03/30/2018', tech: 'Java',
  },
  {
    salary: 2709, qualification: 'Senior', city: 'Vitebsk', date: '02/24/2018', tech: 'Ruby',
  },
  {
    salary: 2702, qualification: 'Senior', city: 'Minsk', date: '11/26/2016', tech: 'Java',
  },
  {
    salary: 2591, qualification: 'Senior', city: 'Grodno', date: '12/17/2017', tech: 'R',
  },
  {
    salary: 2381, qualification: 'Senior', city: 'Brest', date: '02/21/2016', tech: 'Java',
  },
  {
    salary: 2980, qualification: 'Senior', city: 'Vitebsk', date: '11/07/2017', tech: 'Python',
  },
  {
    salary: 2591, qualification: 'Senior', city: 'Gomel', date: '11/17/2016', tech: 'Ruby',
  },
  {
    salary: 2435, qualification: 'Senior', city: 'Minsk', date: '03/28/2017', tech: 'JS',
  },
  {
    salary: 2294, qualification: 'Senior', city: 'Grodno', date: '02/06/2017', tech: 'Ruby',
  },
  {
    salary: 2577, qualification: 'Senior', city: 'Gomel', date: '06/07/2016', tech: 'Python',
  },
  {
    salary: 1838, qualification: 'Senior', city: 'Vitebsk', date: '04/06/2018', tech: 'Java',
  },
  {
    salary: 2590, qualification: 'Senior', city: 'Vitebsk', date: '01/22/2018', tech: 'R',
  },
  {
    salary: 2131, qualification: 'Senior', city: 'Grodno', date: '05/22/2016', tech: 'Java',
  },
  {
    salary: 2601, qualification: 'Senior', city: 'Vitebsk', date: '06/28/2016', tech: 'Python',
  },
  {
    salary: 2595, qualification: 'Senior', city: 'Gomel', date: '03/18/2018', tech: 'Python',
  },
  {
    salary: 1761, qualification: 'Senior', city: 'Mogilev', date: '08/30/2017', tech: 'Ruby',
  },
  {
    salary: 2130, qualification: 'Senior', city: 'Brest', date: '04/08/2016', tech: 'C#',
  },
  {
    salary: 1977, qualification: 'Senior', city: 'Gomel', date: '12/01/2017', tech: 'Java',
  },
  {
    salary: 2315, qualification: 'Senior', city: 'Mogilev', date: '09/04/2017', tech: 'Java',
  },
  {
    salary: 2459, qualification: 'Senior', city: 'Minsk', date: '09/28/2016', tech: 'R',
  },
  {
    salary: 1859, qualification: 'Senior', city: 'Mogilev', date: '01/29/2016', tech: 'R',
  },
  {
    salary: 2553, qualification: 'Senior', city: 'Mogilev', date: '09/14/2017', tech: 'Python',
  },
  {
    salary: 2979, qualification: 'Senior', city: 'Minsk', date: '01/17/2018', tech: 'Java',
  },
  {
    salary: 1661, qualification: 'Senior', city: 'Gomel', date: '07/20/2017', tech: 'Java',
  },
  {
    salary: 2453, qualification: 'Senior', city: 'Mogilev', date: '02/04/2017', tech: 'JS',
  },
  {
    salary: 2361, qualification: 'Senior', city: 'Grodno', date: '04/14/2018', tech: 'C#',
  },
  {
    salary: 2216, qualification: 'Senior', city: 'Vitebsk', date: '07/31/2016', tech: 'JS',
  },
  {
    salary: 2358, qualification: 'Senior', city: 'Grodno', date: '02/10/2018', tech: 'Python',
  },
  {
    salary: 1658, qualification: 'Senior', city: 'Grodno', date: '07/09/2017', tech: 'JS',
  },
  {
    salary: 1915, qualification: 'Senior', city: 'Minsk', date: '11/16/2016', tech: 'Python',
  },
  {
    salary: 2581, qualification: 'Senior', city: 'Vitebsk', date: '04/16/2017', tech: 'R',
  },
  {
    salary: 1752, qualification: 'Senior', city: 'Gomel', date: '07/07/2017', tech: 'Ruby',
  },
  {
    salary: 2966, qualification: 'Senior', city: 'Gomel', date: '12/24/2017', tech: 'R',
  },
  {
    salary: 2407, qualification: 'Senior', city: 'Grodno', date: '02/03/2017', tech: 'C#',
  },
  {
    salary: 2486, qualification: 'Senior', city: 'Gomel', date: '07/13/2017', tech: 'R',
  },
  {
    salary: 2698, qualification: 'Senior', city: 'Mogilev', date: '07/17/2017', tech: 'Java',
  },
  {
    salary: 1939, qualification: 'Senior', city: 'Mogilev', date: '06/20/2016', tech: 'JS',
  },
  {
    salary: 2525, qualification: 'Senior', city: 'Gomel', date: '01/27/2018', tech: 'JS',
  },
  {
    salary: 2758, qualification: 'Senior', city: 'Grodno', date: '05/19/2016', tech: 'Ruby',
  },
  {
    salary: 1725, qualification: 'Senior', city: 'Vitebsk', date: '02/29/2016', tech: 'Python',
  },
  {
    salary: 2391, qualification: 'Senior', city: 'Gomel', date: '08/15/2016', tech: 'Ruby',
  },
  {
    salary: 2571, qualification: 'Senior', city: 'Vitebsk', date: '11/16/2016', tech: 'R',
  },
  {
    salary: 2142, qualification: 'Senior', city: 'Gomel', date: '07/08/2017', tech: 'JS',
  },
  {
    salary: 2130, qualification: 'Senior', city: 'Gomel', date: '09/25/2017', tech: 'Python',
  },
  {
    salary: 2872, qualification: 'Senior', city: 'Vitebsk', date: '12/15/2017', tech: 'C#',
  },
  {
    salary: 1749, qualification: 'Senior', city: 'Brest', date: '03/09/2016', tech: 'Python',
  },
  {
    salary: 2012, qualification: 'Senior', city: 'Gomel', date: '08/09/2017', tech: 'C#',
  },
  {
    salary: 1882, qualification: 'Senior', city: 'Gomel', date: '06/03/2017', tech: 'Java',
  },
  {
    salary: 2208, qualification: 'Senior', city: 'Vitebsk', date: '11/22/2016', tech: 'C#',
  },
  {
    salary: 1763, qualification: 'Senior', city: 'Gomel', date: '01/01/2016', tech: 'JS',
  },
  {
    salary: 2530, qualification: 'Senior', city: 'Mogilev', date: '12/23/2017', tech: 'Ruby',
  },
  {
    salary: 2835, qualification: 'Senior', city: 'Vitebsk', date: '12/20/2016', tech: 'C#',
  },
  {
    salary: 2450, qualification: 'Senior', city: 'Brest', date: '08/21/2016', tech: 'JS',
  },
  {
    salary: 2660, qualification: 'Senior', city: 'Vitebsk', date: '09/11/2016', tech: 'Java',
  },
  {
    salary: 2032, qualification: 'Senior', city: 'Gomel', date: '04/16/2016', tech: 'Ruby',
  },
  {
    salary: 2204, qualification: 'Senior', city: 'Gomel', date: '07/22/2016', tech: 'C#',
  },
  {
    salary: 2624, qualification: 'Senior', city: 'Gomel', date: '05/07/2016', tech: 'Ruby',
  },
  {
    salary: 2813, qualification: 'Senior', city: 'Mogilev', date: '10/23/2016', tech: 'Ruby',
  },
  {
    salary: 2608, qualification: 'Senior', city: 'Grodno', date: '05/11/2016', tech: 'C#',
  },
  {
    salary: 2029, qualification: 'Senior', city: 'Mogilev', date: '04/15/2017', tech: 'Java',
  },
  {
    salary: 2356, qualification: 'Senior', city: 'Grodno', date: '07/30/2016', tech: 'Java',
  },
  {
    salary: 2993, qualification: 'Senior', city: 'Minsk', date: '04/23/2016', tech: 'Java',
  },
  {
    salary: 2674, qualification: 'Senior', city: 'Grodno', date: '09/01/2017', tech: 'JS',
  },
  {
    salary: 1883, qualification: 'Senior', city: 'Vitebsk', date: '12/19/2017', tech: 'JS',
  },
  {
    salary: 1885, qualification: 'Senior', city: 'Minsk', date: '01/10/2016', tech: 'Java',
  },
  {
    salary: 2038, qualification: 'Senior', city: 'Mogilev', date: '03/06/2017', tech: 'Ruby',
  },
  {
    salary: 1725, qualification: 'Senior', city: 'Vitebsk', date: '04/04/2017', tech: 'JS',
  },
  {
    salary: 2443, qualification: 'Senior', city: 'Minsk', date: '11/09/2017', tech: 'Ruby',
  },
  {
    salary: 2670, qualification: 'Senior', city: 'Brest', date: '08/24/2016', tech: 'C#',
  },
  {
    salary: 1941, qualification: 'Senior', city: 'Brest', date: '01/30/2016', tech: 'JS',
  },
  {
    salary: 2151, qualification: 'Senior', city: 'Minsk', date: '08/27/2016', tech: 'Python',
  },
  {
    salary: 2381, qualification: 'Senior', city: 'Minsk', date: '05/17/2016', tech: 'R',
  },
  {
    salary: 2942, qualification: 'Senior', city: 'Grodno', date: '08/29/2016', tech: 'Java',
  },
  {
    salary: 2452, qualification: 'Senior', city: 'Grodno', date: '01/18/2017', tech: 'JS',
  },
  {
    salary: 2902, qualification: 'Senior', city: 'Brest', date: '02/07/2018', tech: 'C#',
  },
  {
    salary: 2768, qualification: 'Senior', city: 'Gomel', date: '01/19/2018', tech: 'Ruby',
  },
  {
    salary: 2251, qualification: 'Senior', city: 'Brest', date: '05/23/2016', tech: 'R',
  },
  {
    salary: 2269, qualification: 'Senior', city: 'Grodno', date: '09/24/2016', tech: 'JS',
  },
  {
    salary: 2628, qualification: 'Senior', city: 'Brest', date: '01/06/2018', tech: 'JS',
  },
  {
    salary: 1726, qualification: 'Senior', city: 'Mogilev', date: '04/06/2017', tech: 'Python',
  },
  {
    salary: 1928, qualification: 'Senior', city: 'Gomel', date: '03/24/2017', tech: 'R',
  },
  {
    salary: 2299, qualification: 'Senior', city: 'Mogilev', date: '03/15/2017', tech: 'JS',
  },
  {
    salary: 2606, qualification: 'Senior', city: 'Vitebsk', date: '03/08/2017', tech: 'R',
  },
  {
    salary: 2645, qualification: 'Senior', city: 'Mogilev', date: '08/02/2016', tech: 'Python',
  },
  {
    salary: 1753, qualification: 'Senior', city: 'Gomel', date: '02/13/2018', tech: 'Java',
  },
  {
    salary: 2771, qualification: 'Senior', city: 'Vitebsk', date: '01/08/2017', tech: 'Ruby',
  },
  {
    salary: 2710, qualification: 'Senior', city: 'Mogilev', date: '05/02/2016', tech: 'Ruby',
  },
  {
    salary: 2839, qualification: 'Senior', city: 'Brest', date: '04/02/2017', tech: 'R',
  },
  {
    salary: 2618, qualification: 'Senior', city: 'Vitebsk', date: '02/14/2016', tech: 'R',
  },
  {
    salary: 2901, qualification: 'Senior', city: 'Grodno', date: '06/27/2017', tech: 'Python',
  },
  {
    salary: 2282, qualification: 'Senior', city: 'Vitebsk', date: '08/21/2016', tech: 'C#',
  },
  {
    salary: 2482, qualification: 'Senior', city: 'Brest', date: '01/31/2016', tech: 'Java',
  },
  {
    salary: 2112, qualification: 'Senior', city: 'Minsk', date: '02/24/2018', tech: 'C#',
  },
  {
    salary: 1748, qualification: 'Senior', city: 'Grodno', date: '01/03/2017', tech: 'C#',
  },
  {
    salary: 2264, qualification: 'Senior', city: 'Grodno', date: '04/15/2017', tech: 'JS',
  },
  {
    salary: 2642, qualification: 'Senior', city: 'Brest', date: '06/27/2016', tech: 'Python',
  },
  {
    salary: 2131, qualification: 'Senior', city: 'Gomel', date: '04/27/2017', tech: 'R',
  },
  {
    salary: 2358, qualification: 'Senior', city: 'Mogilev', date: '06/12/2016', tech: 'JS',
  },
  {
    salary: 1790, qualification: 'Senior', city: 'Vitebsk', date: '04/10/2017', tech: 'Ruby',
  },
  {
    salary: 1736, qualification: 'Senior', city: 'Grodno', date: '12/02/2016', tech: 'C#',
  },
  {
    salary: 1808, qualification: 'Senior', city: 'Mogilev', date: '07/01/2017', tech: 'R',
  },
  {
    salary: 2229, qualification: 'Senior', city: 'Gomel', date: '05/11/2016', tech: 'R',
  },
  {
    salary: 1718, qualification: 'Senior', city: 'Mogilev', date: '06/28/2016', tech: 'Ruby',
  },
  {
    salary: 1938, qualification: 'Senior', city: 'Vitebsk', date: '10/28/2017', tech: 'Ruby',
  },
  {
    salary: 1825, qualification: 'Senior', city: 'Vitebsk', date: '05/19/2016', tech: 'Python',
  },
  {
    salary: 2339, qualification: 'Senior', city: 'Mogilev', date: '04/22/2016', tech: 'JS',
  },
  {
    salary: 2752, qualification: 'Senior', city: 'Gomel', date: '09/08/2017', tech: 'Java',
  },
  {
    salary: 1686, qualification: 'Senior', city: 'Brest', date: '07/30/2017', tech: 'R',
  },
  {
    salary: 2592, qualification: 'Senior', city: 'Grodno', date: '01/25/2017', tech: 'C#',
  },
  {
    salary: 2869, qualification: 'Senior', city: 'Gomel', date: '05/13/2017', tech: 'C#',
  },
  {
    salary: 1914, qualification: 'Senior', city: 'Gomel', date: '06/07/2017', tech: 'R',
  },
  {
    salary: 2655, qualification: 'Senior', city: 'Minsk', date: '09/19/2016', tech: 'Ruby',
  },
  {
    salary: 2334, qualification: 'Senior', city: 'Grodno', date: '01/25/2016', tech: 'JS',
  },
  {
    salary: 2887, qualification: 'Senior', city: 'Minsk', date: '11/18/2016', tech: 'Python',
  },
  {
    salary: 2906, qualification: 'Senior', city: 'Vitebsk', date: '04/07/2018', tech: 'Ruby',
  },
  {
    salary: 2223, qualification: 'Senior', city: 'Gomel', date: '06/15/2017', tech: 'Python',
  },
  {
    salary: 2243, qualification: 'Senior', city: 'Mogilev', date: '06/27/2017', tech: 'R',
  },
  {
    salary: 2421, qualification: 'Senior', city: 'Minsk', date: '10/17/2017', tech: 'Ruby',
  },
  {
    salary: 2336, qualification: 'Senior', city: 'Minsk', date: '05/25/2017', tech: 'C#',
  },
  {
    salary: 2823, qualification: 'Senior', city: 'Vitebsk', date: '09/12/2016', tech: 'Java',
  },
  {
    salary: 1934, qualification: 'Senior', city: 'Mogilev', date: '11/30/2016', tech: 'Python',
  },
  {
    salary: 1672, qualification: 'Senior', city: 'Mogilev', date: '01/25/2018', tech: 'JS',
  },
  {
    salary: 2138, qualification: 'Senior', city: 'Grodno', date: '11/25/2016', tech: 'R',
  },
  {
    salary: 1777, qualification: 'Senior', city: 'Gomel', date: '02/02/2017', tech: 'Ruby',
  },
  {
    salary: 2087, qualification: 'Senior', city: 'Brest', date: '01/18/2017', tech: 'Ruby',
  },
  {
    salary: 2659, qualification: 'Senior', city: 'Brest', date: '11/15/2017', tech: 'C#',
  },
  {
    salary: 2373, qualification: 'Senior', city: 'Vitebsk', date: '03/13/2017', tech: 'Java',
  },
  {
    salary: 2197, qualification: 'Senior', city: 'Brest', date: '04/19/2016', tech: 'Java',
  },
  {
    salary: 2055, qualification: 'Senior', city: 'Vitebsk', date: '01/03/2016', tech: 'Python',
  },
  {
    salary: 2207, qualification: 'Senior', city: 'Brest', date: '08/15/2017', tech: 'Ruby',
  },
  {
    salary: 2847, qualification: 'Senior', city: 'Vitebsk', date: '12/06/2016', tech: 'Python',
  },
  {
    salary: 2250, qualification: 'Senior', city: 'Mogilev', date: '01/25/2016', tech: 'Java',
  },
  {
    salary: 2362, qualification: 'Senior', city: 'Brest', date: '10/20/2016', tech: 'Ruby',
  },
  {
    salary: 2868, qualification: 'Senior', city: 'Vitebsk', date: '05/10/2017', tech: 'JS',
  },
  {
    salary: 2884, qualification: 'Senior', city: 'Mogilev', date: '07/11/2016', tech: 'C#',
  },
  {
    salary: 1687, qualification: 'Senior', city: 'Minsk', date: '07/22/2017', tech: 'Python',
  },
  {
    salary: 2007, qualification: 'Senior', city: 'Minsk', date: '12/05/2016', tech: 'C#',
  },
  {
    salary: 2461, qualification: 'Senior', city: 'Grodno', date: '11/02/2017', tech: 'R',
  },
  {
    salary: 2409, qualification: 'Senior', city: 'Brest', date: '11/24/2017', tech: 'Ruby',
  },
  {
    salary: 1695, qualification: 'Senior', city: 'Gomel', date: '10/05/2017', tech: 'JS',
  },
  {
    salary: 1858, qualification: 'Senior', city: 'Minsk', date: '04/29/2017', tech: 'C#',
  },
  {
    salary: 1871, qualification: 'Senior', city: 'Minsk', date: '05/12/2016', tech: 'Ruby',
  },
  {
    salary: 2190, qualification: 'Senior', city: 'Brest', date: '01/09/2016', tech: 'JS',
  },
  {
    salary: 2281, qualification: 'Senior', city: 'Grodno', date: '08/31/2016', tech: 'R',
  },
  {
    salary: 2967, qualification: 'Senior', city: 'Vitebsk', date: '10/18/2016', tech: 'JS',
  },
  {
    salary: 2818, qualification: 'Senior', city: 'Gomel', date: '05/19/2016', tech: 'Python',
  },
  {
    salary: 1791, qualification: 'Senior', city: 'Grodno', date: '07/17/2016', tech: 'Java',
  },
  {
    salary: 2468, qualification: 'Senior', city: 'Minsk', date: '12/10/2017', tech: 'JS',
  },
  {
    salary: 2220, qualification: 'Senior', city: 'Mogilev', date: '05/26/2017', tech: 'C#',
  },
  {
    salary: 2309, qualification: 'Senior', city: 'Vitebsk', date: '05/12/2017', tech: 'Python',
  },
  {
    salary: 2154, qualification: 'Senior', city: 'Gomel', date: '08/14/2017', tech: 'Java',
  },
  {
    salary: 2495, qualification: 'Senior', city: 'Mogilev', date: '10/23/2017', tech: 'JS',
  },
  {
    salary: 2655, qualification: 'Senior', city: 'Brest', date: '05/14/2016', tech: 'Ruby',
  },
  {
    salary: 2138, qualification: 'Senior', city: 'Minsk', date: '01/31/2018', tech: 'Ruby',
  },
  {
    salary: 2716, qualification: 'Senior', city: 'Gomel', date: '11/04/2016', tech: 'C#',
  },
  {
    salary: 2128, qualification: 'Senior', city: 'Gomel', date: '01/18/2016', tech: 'R',
  },
  {
    salary: 2292, qualification: 'Senior', city: 'Brest', date: '01/17/2016', tech: 'Ruby',
  },
  {
    salary: 1722, qualification: 'Senior', city: 'Brest', date: '01/24/2018', tech: 'Ruby',
  },
  {
    salary: 1728, qualification: 'Senior', city: 'Minsk', date: '04/24/2018', tech: 'Python',
  },
  {
    salary: 2416, qualification: 'Senior', city: 'Vitebsk', date: '07/04/2017', tech: 'R',
  },
  {
    salary: 2196, qualification: 'Senior', city: 'Minsk', date: '08/01/2017', tech: 'Ruby',
  },
  {
    salary: 2957, qualification: 'Senior', city: 'Brest', date: '10/01/2016', tech: 'Python',
  },
  {
    salary: 1932, qualification: 'Senior', city: 'Grodno', date: '03/02/2017', tech: 'JS',
  },
  {
    salary: 1873, qualification: 'Senior', city: 'Grodno', date: '08/31/2017', tech: 'Java',
  },
  {
    salary: 2834, qualification: 'Senior', city: 'Vitebsk', date: '10/30/2017', tech: 'JS',
  },
  {
    salary: 2177, qualification: 'Senior', city: 'Gomel', date: '09/29/2016', tech: 'Python',
  },
  {
    salary: 1951, qualification: 'Senior', city: 'Gomel', date: '04/06/2017', tech: 'R',
  },
  {
    salary: 1857, qualification: 'Senior', city: 'Minsk', date: '03/22/2017', tech: 'R',
  },
  {
    salary: 1862, qualification: 'Senior', city: 'Gomel', date: '09/07/2016', tech: 'Python',
  },
  {
    salary: 2150, qualification: 'Senior', city: 'Mogilev', date: '03/12/2017', tech: 'JS',
  },
  {
    salary: 2573, qualification: 'Senior', city: 'Gomel', date: '09/03/2016', tech: 'Ruby',
  },
  {
    salary: 2362, qualification: 'Senior', city: 'Gomel', date: '04/02/2017', tech: 'Ruby',
  },
  {
    salary: 2096, qualification: 'Senior', city: 'Mogilev', date: '03/11/2016', tech: 'Ruby',
  },
  {
    salary: 1679, qualification: 'Senior', city: 'Mogilev', date: '04/14/2018', tech: 'JS',
  },
  {
    salary: 1816, qualification: 'Senior', city: 'Brest', date: '05/30/2017', tech: 'C#',
  },
  {
    salary: 1877, qualification: 'Senior', city: 'Minsk', date: '04/02/2016', tech: 'R',
  },
  {
    salary: 2163, qualification: 'Senior', city: 'Mogilev', date: '05/14/2016', tech: 'JS',
  },
  {
    salary: 2915, qualification: 'Senior', city: 'Mogilev', date: '02/01/2018', tech: 'Java',
  },
  {
    salary: 2799, qualification: 'Senior', city: 'Vitebsk', date: '04/11/2017', tech: 'JS',
  },
  {
    salary: 1892, qualification: 'Senior', city: 'Brest', date: '04/25/2017', tech: 'C#',
  },
  {
    salary: 1802, qualification: 'Senior', city: 'Mogilev', date: '07/05/2016', tech: 'C#',
  },
  {
    salary: 2452, qualification: 'Senior', city: 'Grodno', date: '04/25/2017', tech: 'Ruby',
  },
  {
    salary: 2557, qualification: 'Senior', city: 'Minsk', date: '04/17/2016', tech: 'C#',
  },
  {
    salary: 2414, qualification: 'Senior', city: 'Brest', date: '04/16/2016', tech: 'C#',
  },
  {
    salary: 2997, qualification: 'Senior', city: 'Mogilev', date: '03/10/2016', tech: 'Ruby',
  },
  {
    salary: 2197, qualification: 'Senior', city: 'Brest', date: '08/08/2017', tech: 'Ruby',
  },
  {
    salary: 2105, qualification: 'Senior', city: 'Brest', date: '03/31/2016', tech: 'Ruby',
  },
  {
    salary: 1756, qualification: 'Senior', city: 'Minsk', date: '04/15/2016', tech: 'JS',
  },
  {
    salary: 2066, qualification: 'Senior', city: 'Vitebsk', date: '10/29/2016', tech: 'R',
  },
  {
    salary: 1783, qualification: 'Senior', city: 'Brest', date: '04/22/2016', tech: 'Ruby',
  },
  {
    salary: 2738, qualification: 'Senior', city: 'Vitebsk', date: '07/25/2016', tech: 'Java',
  },
  {
    salary: 2732, qualification: 'Senior', city: 'Mogilev', date: '06/01/2016', tech: 'R',
  },
  {
    salary: 2847, qualification: 'Senior', city: 'Gomel', date: '09/03/2017', tech: 'Java',
  },
  {
    salary: 2362, qualification: 'Senior', city: 'Vitebsk', date: '10/26/2017', tech: 'Ruby',
  },
  {
    salary: 2800, qualification: 'Senior', city: 'Vitebsk', date: '06/19/2017', tech: 'R',
  },
  {
    salary: 2847, qualification: 'Senior', city: 'Grodno', date: '12/26/2017', tech: 'R',
  },
  {
    salary: 2326, qualification: 'Senior', city: 'Mogilev', date: '04/19/2016', tech: 'JS',
  },
  {
    salary: 2509, qualification: 'Senior', city: 'Mogilev', date: '03/25/2018', tech: 'R',
  },
  {
    salary: 1671, qualification: 'Senior', city: 'Brest', date: '01/16/2016', tech: 'Java',
  },
  {
    salary: 2306, qualification: 'Senior', city: 'Mogilev', date: '04/02/2016', tech: 'JS',
  },
  {
    salary: 2399, qualification: 'Senior', city: 'Gomel', date: '07/13/2017', tech: 'Java',
  },
  {
    salary: 2344, qualification: 'Senior', city: 'Gomel', date: '11/19/2016', tech: 'JS',
  },
  {
    salary: 2839, qualification: 'Senior', city: 'Vitebsk', date: '04/11/2017', tech: 'R',
  },
  {
    salary: 2333, qualification: 'Senior', city: 'Mogilev', date: '06/18/2017', tech: 'Ruby',
  },
  {
    salary: 2142, qualification: 'Senior', city: 'Gomel', date: '07/14/2016', tech: 'Java',
  },
  {
    salary: 1954, qualification: 'Senior', city: 'Minsk', date: '08/06/2016', tech: 'JS',
  },
  {
    salary: 1873, qualification: 'Senior', city: 'Mogilev', date: '05/18/2016', tech: 'Ruby',
  },
  {
    salary: 1855, qualification: 'Senior', city: 'Brest', date: '10/17/2017', tech: 'C#',
  },
  {
    salary: 2981, qualification: 'Senior', city: 'Vitebsk', date: '10/16/2017', tech: 'C#',
  },
  {
    salary: 1709, qualification: 'Senior', city: 'Grodno', date: '01/23/2017', tech: 'JS',
  },
  {
    salary: 2587, qualification: 'Senior', city: 'Vitebsk', date: '05/28/2017', tech: 'Python',
  },
  {
    salary: 2130, qualification: 'Senior', city: 'Gomel', date: '07/01/2017', tech: 'Python',
  },
  {
    salary: 2224, qualification: 'Senior', city: 'Vitebsk', date: '07/11/2017', tech: 'Python',
  },
  {
    salary: 2083, qualification: 'Senior', city: 'Mogilev', date: '09/01/2016', tech: 'JS',
  },
  {
    salary: 1963, qualification: 'Senior', city: 'Grodno', date: '02/11/2018', tech: 'Java',
  },
  {
    salary: 2824, qualification: 'Senior', city: 'Mogilev', date: '01/21/2018', tech: 'Java',
  },
  {
    salary: 2666, qualification: 'Senior', city: 'Mogilev', date: '04/08/2016', tech: 'Python',
  },
  {
    salary: 1959, qualification: 'Senior', city: 'Grodno', date: '07/23/2017', tech: 'R',
  },
  {
    salary: 2918, qualification: 'Senior', city: 'Mogilev', date: '03/06/2017', tech: 'JS',
  },
  {
    salary: 1776, qualification: 'Senior', city: 'Gomel', date: '12/09/2017', tech: 'Java',
  },
  {
    salary: 1681, qualification: 'Senior', city: 'Minsk', date: '09/27/2016', tech: 'JS',
  },
  {
    salary: 2606, qualification: 'Senior', city: 'Grodno', date: '07/25/2016', tech: 'R',
  },
  {
    salary: 2105, qualification: 'Senior', city: 'Brest', date: '08/07/2016', tech: 'Java',
  },
  {
    salary: 2865, qualification: 'Senior', city: 'Gomel', date: '08/20/2017', tech: 'JS',
  },
  {
    salary: 2330, qualification: 'Senior', city: 'Grodno', date: '11/10/2017', tech: 'R',
  },
  {
    salary: 2119, qualification: 'Senior', city: 'Vitebsk', date: '06/28/2017', tech: 'Java',
  },
  {
    salary: 1844, qualification: 'Senior', city: 'Minsk', date: '02/18/2018', tech: 'Python',
  },
  {
    salary: 2218, qualification: 'Senior', city: 'Grodno', date: '01/16/2016', tech: 'JS',
  },
  {
    salary: 2731, qualification: 'Senior', city: 'Vitebsk', date: '08/14/2017', tech: 'Ruby',
  },
  {
    salary: 2533, qualification: 'Senior', city: 'Mogilev', date: '10/19/2017', tech: 'Java',
  },
  {
    salary: 2867, qualification: 'Senior', city: 'Grodno', date: '01/07/2017', tech: 'JS',
  },
  {
    salary: 2753, qualification: 'Senior', city: 'Grodno', date: '09/25/2016', tech: 'Python',
  },
  {
    salary: 2030, qualification: 'Senior', city: 'Minsk', date: '08/17/2017', tech: 'JS',
  },
  {
    salary: 2561, qualification: 'Senior', city: 'Mogilev', date: '01/15/2018', tech: 'JS',
  },
  {
    salary: 2311, qualification: 'Senior', city: 'Brest', date: '01/06/2018', tech: 'Python',
  },
  {
    salary: 2040, qualification: 'Senior', city: 'Minsk', date: '01/28/2017', tech: 'JS',
  },
  {
    salary: 2510, qualification: 'Senior', city: 'Minsk', date: '10/01/2016', tech: 'Python',
  },
  {
    salary: 1818, qualification: 'Senior', city: 'Minsk', date: '12/27/2017', tech: 'Python',
  },
  {
    salary: 2583, qualification: 'Senior', city: 'Vitebsk', date: '08/11/2016', tech: 'Python',
  },
  {
    salary: 2333, qualification: 'Senior', city: 'Vitebsk', date: '10/14/2016', tech: 'Ruby',
  },
  {
    salary: 2673, qualification: 'Senior', city: 'Minsk', date: '06/30/2017', tech: 'JS',
  },
  {
    salary: 2821, qualification: 'Senior', city: 'Gomel', date: '12/23/2017', tech: 'Java',
  },
  {
    salary: 1724, qualification: 'Senior', city: 'Vitebsk', date: '02/04/2018', tech: 'Python',
  },
  {
    salary: 1813, qualification: 'Senior', city: 'Grodno', date: '10/21/2016', tech: 'Java',
  },
  {
    salary: 2782, qualification: 'Senior', city: 'Vitebsk', date: '12/17/2017', tech: 'Ruby',
  },
  {
    salary: 2518, qualification: 'Senior', city: 'Gomel', date: '06/24/2016', tech: 'Ruby',
  },
  {
    salary: 2991, qualification: 'Senior', city: 'Vitebsk', date: '10/02/2017', tech: 'R',
  },
  {
    salary: 2317, qualification: 'Senior', city: 'Vitebsk', date: '12/12/2017', tech: 'JS',
  },
  {
    salary: 1881, qualification: 'Senior', city: 'Mogilev', date: '08/08/2017', tech: 'Ruby',
  },
  {
    salary: 2716, qualification: 'Senior', city: 'Vitebsk', date: '11/15/2017', tech: 'R',
  },
  {
    salary: 2718, qualification: 'Senior', city: 'Minsk', date: '10/08/2016', tech: 'C#',
  },
  {
    salary: 2341, qualification: 'Senior', city: 'Gomel', date: '07/24/2016', tech: 'Ruby',
  },
  {
    salary: 2217, qualification: 'Senior', city: 'Gomel', date: '05/18/2016', tech: 'C#',
  },
  {
    salary: 2266, qualification: 'Senior', city: 'Minsk', date: '03/23/2018', tech: 'R',
  },
  {
    salary: 1748, qualification: 'Senior', city: 'Gomel', date: '08/24/2016', tech: 'JS',
  },
  {
    salary: 2228, qualification: 'Senior', city: 'Mogilev', date: '04/06/2018', tech: 'Ruby',
  },
  {
    salary: 2500, qualification: 'Senior', city: 'Gomel', date: '01/22/2016', tech: 'C#',
  },
  {
    salary: 1907, qualification: 'Senior', city: 'Gomel', date: '11/25/2017', tech: 'Java',
  },
  {
    salary: 2764, qualification: 'Senior', city: 'Minsk', date: '02/01/2017', tech: 'Java',
  },
  {
    salary: 2701, qualification: 'Senior', city: 'Minsk', date: '02/16/2017', tech: 'C#',
  },
  {
    salary: 2265, qualification: 'Senior', city: 'Minsk', date: '07/07/2017', tech: 'R',
  },
  {
    salary: 2242, qualification: 'Senior', city: 'Gomel', date: '07/12/2017', tech: 'Ruby',
  },
  {
    salary: 1694, qualification: 'Senior', city: 'Vitebsk', date: '01/19/2018', tech: 'Ruby',
  },
  {
    salary: 2243, qualification: 'Senior', city: 'Vitebsk', date: '09/26/2016', tech: 'Ruby',
  },
  {
    salary: 2388, qualification: 'Senior', city: 'Grodno', date: '07/23/2017', tech: 'C#',
  },
  {
    salary: 2341, qualification: 'Senior', city: 'Brest', date: '12/02/2016', tech: 'JS',
  },
  {
    salary: 2058, qualification: 'Senior', city: 'Minsk', date: '09/20/2017', tech: 'JS',
  },
  {
    salary: 1704, qualification: 'Senior', city: 'Mogilev', date: '12/28/2016', tech: 'Java',
  },
  {
    salary: 2097, qualification: 'Senior', city: 'Mogilev', date: '02/20/2016', tech: 'JS',
  },
  {
    salary: 2093, qualification: 'Senior', city: 'Mogilev', date: '11/02/2017', tech: 'Python',
  },
  {
    salary: 2503, qualification: 'Senior', city: 'Vitebsk', date: '04/02/2018', tech: 'Python',
  },
  {
    salary: 2305, qualification: 'Senior', city: 'Gomel', date: '10/10/2017', tech: 'Python',
  },
  {
    salary: 2186, qualification: 'Senior', city: 'Grodno', date: '01/16/2016', tech: 'Python',
  },
  {
    salary: 1901, qualification: 'Senior', city: 'Gomel', date: '11/04/2017', tech: 'Python',
  },
  {
    salary: 2880, qualification: 'Senior', city: 'Mogilev', date: '06/28/2017', tech: 'Ruby',
  },
  {
    salary: 2555, qualification: 'Senior', city: 'Brest', date: '03/12/2016', tech: 'R',
  },
  {
    salary: 1815, qualification: 'Senior', city: 'Minsk', date: '05/29/2016', tech: 'Java',
  },
  {
    salary: 2436, qualification: 'Senior', city: 'Mogilev', date: '05/03/2017', tech: 'C#',
  },
  {
    salary: 2258, qualification: 'Senior', city: 'Grodno', date: '04/18/2017', tech: 'Python',
  },
  {
    salary: 2756, qualification: 'Senior', city: 'Grodno', date: '10/20/2016', tech: 'R',
  },
  {
    salary: 2756, qualification: 'Senior', city: 'Vitebsk', date: '02/10/2017', tech: 'JS',
  },
  {
    salary: 2167, qualification: 'Senior', city: 'Grodno', date: '01/07/2018', tech: 'Ruby',
  },
  {
    salary: 2796, qualification: 'Senior', city: 'Minsk', date: '03/19/2017', tech: 'Python',
  },
  {
    salary: 2154, qualification: 'Senior', city: 'Brest', date: '04/30/2016', tech: 'C#',
  },
  {
    salary: 1984, qualification: 'Senior', city: 'Gomel', date: '10/07/2016', tech: 'Ruby',
  },
  {
    salary: 2546, qualification: 'Senior', city: 'Gomel', date: '04/24/2018', tech: 'Ruby',
  },
  {
    salary: 1829, qualification: 'Senior', city: 'Brest', date: '03/13/2017', tech: 'JS',
  },
  {
    salary: 2500, qualification: 'Senior', city: 'Mogilev', date: '10/03/2016', tech: 'Python',
  },
  {
    salary: 2789, qualification: 'Senior', city: 'Grodno', date: '11/27/2016', tech: 'Ruby',
  },
  {
    salary: 2928, qualification: 'Senior', city: 'Vitebsk', date: '04/18/2018', tech: 'R',
  },
  {
    salary: 2026, qualification: 'Senior', city: 'Mogilev', date: '10/31/2016', tech: 'JS',
  },
  {
    salary: 2752, qualification: 'Senior', city: 'Grodno', date: '02/15/2017', tech: 'C#',
  },
  {
    salary: 2964, qualification: 'Senior', city: 'Brest', date: '05/14/2017', tech: 'Ruby',
  },
  {
    salary: 2377, qualification: 'Senior', city: 'Mogilev', date: '04/27/2016', tech: 'Ruby',
  },
  {
    salary: 2235, qualification: 'Senior', city: 'Brest', date: '02/10/2018', tech: 'Python',
  },
  {
    salary: 1934, qualification: 'Senior', city: 'Brest', date: '07/30/2017', tech: 'C#',
  },
  {
    salary: 2847, qualification: 'Senior', city: 'Vitebsk', date: '10/03/2017', tech: 'Ruby',
  },
  {
    salary: 2528, qualification: 'Senior', city: 'Gomel', date: '07/19/2016', tech: 'JS',
  },
  {
    salary: 2631, qualification: 'Senior', city: 'Gomel', date: '10/17/2017', tech: 'C#',
  },
  {
    salary: 2533, qualification: 'Senior', city: 'Brest', date: '05/02/2017', tech: 'JS',
  },
  {
    salary: 1738, qualification: 'Senior', city: 'Vitebsk', date: '11/16/2016', tech: 'Python',
  },
  {
    salary: 2658, qualification: 'Senior', city: 'Minsk', date: '03/26/2018', tech: 'Python',
  },
  {
    salary: 1746, qualification: 'Senior', city: 'Grodno', date: '11/09/2016', tech: 'R',
  },
  {
    salary: 1913, qualification: 'Senior', city: 'Gomel', date: '04/27/2016', tech: 'Java',
  },
  {
    salary: 2350, qualification: 'Senior', city: 'Grodno', date: '01/14/2017', tech: 'JS',
  },
  {
    salary: 2362, qualification: 'Senior', city: 'Grodno', date: '01/10/2017', tech: 'Python',
  },
  {
    salary: 1685, qualification: 'Senior', city: 'Brest', date: '05/21/2016', tech: 'Java',
  },
  {
    salary: 1941, qualification: 'Senior', city: 'Brest', date: '03/25/2018', tech: 'C#',
  },
  {
    salary: 1664, qualification: 'Senior', city: 'Minsk', date: '03/20/2017', tech: 'C#',
  },
  {
    salary: 2763, qualification: 'Senior', city: 'Gomel', date: '07/07/2016', tech: 'R',
  },
  {
    salary: 1822, qualification: 'Senior', city: 'Gomel', date: '04/04/2018', tech: 'Python',
  },
  {
    salary: 1791, qualification: 'Senior', city: 'Mogilev', date: '04/19/2016', tech: 'Ruby',
  },
  {
    salary: 2705, qualification: 'Senior', city: 'Mogilev', date: '05/23/2016', tech: 'Python',
  },
  {
    salary: 1674, qualification: 'Senior', city: 'Gomel', date: '01/31/2016', tech: 'Python',
  },
  {
    salary: 2191, qualification: 'Senior', city: 'Vitebsk', date: '01/29/2017', tech: 'JS',
  },
  {
    salary: 2672, qualification: 'Senior', city: 'Brest', date: '11/05/2016', tech: 'R',
  },
  {
    salary: 2384, qualification: 'Senior', city: 'Brest', date: '05/05/2016', tech: 'JS',
  },
  {
    salary: 2794, qualification: 'Senior', city: 'Brest', date: '06/28/2017', tech: 'R',
  },
  {
    salary: 1738, qualification: 'Senior', city: 'Grodno', date: '03/24/2018', tech: 'Ruby',
  },
  {
    salary: 2490, qualification: 'Senior', city: 'Brest', date: '06/06/2016', tech: 'Ruby',
  },
  {
    salary: 2384, qualification: 'Senior', city: 'Grodno', date: '11/16/2016', tech: 'Ruby',
  },
  {
    salary: 2805, qualification: 'Senior', city: 'Brest', date: '08/13/2017', tech: 'JS',
  },
  {
    salary: 2403, qualification: 'Senior', city: 'Minsk', date: '07/09/2016', tech: 'R',
  },
  {
    salary: 2895, qualification: 'Senior', city: 'Gomel', date: '07/13/2016', tech: 'C#',
  },
  {
    salary: 2325, qualification: 'Senior', city: 'Grodno', date: '09/26/2016', tech: 'C#',
  },
  {
    salary: 2446, qualification: 'Senior', city: 'Vitebsk', date: '03/24/2016', tech: 'Python',
  },
  {
    salary: 2758, qualification: 'Senior', city: 'Grodno', date: '03/03/2018', tech: 'Java',
  },
  {
    salary: 2977, qualification: 'Senior', city: 'Grodno', date: '10/17/2016', tech: 'Ruby',
  },
  {
    salary: 2071, qualification: 'Senior', city: 'Grodno', date: '12/16/2016', tech: 'Python',
  },
  {
    salary: 2997, qualification: 'Senior', city: 'Vitebsk', date: '02/04/2016', tech: 'R',
  },
  {
    salary: 2174, qualification: 'Senior', city: 'Brest', date: '11/27/2017', tech: 'R',
  },
  {
    salary: 2550, qualification: 'Senior', city: 'Mogilev', date: '05/21/2016', tech: 'Ruby',
  },
  {
    salary: 2185, qualification: 'Senior', city: 'Mogilev', date: '04/14/2016', tech: 'JS',
  },
  {
    salary: 2457, qualification: 'Senior', city: 'Mogilev', date: '05/28/2016', tech: 'JS',
  },
  {
    salary: 1729, qualification: 'Senior', city: 'Brest', date: '01/07/2018', tech: 'R',
  },
  {
    salary: 2460, qualification: 'Senior', city: 'Vitebsk', date: '04/11/2016', tech: 'Ruby',
  },
  {
    salary: 2848, qualification: 'Senior', city: 'Vitebsk', date: '12/19/2017', tech: 'Ruby',
  },
  {
    salary: 2933, qualification: 'Senior', city: 'Minsk', date: '11/22/2016', tech: 'Ruby',
  },
  {
    salary: 2940, qualification: 'Senior', city: 'Vitebsk', date: '03/01/2016', tech: 'R',
  },
  {
    salary: 2049, qualification: 'Senior', city: 'Minsk', date: '04/27/2016', tech: 'Java',
  },
  {
    salary: 2690, qualification: 'Senior', city: 'Brest', date: '01/22/2016', tech: 'Java',
  },
  {
    salary: 1710, qualification: 'Senior', city: 'Grodno', date: '03/28/2018', tech: 'Python',
  },
  {
    salary: 2978, qualification: 'Senior', city: 'Grodno', date: '07/20/2016', tech: 'Python',
  },
  {
    salary: 1770, qualification: 'Senior', city: 'Minsk', date: '10/05/2017', tech: 'JS',
  },
  {
    salary: 2523, qualification: 'Senior', city: 'Grodno', date: '01/31/2017', tech: 'Python',
  },
  {
    salary: 2529, qualification: 'Senior', city: 'Vitebsk', date: '04/05/2016', tech: 'Python',
  },
  {
    salary: 2122, qualification: 'Senior', city: 'Vitebsk', date: '10/10/2016', tech: 'C#',
  },
  {
    salary: 1727, qualification: 'Senior', city: 'Vitebsk', date: '09/15/2016', tech: 'Ruby',
  },
  {
    salary: 2931, qualification: 'Senior', city: 'Gomel', date: '09/23/2017', tech: 'Ruby',
  },
  {
    salary: 1692, qualification: 'Senior', city: 'Vitebsk', date: '12/12/2017', tech: 'Python',
  },
  {
    salary: 1783, qualification: 'Senior', city: 'Grodno', date: '10/26/2017', tech: 'R',
  },
  {
    salary: 2426, qualification: 'Senior', city: 'Mogilev', date: '04/20/2016', tech: 'Python',
  },
  {
    salary: 2612, qualification: 'Senior', city: 'Vitebsk', date: '12/23/2017', tech: 'JS',
  },
  {
    salary: 2436, qualification: 'Senior', city: 'Brest', date: '06/13/2017', tech: 'Ruby',
  },
  {
    salary: 2720, qualification: 'Senior', city: 'Gomel', date: '08/16/2017', tech: 'C#',
  },
  {
    salary: 2077, qualification: 'Senior', city: 'Gomel', date: '06/13/2016', tech: 'JS',
  },
  {
    salary: 2088, qualification: 'Senior', city: 'Mogilev', date: '05/03/2016', tech: 'Python',
  },
  {
    salary: 2455, qualification: 'Senior', city: 'Gomel', date: '01/11/2016', tech: 'Python',
  },
  {
    salary: 2492, qualification: 'Senior', city: 'Brest', date: '01/10/2017', tech: 'Python',
  },
  {
    salary: 1820, qualification: 'Senior', city: 'Brest', date: '01/29/2016', tech: 'JS',
  },
  {
    salary: 2838, qualification: 'Senior', city: 'Brest', date: '04/10/2016', tech: 'R',
  },
  {
    salary: 2531, qualification: 'Senior', city: 'Brest', date: '04/11/2016', tech: 'Python',
  },
  {
    salary: 2905, qualification: 'Senior', city: 'Vitebsk', date: '11/06/2016', tech: 'Java',
  },
  {
    salary: 2138, qualification: 'Senior', city: 'Grodno', date: '11/21/2016', tech: 'Ruby',
  },
  {
    salary: 2824, qualification: 'Senior', city: 'Mogilev', date: '07/24/2016', tech: 'C#',
  },
  {
    salary: 1986, qualification: 'Senior', city: 'Gomel', date: '02/11/2016', tech: 'Ruby',
  },
  {
    salary: 2920, qualification: 'Senior', city: 'Grodno', date: '10/29/2016', tech: 'C#',
  },
  {
    salary: 1971, qualification: 'Senior', city: 'Vitebsk', date: '10/09/2016', tech: 'R',
  },
  {
    salary: 2572, qualification: 'Senior', city: 'Grodno', date: '11/30/2016', tech: 'C#',
  },
  {
    salary: 2708, qualification: 'Senior', city: 'Gomel', date: '12/21/2017', tech: 'R',
  },
  {
    salary: 2020, qualification: 'Senior', city: 'Gomel', date: '12/31/2016', tech: 'Python',
  },
  {
    salary: 2731, qualification: 'Senior', city: 'Mogilev', date: '10/25/2016', tech: 'Java',
  },
  {
    salary: 2303, qualification: 'Senior', city: 'Brest', date: '08/20/2017', tech: 'Java',
  },
  {
    salary: 2667, qualification: 'Senior', city: 'Vitebsk', date: '06/10/2017', tech: 'C#',
  },
  {
    salary: 1770, qualification: 'Senior', city: 'Minsk', date: '06/11/2017', tech: 'C#',
  },
  {
    salary: 2287, qualification: 'Senior', city: 'Minsk', date: '03/17/2016', tech: 'C#',
  },
  {
    salary: 2548, qualification: 'Senior', city: 'Brest', date: '10/09/2017', tech: 'Python',
  },
  {
    salary: 2379, qualification: 'Senior', city: 'Mogilev', date: '09/07/2016', tech: 'C#',
  },
  {
    salary: 2570, qualification: 'Senior', city: 'Gomel', date: '11/29/2016', tech: 'R',
  },
  {
    salary: 2340, qualification: 'Senior', city: 'Grodno', date: '07/30/2016', tech: 'Ruby',
  },
  {
    salary: 2934, qualification: 'Senior', city: 'Grodno', date: '02/03/2018', tech: 'C#',
  },
  {
    salary: 2102, qualification: 'Senior', city: 'Vitebsk', date: '12/23/2017', tech: 'JS',
  },
  {
    salary: 2772, qualification: 'Senior', city: 'Grodno', date: '08/26/2017', tech: 'Ruby',
  },
  {
    salary: 1667, qualification: 'Senior', city: 'Vitebsk', date: '03/15/2018', tech: 'JS',
  },
  {
    salary: 1733, qualification: 'Senior', city: 'Mogilev', date: '03/10/2018', tech: 'C#',
  },
  {
    salary: 2409, qualification: 'Senior', city: 'Vitebsk', date: '03/06/2016', tech: 'R',
  },
  {
    salary: 2589, qualification: 'Senior', city: 'Mogilev', date: '08/09/2017', tech: 'JS',
  },
  {
    salary: 2311, qualification: 'Senior', city: 'Gomel', date: '12/19/2017', tech: 'Ruby',
  },
  {
    salary: 2441, qualification: 'Senior', city: 'Minsk', date: '11/05/2017', tech: 'C#',
  },
  {
    salary: 2006, qualification: 'Senior', city: 'Minsk', date: '02/08/2016', tech: 'C#',
  },
  {
    salary: 2084, qualification: 'Senior', city: 'Minsk', date: '01/23/2016', tech: 'Ruby',
  },
  {
    salary: 2979, qualification: 'Senior', city: 'Minsk', date: '04/12/2017', tech: 'R',
  },
  {
    salary: 2865, qualification: 'Senior', city: 'Mogilev', date: '03/19/2018', tech: 'JS',
  },
  {
    salary: 2112, qualification: 'Senior', city: 'Mogilev', date: '01/09/2017', tech: 'R',
  },
  {
    salary: 2208, qualification: 'Senior', city: 'Minsk', date: '10/28/2017', tech: 'Python',
  },
  {
    salary: 2080, qualification: 'Senior', city: 'Mogilev', date: '03/13/2018', tech: 'C#',
  },
  {
    salary: 2106, qualification: 'Senior', city: 'Gomel', date: '04/13/2018', tech: 'Ruby',
  },
  {
    salary: 1795, qualification: 'Senior', city: 'Vitebsk', date: '04/23/2016', tech: 'R',
  },
  {
    salary: 2639, qualification: 'Senior', city: 'Brest', date: '06/14/2017', tech: 'Ruby',
  },
  {
    salary: 1752, qualification: 'Senior', city: 'Vitebsk', date: '02/03/2016', tech: 'Python',
  },
  {
    salary: 2351, qualification: 'Senior', city: 'Vitebsk', date: '04/19/2017', tech: 'R',
  },
  {
    salary: 1751, qualification: 'Senior', city: 'Mogilev', date: '09/09/2017', tech: 'Java',
  },
  {
    salary: 2335, qualification: 'Senior', city: 'Grodno', date: '06/03/2016', tech: 'JS',
  },
  {
    salary: 1875, qualification: 'Senior', city: 'Minsk', date: '03/07/2017', tech: 'R',
  },
  {
    salary: 1865, qualification: 'Senior', city: 'Brest', date: '03/07/2018', tech: 'R',
  },
  {
    salary: 2277, qualification: 'Senior', city: 'Mogilev', date: '09/24/2016', tech: 'JS',
  },
  {
    salary: 2562, qualification: 'Senior', city: 'Mogilev', date: '08/10/2017', tech: 'Java',
  },
  {
    salary: 1899, qualification: 'Senior', city: 'Gomel', date: '05/04/2016', tech: 'JS',
  },
  {
    salary: 1859, qualification: 'Senior', city: 'Brest', date: '08/06/2017', tech: 'Ruby',
  },
  {
    salary: 2275, qualification: 'Senior', city: 'Vitebsk', date: '12/30/2017', tech: 'Python',
  },
  {
    salary: 2213, qualification: 'Senior', city: 'Gomel', date: '03/30/2017', tech: 'Java',
  },
  {
    salary: 1834, qualification: 'Senior', city: 'Grodno', date: '10/21/2016', tech: 'JS',
  },
  {
    salary: 2965, qualification: 'Senior', city: 'Gomel', date: '12/02/2017', tech: 'R',
  },
  {
    salary: 2205, qualification: 'Senior', city: 'Mogilev', date: '04/09/2017', tech: 'Python',
  },
  {
    salary: 2711, qualification: 'Senior', city: 'Minsk', date: '10/08/2017', tech: 'Ruby',
  },
  {
    salary: 2165, qualification: 'Senior', city: 'Vitebsk', date: '02/21/2018', tech: 'Ruby',
  },
  {
    salary: 2455, qualification: 'Senior', city: 'Grodno', date: '01/12/2017', tech: 'Python',
  },
  {
    salary: 2122, qualification: 'Senior', city: 'Gomel', date: '07/13/2016', tech: 'C#',
  },
  {
    salary: 2437, qualification: 'Senior', city: 'Grodno', date: '02/28/2016', tech: 'Ruby',
  },
  {
    salary: 2165, qualification: 'Senior', city: 'Grodno', date: '02/03/2016', tech: 'JS',
  },
  {
    salary: 2790, qualification: 'Senior', city: 'Gomel', date: '11/09/2017', tech: 'C#',
  },
  {
    salary: 2848, qualification: 'Senior', city: 'Grodno', date: '02/27/2017', tech: 'R',
  },
  {
    salary: 1947, qualification: 'Senior', city: 'Minsk', date: '06/01/2016', tech: 'Ruby',
  },
  {
    salary: 2203, qualification: 'Senior', city: 'Brest', date: '02/05/2017', tech: 'Python',
  },
  {
    salary: 2973, qualification: 'Senior', city: 'Gomel', date: '12/14/2016', tech: 'R',
  },
  {
    salary: 2386, qualification: 'Senior', city: 'Minsk', date: '08/15/2017', tech: 'Python',
  },
  {
    salary: 1901, qualification: 'Senior', city: 'Minsk', date: '08/09/2016', tech: 'JS',
  },
  {
    salary: 2283, qualification: 'Senior', city: 'Grodno', date: '04/01/2018', tech: 'Python',
  },
  {
    salary: 1684, qualification: 'Senior', city: 'Gomel', date: '03/07/2017', tech: 'Ruby',
  },
  {
    salary: 1816, qualification: 'Senior', city: 'Gomel', date: '04/21/2017', tech: 'JS',
  },
  {
    salary: 2720, qualification: 'Senior', city: 'Minsk', date: '04/23/2017', tech: 'R',
  },
  {
    salary: 2848, qualification: 'Senior', city: 'Grodno', date: '05/01/2016', tech: 'Ruby',
  },
  {
    salary: 1820, qualification: 'Senior', city: 'Brest', date: '02/19/2018', tech: 'Python',
  },
  {
    salary: 2275, qualification: 'Senior', city: 'Gomel', date: '03/12/2018', tech: 'JS',
  },
  {
    salary: 1945, qualification: 'Senior', city: 'Brest', date: '01/20/2016', tech: 'Ruby',
  },
  {
    salary: 2540, qualification: 'Senior', city: 'Mogilev', date: '08/11/2017', tech: 'C#',
  },
  {
    salary: 2469, qualification: 'Senior', city: 'Grodno', date: '04/29/2016', tech: 'R',
  },
  {
    salary: 2692, qualification: 'Senior', city: 'Brest', date: '08/18/2016', tech: 'R',
  },
  {
    salary: 2046, qualification: 'Senior', city: 'Brest', date: '12/06/2016', tech: 'R',
  },
  {
    salary: 1816, qualification: 'Senior', city: 'Vitebsk', date: '02/24/2017', tech: 'R',
  },
  {
    salary: 2760, qualification: 'Senior', city: 'Mogilev', date: '09/02/2017', tech: 'Java',
  },
  {
    salary: 1955, qualification: 'Senior', city: 'Grodno', date: '04/12/2016', tech: 'C#',
  },
  {
    salary: 2430, qualification: 'Senior', city: 'Mogilev', date: '04/22/2018', tech: 'Ruby',
  },
  {
    salary: 2607, qualification: 'Senior', city: 'Gomel', date: '12/22/2016', tech: 'C#',
  },
  {
    salary: 2832, qualification: 'Senior', city: 'Brest', date: '09/10/2016', tech: 'Ruby',
  },
  {
    salary: 2312, qualification: 'Senior', city: 'Brest', date: '02/01/2016', tech: 'C#',
  },
  {
    salary: 2550, qualification: 'Senior', city: 'Vitebsk', date: '07/11/2017', tech: 'Ruby',
  },
  {
    salary: 2486, qualification: 'Senior', city: 'Mogilev', date: '03/25/2017', tech: 'Java',
  },
  {
    salary: 1685, qualification: 'Senior', city: 'Brest', date: '12/08/2017', tech: 'R',
  },
  {
    salary: 2136, qualification: 'Senior', city: 'Mogilev', date: '12/13/2017', tech: 'R',
  },
  {
    salary: 2282, qualification: 'Senior', city: 'Grodno', date: '12/17/2016', tech: 'C#',
  },
  {
    salary: 2402, qualification: 'Senior', city: 'Minsk', date: '08/31/2016', tech: 'Java',
  },
  {
    salary: 2473, qualification: 'Senior', city: 'Minsk', date: '12/07/2016', tech: 'Ruby',
  },
  {
    salary: 2756, qualification: 'Senior', city: 'Gomel', date: '12/07/2016', tech: 'JS',
  },
  {
    salary: 2598, qualification: 'Senior', city: 'Gomel', date: '03/03/2018', tech: 'JS',
  },
  {
    salary: 2317, qualification: 'Senior', city: 'Vitebsk', date: '06/10/2017', tech: 'R',
  },
  {
    salary: 2660, qualification: 'Senior', city: 'Brest', date: '11/16/2016', tech: 'R',
  },
  {
    salary: 1927, qualification: 'Senior', city: 'Gomel', date: '07/16/2017', tech: 'Java',
  },
  {
    salary: 1706, qualification: 'Senior', city: 'Mogilev', date: '06/18/2016', tech: 'R',
  },
  {
    salary: 2496, qualification: 'Senior', city: 'Grodno', date: '02/13/2017', tech: 'Java',
  },
  {
    salary: 2190, qualification: 'Senior', city: 'Gomel', date: '09/07/2017', tech: 'Ruby',
  },
  {
    salary: 2486, qualification: 'Senior', city: 'Mogilev', date: '02/01/2016', tech: 'Ruby',
  },
  {
    salary: 2410, qualification: 'Senior', city: 'Vitebsk', date: '05/23/2017', tech: 'JS',
  },
  {
    salary: 2422, qualification: 'Senior', city: 'Mogilev', date: '08/08/2016', tech: 'Python',
  },
  {
    salary: 1915, qualification: 'Senior', city: 'Brest', date: '10/11/2017', tech: 'Python',
  },
  {
    salary: 2847, qualification: 'Senior', city: 'Grodno', date: '03/10/2018', tech: 'C#',
  },
  {
    salary: 1931, qualification: 'Senior', city: 'Gomel', date: '10/23/2017', tech: 'Python',
  },
  {
    salary: 2870, qualification: 'Senior', city: 'Brest', date: '03/07/2017', tech: 'R',
  },
  {
    salary: 2911, qualification: 'Senior', city: 'Mogilev', date: '02/06/2017', tech: 'JS',
  },
  {
    salary: 2365, qualification: 'Senior', city: 'Gomel', date: '09/13/2017', tech: 'Python',
  },
  {
    salary: 2932, qualification: 'Senior', city: 'Grodno', date: '06/19/2017', tech: 'Python',
  },
  {
    salary: 2867, qualification: 'Senior', city: 'Mogilev', date: '11/22/2016', tech: 'Java',
  },
  {
    salary: 2929, qualification: 'Senior', city: 'Mogilev', date: '04/01/2018', tech: 'C#',
  },
  {
    salary: 2488, qualification: 'Senior', city: 'Mogilev', date: '01/13/2016', tech: 'Ruby',
  },
  {
    salary: 2949, qualification: 'Senior', city: 'Vitebsk', date: '08/06/2016', tech: 'Ruby',
  },
  {
    salary: 2080, qualification: 'Senior', city: 'Vitebsk', date: '05/18/2016', tech: 'Python',
  },
  {
    salary: 2018, qualification: 'Senior', city: 'Gomel', date: '03/27/2017', tech: 'Ruby',
  },
  {
    salary: 1694, qualification: 'Senior', city: 'Vitebsk', date: '02/25/2016', tech: 'C#',
  },
  {
    salary: 1909, qualification: 'Senior', city: 'Grodno', date: '02/24/2018', tech: 'R',
  },
  {
    salary: 2344, qualification: 'Senior', city: 'Gomel', date: '05/09/2016', tech: 'Java',
  },
  {
    salary: 1705, qualification: 'Senior', city: 'Vitebsk', date: '06/24/2017', tech: 'C#',
  },
  {
    salary: 2192, qualification: 'Senior', city: 'Vitebsk', date: '04/27/2017', tech: 'R',
  },
  {
    salary: 2383, qualification: 'Senior', city: 'Vitebsk', date: '06/05/2017', tech: 'C#',
  },
  {
    salary: 2355, qualification: 'Senior', city: 'Grodno', date: '06/02/2016', tech: 'Python',
  },
  {
    salary: 2209, qualification: 'Senior', city: 'Brest', date: '04/10/2018', tech: 'R',
  },
  {
    salary: 2107, qualification: 'Senior', city: 'Minsk', date: '11/27/2017', tech: 'R',
  },
  {
    salary: 2578, qualification: 'Senior', city: 'Grodno', date: '09/06/2016', tech: 'Java',
  },
  {
    salary: 2248, qualification: 'Senior', city: 'Grodno', date: '06/22/2017', tech: 'Java',
  },
  {
    salary: 2814, qualification: 'Senior', city: 'Brest', date: '06/01/2016', tech: 'R',
  },
  {
    salary: 2900, qualification: 'Senior', city: 'Brest', date: '09/27/2016', tech: 'R',
  },
  {
    salary: 2891, qualification: 'Senior', city: 'Brest', date: '01/14/2018', tech: 'JS',
  },
  {
    salary: 1986, qualification: 'Senior', city: 'Vitebsk', date: '01/26/2018', tech: 'JS',
  },
  {
    salary: 1705, qualification: 'Senior', city: 'Brest', date: '12/01/2016', tech: 'Java',
  },
  {
    salary: 2624, qualification: 'Senior', city: 'Brest', date: '01/18/2018', tech: 'Ruby',
  },
  {
    salary: 2462, qualification: 'Senior', city: 'Grodno', date: '02/17/2017', tech: 'C#',
  },
  {
    salary: 2261, qualification: 'Senior', city: 'Grodno', date: '04/02/2017', tech: 'Java',
  },
  {
    salary: 1929, qualification: 'Senior', city: 'Brest', date: '03/26/2017', tech: 'R',
  },
  {
    salary: 2009, qualification: 'Senior', city: 'Vitebsk', date: '02/06/2018', tech: 'C#',
  },
  {
    salary: 2478, qualification: 'Senior', city: 'Grodno', date: '10/22/2017', tech: 'Ruby',
  },
  {
    salary: 2951, qualification: 'Senior', city: 'Grodno', date: '10/14/2017', tech: 'R',
  },
  {
    salary: 1800, qualification: 'Senior', city: 'Mogilev', date: '09/22/2016', tech: 'Ruby',
  },
  {
    salary: 2089, qualification: 'Senior', city: 'Minsk', date: '01/14/2018', tech: 'C#',
  },
  {
    salary: 2427, qualification: 'Senior', city: 'Gomel', date: '02/22/2016', tech: 'JS',
  },
  {
    salary: 2713, qualification: 'Senior', city: 'Mogilev', date: '06/10/2016', tech: 'Ruby',
  },
  {
    salary: 2902, qualification: 'Senior', city: 'Brest', date: '09/19/2016', tech: 'Python',
  },
  {
    salary: 1944, qualification: 'Senior', city: 'Grodno', date: '11/15/2017', tech: 'R',
  },
  {
    salary: 2249, qualification: 'Senior', city: 'Brest', date: '08/07/2016', tech: 'Java',
  },
  {
    salary: 1918, qualification: 'Senior', city: 'Mogilev', date: '03/06/2018', tech: 'Ruby',
  },
  {
    salary: 1707, qualification: 'Senior', city: 'Grodno', date: '02/14/2018', tech: 'JS',
  },
  {
    salary: 2059, qualification: 'Senior', city: 'Vitebsk', date: '03/21/2016', tech: 'Python',
  },
  {
    salary: 1704, qualification: 'Senior', city: 'Minsk', date: '02/15/2018', tech: 'C#',
  },
  {
    salary: 2884, qualification: 'Senior', city: 'Brest', date: '05/08/2016', tech: 'R',
  },
  {
    salary: 2428, qualification: 'Senior', city: 'Gomel', date: '08/08/2016', tech: 'C#',
  },
  {
    salary: 2452, qualification: 'Senior', city: 'Grodno', date: '04/14/2018', tech: 'JS',
  },
  {
    salary: 1936, qualification: 'Senior', city: 'Grodno', date: '01/21/2018', tech: 'JS',
  },
  {
    salary: 1844, qualification: 'Senior', city: 'Minsk', date: '05/25/2016', tech: 'Python',
  },
  {
    salary: 2469, qualification: 'Senior', city: 'Minsk', date: '07/27/2016', tech: 'JS',
  },
  {
    salary: 2461, qualification: 'Senior', city: 'Gomel', date: '02/19/2017', tech: 'Ruby',
  },
  {
    salary: 1651, qualification: 'Senior', city: 'Gomel', date: '12/12/2017', tech: 'Python',
  },
  {
    salary: 1651, qualification: 'Senior', city: 'Mogilev', date: '11/01/2017', tech: 'JS',
  },
  {
    salary: 2036, qualification: 'Senior', city: 'Brest', date: '01/07/2018', tech: 'R',
  },
  {
    salary: 2566, qualification: 'Senior', city: 'Brest', date: '12/20/2017', tech: 'Python',
  },
  {
    salary: 2381, qualification: 'Senior', city: 'Gomel', date: '03/13/2017', tech: 'R',
  },
  {
    salary: 2569, qualification: 'Senior', city: 'Minsk', date: '06/23/2017', tech: 'Python',
  },
  {
    salary: 1910, qualification: 'Senior', city: 'Minsk', date: '10/01/2017', tech: 'R',
  },
  {
    salary: 2288, qualification: 'Senior', city: 'Brest', date: '04/23/2018', tech: 'Ruby',
  },
  {
    salary: 2506, qualification: 'Senior', city: 'Grodno', date: '07/26/2017', tech: 'JS',
  },
  {
    salary: 2127, qualification: 'Senior', city: 'Gomel', date: '05/19/2017', tech: 'Ruby',
  },
  {
    salary: 2873, qualification: 'Senior', city: 'Vitebsk', date: '11/01/2016', tech: 'Java',
  },
  {
    salary: 2800, qualification: 'Senior', city: 'Grodno', date: '12/01/2017', tech: 'Python',
  },
  {
    salary: 2184, qualification: 'Senior', city: 'Vitebsk', date: '11/10/2017', tech: 'Java',
  },
  {
    salary: 2310, qualification: 'Senior', city: 'Brest', date: '10/18/2017', tech: 'Python',
  },
  {
    salary: 2057, qualification: 'Senior', city: 'Vitebsk', date: '03/30/2016', tech: 'C#',
  },
  {
    salary: 2307, qualification: 'Senior', city: 'Grodno', date: '07/13/2017', tech: 'JS',
  },
  {
    salary: 1957, qualification: 'Senior', city: 'Minsk', date: '10/25/2017', tech: 'Java',
  },
  {
    salary: 2414, qualification: 'Senior', city: 'Minsk', date: '04/17/2017', tech: 'R',
  },
  {
    salary: 1685, qualification: 'Senior', city: 'Brest', date: '05/12/2016', tech: 'Ruby',
  },
  {
    salary: 1679, qualification: 'Senior', city: 'Vitebsk', date: '02/07/2016', tech: 'Python',
  },
  {
    salary: 1831, qualification: 'Senior', city: 'Gomel', date: '01/20/2016', tech: 'JS',
  },
  {
    salary: 2976, qualification: 'Senior', city: 'Gomel', date: '04/18/2016', tech: 'C#',
  },
  {
    salary: 2777, qualification: 'Senior', city: 'Mogilev', date: '11/14/2017', tech: 'JS',
  },
  {
    salary: 1950, qualification: 'Senior', city: 'Vitebsk', date: '08/16/2016', tech: 'Ruby',
  },
  {
    salary: 2024, qualification: 'Senior', city: 'Mogilev', date: '02/02/2018', tech: 'Ruby',
  },
  {
    salary: 1870, qualification: 'Senior', city: 'Gomel', date: '09/10/2016', tech: 'Ruby',
  },
  {
    salary: 1869, qualification: 'Senior', city: 'Grodno', date: '08/24/2016', tech: 'R',
  },
  {
    salary: 2956, qualification: 'Senior', city: 'Gomel', date: '04/25/2018', tech: 'Ruby',
  },
  {
    salary: 1825, qualification: 'Senior', city: 'Gomel', date: '01/14/2017', tech: 'R',
  },
  {
    salary: 2673, qualification: 'Senior', city: 'Brest', date: '05/12/2017', tech: 'JS',
  },
  {
    salary: 1859, qualification: 'Senior', city: 'Grodno', date: '08/05/2017', tech: 'R',
  },
  {
    salary: 2187, qualification: 'Senior', city: 'Gomel', date: '07/23/2017', tech: 'JS',
  },
  {
    salary: 1914, qualification: 'Senior', city: 'Grodno', date: '10/07/2017', tech: 'Java',
  },
  {
    salary: 1913, qualification: 'Senior', city: 'Gomel', date: '05/05/2016', tech: 'JS',
  },
  {
    salary: 2777, qualification: 'Senior', city: 'Gomel', date: '07/16/2016', tech: 'JS',
  },
  {
    salary: 2806, qualification: 'Senior', city: 'Vitebsk', date: '08/21/2017', tech: 'Ruby',
  },
  {
    salary: 2157, qualification: 'Senior', city: 'Grodno', date: '06/03/2017', tech: 'R',
  },
  {
    salary: 2230, qualification: 'Senior', city: 'Minsk', date: '04/06/2017', tech: 'C#',
  },
  {
    salary: 2762, qualification: 'Senior', city: 'Gomel', date: '11/13/2017', tech: 'Java',
  },
  {
    salary: 1764, qualification: 'Senior', city: 'Mogilev', date: '09/24/2016', tech: 'Java',
  },
  {
    salary: 1970, qualification: 'Senior', city: 'Grodno', date: '06/25/2017', tech: 'JS',
  },
  {
    salary: 2355, qualification: 'Senior', city: 'Grodno', date: '11/19/2017', tech: 'JS',
  },
  {
    salary: 1814, qualification: 'Senior', city: 'Vitebsk', date: '03/17/2016', tech: 'C#',
  },
  {
    salary: 2702, qualification: 'Senior', city: 'Brest', date: '06/06/2016', tech: 'Python',
  },
  {
    salary: 2102, qualification: 'Senior', city: 'Brest', date: '12/04/2017', tech: 'Python',
  },
  {
    salary: 2171, qualification: 'Senior', city: 'Mogilev', date: '11/21/2016', tech: 'C#',
  },
  {
    salary: 2513, qualification: 'Senior', city: 'Grodno', date: '04/14/2016', tech: 'JS',
  },
  {
    salary: 2551, qualification: 'Senior', city: 'Gomel', date: '01/29/2016', tech: 'JS',
  },
  {
    salary: 1813, qualification: 'Senior', city: 'Vitebsk', date: '02/19/2016', tech: 'Python',
  },
  {
    salary: 1775, qualification: 'Senior', city: 'Brest', date: '06/10/2016', tech: 'R',
  },
  {
    salary: 2929, qualification: 'Senior', city: 'Mogilev', date: '07/01/2017', tech: 'Python',
  },
  {
    salary: 2362, qualification: 'Senior', city: 'Gomel', date: '10/19/2017', tech: 'Java',
  },
  {
    salary: 1674, qualification: 'Senior', city: 'Grodno', date: '09/09/2017', tech: 'JS',
  },
  {
    salary: 2795, qualification: 'Senior', city: 'Gomel', date: '01/29/2017', tech: 'Python',
  },
  {
    salary: 1992, qualification: 'Senior', city: 'Vitebsk', date: '03/25/2017', tech: 'JS',
  },
  {
    salary: 1755, qualification: 'Senior', city: 'Gomel', date: '04/25/2017', tech: 'JS',
  },
  {
    salary: 2506, qualification: 'Senior', city: 'Grodno', date: '09/03/2016', tech: 'Python',
  },
  {
    salary: 2172, qualification: 'Senior', city: 'Minsk', date: '02/02/2016', tech: 'Ruby',
  },
  {
    salary: 2744, qualification: 'Senior', city: 'Grodno', date: '11/05/2016', tech: 'R',
  },
  {
    salary: 2789, qualification: 'Senior', city: 'Grodno', date: '02/27/2016', tech: 'JS',
  },
  {
    salary: 1988, qualification: 'Senior', city: 'Brest', date: '11/29/2016', tech: 'Ruby',
  },
  {
    salary: 2317, qualification: 'Senior', city: 'Vitebsk', date: '10/05/2017', tech: 'C#',
  },
  {
    salary: 1955, qualification: 'Senior', city: 'Gomel', date: '04/08/2016', tech: 'Python',
  },
  {
    salary: 1688, qualification: 'Senior', city: 'Mogilev', date: '01/22/2018', tech: 'Python',
  },
  {
    salary: 2129, qualification: 'Senior', city: 'Gomel', date: '05/23/2017', tech: 'Ruby',
  },
  {
    salary: 1667, qualification: 'Senior', city: 'Minsk', date: '07/21/2016', tech: 'Ruby',
  },
  {
    salary: 2842, qualification: 'Senior', city: 'Gomel', date: '02/29/2016', tech: 'Java',
  },
  {
    salary: 1773, qualification: 'Senior', city: 'Minsk', date: '03/10/2017', tech: 'Ruby',
  },
  {
    salary: 2872, qualification: 'Senior', city: 'Mogilev', date: '02/05/2018', tech: 'Ruby',
  },
  {
    salary: 2181, qualification: 'Senior', city: 'Minsk', date: '01/27/2016', tech: 'Ruby',
  },
  {
    salary: 2251, qualification: 'Senior', city: 'Grodno', date: '11/09/2016', tech: 'JS',
  },
  {
    salary: 1832, qualification: 'Senior', city: 'Brest', date: '05/17/2017', tech: 'Python',
  },
  {
    salary: 2436, qualification: 'Senior', city: 'Vitebsk', date: '02/03/2018', tech: 'Ruby',
  },
  {
    salary: 2664, qualification: 'Senior', city: 'Brest', date: '04/08/2018', tech: 'C#',
  },
  {
    salary: 1778, qualification: 'Senior', city: 'Brest', date: '08/02/2017', tech: 'Ruby',
  },
  {
    salary: 1910, qualification: 'Senior', city: 'Mogilev', date: '01/16/2016', tech: 'C#',
  },
  {
    salary: 1962, qualification: 'Senior', city: 'Vitebsk', date: '07/01/2017', tech: 'C#',
  },
  {
    salary: 1904, qualification: 'Senior', city: 'Vitebsk', date: '07/08/2017', tech: 'C#',
  },
  {
    salary: 1755, qualification: 'Senior', city: 'Gomel', date: '03/18/2016', tech: 'C#',
  },
  {
    salary: 1986, qualification: 'Senior', city: 'Mogilev', date: '06/24/2017', tech: 'JS',
  },
  {
    salary: 2244, qualification: 'Senior', city: 'Brest', date: '01/05/2017', tech: 'R',
  },
  {
    salary: 2406, qualification: 'Senior', city: 'Gomel', date: '01/02/2017', tech: 'JS',
  },
  {
    salary: 2734, qualification: 'Senior', city: 'Mogilev', date: '01/27/2017', tech: 'Ruby',
  },
  {
    salary: 2034, qualification: 'Senior', city: 'Vitebsk', date: '09/25/2017', tech: 'Ruby',
  },
  {
    salary: 1816, qualification: 'Senior', city: 'Gomel', date: '02/28/2018', tech: 'JS',
  },
  {
    salary: 2976, qualification: 'Senior', city: 'Gomel', date: '06/08/2016', tech: 'C#',
  },
  {
    salary: 2914, qualification: 'Senior', city: 'Grodno', date: '11/16/2016', tech: 'R',
  },
  {
    salary: 2043, qualification: 'Senior', city: 'Minsk', date: '03/08/2017', tech: 'C#',
  },
  {
    salary: 2667, qualification: 'Senior', city: 'Brest', date: '09/04/2016', tech: 'Java',
  },
  {
    salary: 2846, qualification: 'Senior', city: 'Minsk', date: '03/02/2016', tech: 'Ruby',
  },
  {
    salary: 2946, qualification: 'Senior', city: 'Minsk', date: '12/05/2017', tech: 'R',
  },
  {
    salary: 2687, qualification: 'Senior', city: 'Mogilev', date: '03/14/2016', tech: 'Java',
  },
  {
    salary: 2547, qualification: 'Senior', city: 'Mogilev', date: '04/17/2018', tech: 'C#',
  },
  {
    salary: 2720, qualification: 'Senior', city: 'Brest', date: '04/30/2017', tech: 'C#',
  },
  {
    salary: 2982, qualification: 'Senior', city: 'Gomel', date: '07/21/2017', tech: 'Java',
  },
  {
    salary: 2634, qualification: 'Senior', city: 'Brest', date: '10/14/2016', tech: 'C#',
  },
  {
    salary: 2541, qualification: 'Senior', city: 'Gomel', date: '03/14/2016', tech: 'JS',
  },
  {
    salary: 2694, qualification: 'Senior', city: 'Grodno', date: '11/11/2016', tech: 'C#',
  },
  {
    salary: 2570, qualification: 'Senior', city: 'Minsk', date: '04/08/2018', tech: 'JS',
  },
  {
    salary: 2390, qualification: 'Senior', city: 'Mogilev', date: '01/18/2017', tech: 'Python',
  },
  {
    salary: 2784, qualification: 'Senior', city: 'Grodno', date: '12/20/2017', tech: 'JS',
  },
  {
    salary: 2786, qualification: 'Senior', city: 'Vitebsk', date: '08/19/2016', tech: 'Java',
  },
  {
    salary: 2237, qualification: 'Senior', city: 'Vitebsk', date: '07/28/2016', tech: 'Ruby',
  },
  {
    salary: 2939, qualification: 'Senior', city: 'Minsk', date: '02/04/2017', tech: 'C#',
  },
  {
    salary: 2912, qualification: 'Senior', city: 'Gomel', date: '03/06/2018', tech: 'Java',
  },
  {
    salary: 2569, qualification: 'Senior', city: 'Gomel', date: '04/17/2017', tech: 'Ruby',
  },
  {
    salary: 1969, qualification: 'Senior', city: 'Gomel', date: '06/18/2016', tech: 'JS',
  },
  {
    salary: 2582, qualification: 'Senior', city: 'Grodno', date: '04/17/2016', tech: 'Java',
  },
  {
    salary: 2718, qualification: 'Senior', city: 'Vitebsk', date: '12/12/2016', tech: 'JS',
  },
  {
    salary: 2535, qualification: 'Senior', city: 'Minsk', date: '12/04/2017', tech: 'JS',
  },
  {
    salary: 2424, qualification: 'Senior', city: 'Vitebsk', date: '07/15/2017', tech: 'Ruby',
  },
  {
    salary: 2197, qualification: 'Senior', city: 'Mogilev', date: '03/14/2018', tech: 'R',
  },
  {
    salary: 2020, qualification: 'Senior', city: 'Gomel', date: '01/07/2017', tech: 'JS',
  },
  {
    salary: 2260, qualification: 'Senior', city: 'Grodno', date: '01/20/2017', tech: 'Ruby',
  },
  {
    salary: 2917, qualification: 'Senior', city: 'Vitebsk', date: '05/23/2016', tech: 'Python',
  },
  {
    salary: 2059, qualification: 'Senior', city: 'Vitebsk', date: '06/22/2017', tech: 'Ruby',
  },
  {
    salary: 2498, qualification: 'Senior', city: 'Vitebsk', date: '03/01/2018', tech: 'Ruby',
  },
  {
    salary: 2305, qualification: 'Senior', city: 'Vitebsk', date: '06/30/2016', tech: 'C#',
  },
  {
    salary: 1866, qualification: 'Senior', city: 'Mogilev', date: '07/03/2017', tech: 'Ruby',
  },
  {
    salary: 2638, qualification: 'Senior', city: 'Vitebsk', date: '05/21/2016', tech: 'Ruby',
  },
  {
    salary: 2920, qualification: 'Senior', city: 'Vitebsk', date: '03/19/2017', tech: 'Python',
  },
  {
    salary: 2098, qualification: 'Senior', city: 'Vitebsk', date: '09/25/2017', tech: 'C#',
  },
  {
    salary: 2671, qualification: 'Senior', city: 'Mogilev', date: '08/20/2016', tech: 'Ruby',
  },
  {
    salary: 2345, qualification: 'Senior', city: 'Brest', date: '07/29/2017', tech: 'R',
  },
  {
    salary: 2343, qualification: 'Senior', city: 'Vitebsk', date: '06/30/2016', tech: 'C#',
  },
  {
    salary: 2499, qualification: 'Senior', city: 'Grodno', date: '05/15/2017', tech: 'Ruby',
  },
  {
    salary: 2921, qualification: 'Senior', city: 'Brest', date: '10/24/2016', tech: 'R',
  },
  {
    salary: 1973, qualification: 'Senior', city: 'Mogilev', date: '09/04/2017', tech: 'Ruby',
  },
  {
    salary: 1869, qualification: 'Senior', city: 'Mogilev', date: '10/05/2017', tech: 'Ruby',
  },
  {
    salary: 2753, qualification: 'Senior', city: 'Mogilev', date: '08/12/2017', tech: 'R',
  },
  {
    salary: 2057, qualification: 'Senior', city: 'Gomel', date: '04/22/2018', tech: 'C#',
  },
  {
    salary: 2030, qualification: 'Senior', city: 'Gomel', date: '11/26/2017', tech: 'Ruby',
  },
  {
    salary: 2260, qualification: 'Senior', city: 'Vitebsk', date: '10/18/2016', tech: 'Python',
  },
  {
    salary: 2030, qualification: 'Senior', city: 'Grodno', date: '06/08/2016', tech: 'Python',
  },
  {
    salary: 1911, qualification: 'Senior', city: 'Mogilev', date: '08/10/2016', tech: 'JS',
  },
  {
    salary: 2472, qualification: 'Senior', city: 'Mogilev', date: '04/05/2018', tech: 'Ruby',
  },
  {
    salary: 2122, qualification: 'Senior', city: 'Minsk', date: '08/06/2016', tech: 'R',
  },
  {
    salary: 2382, qualification: 'Senior', city: 'Grodno', date: '02/05/2018', tech: 'JS',
  },
  {
    salary: 2335, qualification: 'Senior', city: 'Grodno', date: '04/30/2017', tech: 'Java',
  },
  {
    salary: 2736, qualification: 'Senior', city: 'Gomel', date: '04/11/2018', tech: 'Java',
  },
  {
    salary: 2282, qualification: 'Senior', city: 'Vitebsk', date: '03/17/2017', tech: 'JS',
  },
  {
    salary: 2486, qualification: 'Senior', city: 'Minsk', date: '05/09/2016', tech: 'R',
  },
  {
    salary: 2696, qualification: 'Senior', city: 'Grodno', date: '12/23/2016', tech: 'Java',
  },
  {
    salary: 2592, qualification: 'Senior', city: 'Brest', date: '08/05/2017', tech: 'R',
  },
  {
    salary: 2422, qualification: 'Senior', city: 'Gomel', date: '12/31/2017', tech: 'Python',
  },
  {
    salary: 2519, qualification: 'Senior', city: 'Grodno', date: '06/22/2016', tech: 'Python',
  },
  {
    salary: 2430, qualification: 'Senior', city: 'Brest', date: '11/13/2017', tech: 'R',
  },
  {
    salary: 2928, qualification: 'Senior', city: 'Brest', date: '09/05/2016', tech: 'Java',
  },
  {
    salary: 1937, qualification: 'Senior', city: 'Grodno', date: '05/10/2016', tech: 'C#',
  },
  {
    salary: 2427, qualification: 'Senior', city: 'Grodno', date: '03/09/2017', tech: 'Java',
  },
  {
    salary: 2649, qualification: 'Senior', city: 'Mogilev', date: '04/17/2016', tech: 'Ruby',
  },
  {
    salary: 2672, qualification: 'Senior', city: 'Vitebsk', date: '08/13/2017', tech: 'JS',
  },
  {
    salary: 2940, qualification: 'Senior', city: 'Grodno', date: '07/03/2016', tech: 'Python',
  },
  {
    salary: 2783, qualification: 'Senior', city: 'Minsk', date: '09/02/2016', tech: 'Python',
  },
  {
    salary: 2841, qualification: 'Senior', city: 'Vitebsk', date: '01/06/2018', tech: 'Ruby',
  },
  {
    salary: 1869, qualification: 'Senior', city: 'Vitebsk', date: '02/22/2016', tech: 'C#',
  },
  {
    salary: 2099, qualification: 'Senior', city: 'Minsk', date: '11/05/2017', tech: 'R',
  },
  {
    salary: 1813, qualification: 'Senior', city: 'Vitebsk', date: '03/02/2017', tech: 'Java',
  },
  {
    salary: 1849, qualification: 'Senior', city: 'Vitebsk', date: '11/19/2016', tech: 'Ruby',
  },
  {
    salary: 1990, qualification: 'Senior', city: 'Grodno', date: '11/06/2016', tech: 'Python',
  },
  {
    salary: 1869, qualification: 'Senior', city: 'Gomel', date: '01/11/2018', tech: 'C#',
  },
  {
    salary: 2858, qualification: 'Senior', city: 'Brest', date: '03/01/2018', tech: 'Ruby',
  },
  {
    salary: 2899, qualification: 'Senior', city: 'Grodno', date: '08/25/2016', tech: 'Ruby',
  },
  {
    salary: 2798, qualification: 'Senior', city: 'Gomel', date: '03/27/2018', tech: 'C#',
  },
  {
    salary: 2834, qualification: 'Senior', city: 'Mogilev', date: '02/01/2016', tech: 'Ruby',
  },
  {
    salary: 2234, qualification: 'Senior', city: 'Brest', date: '11/11/2017', tech: 'R',
  },
  {
    salary: 2815, qualification: 'Senior', city: 'Brest', date: '01/31/2018', tech: 'Python',
  },
  {
    salary: 1766, qualification: 'Senior', city: 'Grodno', date: '10/10/2017', tech: 'Ruby',
  },
  {
    salary: 1703, qualification: 'Senior', city: 'Vitebsk', date: '01/07/2017', tech: 'R',
  },
  {
    salary: 2689, qualification: 'Senior', city: 'Mogilev', date: '09/08/2017', tech: 'R',
  },
  {
    salary: 1797, qualification: 'Senior', city: 'Mogilev', date: '08/06/2017', tech: 'Python',
  },
  {
    salary: 2165, qualification: 'Senior', city: 'Vitebsk', date: '12/18/2017', tech: 'C#',
  },
  {
    salary: 2168, qualification: 'Senior', city: 'Mogilev', date: '06/09/2016', tech: 'C#',
  },
  {
    salary: 2087, qualification: 'Senior', city: 'Grodno', date: '11/02/2017', tech: 'Java',
  },
  {
    salary: 2553, qualification: 'Senior', city: 'Brest', date: '10/29/2016', tech: 'Python',
  },
  {
    salary: 2797, qualification: 'Senior', city: 'Mogilev', date: '03/21/2018', tech: 'Java',
  },
  {
    salary: 1906, qualification: 'Senior', city: 'Grodno', date: '05/09/2016', tech: 'Ruby',
  },
  {
    salary: 2905, qualification: 'Senior', city: 'Grodno', date: '10/10/2017', tech: 'Ruby',
  },
  {
    salary: 2457, qualification: 'Senior', city: 'Grodno', date: '05/12/2017', tech: 'JS',
  },
  {
    salary: 2200, qualification: 'Senior', city: 'Grodno', date: '12/04/2016', tech: 'JS',
  },
  {
    salary: 1970, qualification: 'Senior', city: 'Mogilev', date: '12/03/2017', tech: 'Python',
  },
  {
    salary: 2215, qualification: 'Senior', city: 'Gomel', date: '02/02/2016', tech: 'C#',
  },
  {
    salary: 2355, qualification: 'Senior', city: 'Vitebsk', date: '01/23/2017', tech: 'JS',
  },
  {
    salary: 2091, qualification: 'Senior', city: 'Grodno', date: '01/12/2017', tech: 'Ruby',
  },
  {
    salary: 2326, qualification: 'Senior', city: 'Mogilev', date: '04/22/2018', tech: 'C#',
  },
  {
    salary: 1819, qualification: 'Senior', city: 'Brest', date: '06/27/2017', tech: 'C#',
  },
  {
    salary: 1680, qualification: 'Senior', city: 'Mogilev', date: '03/27/2017', tech: 'Python',
  },
  {
    salary: 2432, qualification: 'Senior', city: 'Minsk', date: '02/26/2018', tech: 'R',
  },
  {
    salary: 1949, qualification: 'Senior', city: 'Grodno', date: '12/07/2016', tech: 'Python',
  },
  {
    salary: 1851, qualification: 'Senior', city: 'Minsk', date: '01/04/2016', tech: 'C#',
  },
  {
    salary: 1850, qualification: 'Senior', city: 'Vitebsk', date: '05/26/2016', tech: 'Python',
  },
  {
    salary: 1841, qualification: 'Senior', city: 'Brest', date: '04/20/2018', tech: 'C#',
  },
  {
    salary: 2533, qualification: 'Senior', city: 'Minsk', date: '11/29/2017', tech: 'JS',
  },
  {
    salary: 2665, qualification: 'Senior', city: 'Grodno', date: '04/07/2017', tech: 'Java',
  },
  {
    salary: 2939, qualification: 'Senior', city: 'Minsk', date: '10/25/2017', tech: 'Ruby',
  },
  {
    salary: 2142, qualification: 'Senior', city: 'Grodno', date: '05/27/2017', tech: 'R',
  },
  {
    salary: 2378, qualification: 'Senior', city: 'Grodno', date: '07/06/2016', tech: 'Python',
  },
  {
    salary: 2968, qualification: 'Senior', city: 'Minsk', date: '04/28/2016', tech: 'C#',
  },
  {
    salary: 2640, qualification: 'Senior', city: 'Grodno', date: '02/19/2016', tech: 'Ruby',
  },
  {
    salary: 2450, qualification: 'Senior', city: 'Gomel', date: '01/24/2018', tech: 'JS',
  },
  {
    salary: 2379, qualification: 'Senior', city: 'Brest', date: '07/17/2017', tech: 'C#',
  },
  {
    salary: 1965, qualification: 'Senior', city: 'Vitebsk', date: '01/12/2018', tech: 'Ruby',
  },
  {
    salary: 1892, qualification: 'Senior', city: 'Grodno', date: '03/10/2018', tech: 'R',
  },
  {
    salary: 2914, qualification: 'Senior', city: 'Grodno', date: '12/21/2017', tech: 'R',
  },
  {
    salary: 2848, qualification: 'Senior', city: 'Minsk', date: '11/24/2016', tech: 'R',
  },
  {
    salary: 2420, qualification: 'Senior', city: 'Minsk', date: '09/07/2017', tech: 'R',
  },
  {
    salary: 1653, qualification: 'Senior', city: 'Gomel', date: '05/14/2017', tech: 'Python',
  },
  {
    salary: 2691, qualification: 'Senior', city: 'Mogilev', date: '11/02/2017', tech: 'Ruby',
  },
  {
    salary: 2236, qualification: 'Senior', city: 'Gomel', date: '12/31/2017', tech: 'R',
  },
  {
    salary: 2713, qualification: 'Senior', city: 'Vitebsk', date: '01/17/2016', tech: 'C#',
  },
  {
    salary: 1786, qualification: 'Senior', city: 'Brest', date: '03/12/2016', tech: 'R',
  },
  {
    salary: 2076, qualification: 'Senior', city: 'Brest', date: '10/28/2016', tech: 'C#',
  },
  {
    salary: 2273, qualification: 'Senior', city: 'Brest', date: '09/03/2017', tech: 'JS',
  },
  {
    salary: 2195, qualification: 'Senior', city: 'Minsk', date: '06/06/2017', tech: 'C#',
  },
  {
    salary: 1797, qualification: 'Senior', city: 'Gomel', date: '01/10/2017', tech: 'Python',
  },
  {
    salary: 2860, qualification: 'Senior', city: 'Brest', date: '05/25/2017', tech: 'Ruby',
  },
  {
    salary: 2077, qualification: 'Senior', city: 'Vitebsk', date: '02/21/2017', tech: 'Python',
  },
  {
    salary: 2987, qualification: 'Senior', city: 'Mogilev', date: '01/29/2017', tech: 'C#',
  },
  {
    salary: 2025, qualification: 'Senior', city: 'Mogilev', date: '10/08/2017', tech: 'Ruby',
  },
  {
    salary: 2918, qualification: 'Senior', city: 'Mogilev', date: '03/01/2017', tech: 'C#',
  },
  {
    salary: 1921, qualification: 'Senior', city: 'Grodno', date: '11/03/2016', tech: 'C#',
  },
  {
    salary: 2352, qualification: 'Senior', city: 'Minsk', date: '08/01/2017', tech: 'Java',
  },
  {
    salary: 2754, qualification: 'Senior', city: 'Vitebsk', date: '03/20/2016', tech: 'JS',
  },
  {
    salary: 2257, qualification: 'Senior', city: 'Grodno', date: '09/22/2017', tech: 'Java',
  },
  {
    salary: 1854, qualification: 'Senior', city: 'Minsk', date: '03/06/2018', tech: 'C#',
  },
  {
    salary: 2015, qualification: 'Senior', city: 'Mogilev', date: '01/26/2018', tech: 'Python',
  },
  {
    salary: 1771, qualification: 'Senior', city: 'Grodno', date: '08/25/2017', tech: 'Python',
  },
  {
    salary: 2480, qualification: 'Senior', city: 'Brest', date: '05/17/2017', tech: 'Ruby',
  },
  {
    salary: 2664, qualification: 'Senior', city: 'Grodno', date: '10/23/2016', tech: 'Java',
  },
  {
    salary: 2828, qualification: 'Senior', city: 'Grodno', date: '03/09/2018', tech: 'R',
  },
  {
    salary: 1840, qualification: 'Senior', city: 'Minsk', date: '07/04/2017', tech: 'Ruby',
  },
  {
    salary: 2541, qualification: 'Senior', city: 'Grodno', date: '01/26/2017', tech: 'Java',
  },
  {
    salary: 2155, qualification: 'Senior', city: 'Vitebsk', date: '10/03/2016', tech: 'Ruby',
  },
  {
    salary: 1666, qualification: 'Senior', city: 'Gomel', date: '01/23/2016', tech: 'C#',
  },
  {
    salary: 2555, qualification: 'Senior', city: 'Minsk', date: '09/04/2016', tech: 'Java',
  },
  {
    salary: 2667, qualification: 'Senior', city: 'Vitebsk', date: '04/09/2016', tech: 'R',
  },
  {
    salary: 1949, qualification: 'Senior', city: 'Minsk', date: '03/04/2017', tech: 'Python',
  },
  {
    salary: 2625, qualification: 'Senior', city: 'Minsk', date: '04/04/2016', tech: 'Python',
  },
  {
    salary: 2138, qualification: 'Senior', city: 'Minsk', date: '02/15/2017', tech: 'JS',
  },
  {
    salary: 1781, qualification: 'Senior', city: 'Vitebsk', date: '07/19/2016', tech: 'Ruby',
  },
  {
    salary: 2115, qualification: 'Senior', city: 'Gomel', date: '12/15/2016', tech: 'Ruby',
  },
  {
    salary: 1714, qualification: 'Senior', city: 'Minsk', date: '08/17/2016', tech: 'C#',
  },
  {
    salary: 1994, qualification: 'Senior', city: 'Brest', date: '07/06/2016', tech: 'R',
  },
  {
    salary: 2155, qualification: 'Senior', city: 'Minsk', date: '09/29/2017', tech: 'Ruby',
  },
  {
    salary: 2137, qualification: 'Senior', city: 'Vitebsk', date: '02/26/2016', tech: 'R',
  },
  {
    salary: 2804, qualification: 'Senior', city: 'Grodno', date: '01/24/2018', tech: 'C#',
  },
  {
    salary: 2315, qualification: 'Senior', city: 'Mogilev', date: '01/12/2016', tech: 'Java',
  },
  {
    salary: 2070, qualification: 'Senior', city: 'Minsk', date: '05/14/2016', tech: 'C#',
  },
  {
    salary: 2817, qualification: 'Senior', city: 'Brest', date: '09/28/2017', tech: 'JS',
  },
  {
    salary: 2226, qualification: 'Senior', city: 'Minsk', date: '11/13/2016', tech: 'R',
  },
  {
    salary: 2929, qualification: 'Senior', city: 'Minsk', date: '07/04/2016', tech: 'C#',
  },
  {
    salary: 2107, qualification: 'Senior', city: 'Vitebsk', date: '11/17/2017', tech: 'Python',
  },
  {
    salary: 2564, qualification: 'Senior', city: 'Brest', date: '09/21/2016', tech: 'Ruby',
  },
  {
    salary: 2877, qualification: 'Senior', city: 'Gomel', date: '03/30/2016', tech: 'C#',
  },
  {
    salary: 2373, qualification: 'Senior', city: 'Minsk', date: '02/26/2018', tech: 'Ruby',
  },
  {
    salary: 1758, qualification: 'Senior', city: 'Mogilev', date: '03/06/2018', tech: 'Ruby',
  },
  {
    salary: 2063, qualification: 'Senior', city: 'Minsk', date: '01/05/2017', tech: 'R',
  },
  {
    salary: 2331, qualification: 'Senior', city: 'Gomel', date: '10/13/2016', tech: 'Java',
  },
  {
    salary: 2457, qualification: 'Senior', city: 'Grodno', date: '01/10/2017', tech: 'Python',
  },
  {
    salary: 2933, qualification: 'Senior', city: 'Minsk', date: '01/16/2018', tech: 'Ruby',
  },
  {
    salary: 1901, qualification: 'Senior', city: 'Vitebsk', date: '12/08/2017', tech: 'JS',
  },
  {
    salary: 2786, qualification: 'Senior', city: 'Grodno', date: '03/02/2016', tech: 'Python',
  },
  {
    salary: 2705, qualification: 'Senior', city: 'Grodno', date: '08/30/2016', tech: 'Ruby',
  },
  {
    salary: 2940, qualification: 'Senior', city: 'Vitebsk', date: '10/21/2016', tech: 'Ruby',
  },
  {
    salary: 1895, qualification: 'Senior', city: 'Grodno', date: '04/24/2018', tech: 'R',
  },
  {
    salary: 2886, qualification: 'Senior', city: 'Gomel', date: '04/17/2017', tech: 'R',
  },
  {
    salary: 2043, qualification: 'Senior', city: 'Minsk', date: '04/15/2017', tech: 'R',
  },
  {
    salary: 1981, qualification: 'Senior', city: 'Minsk', date: '11/16/2016', tech: 'Python',
  },
  {
    salary: 2746, qualification: 'Senior', city: 'Grodno', date: '06/05/2016', tech: 'Ruby',
  },
  {
    salary: 2981, qualification: 'Senior', city: 'Brest', date: '08/14/2017', tech: 'C#',
  },
  {
    salary: 2459, qualification: 'Senior', city: 'Gomel', date: '06/11/2017', tech: 'Python',
  },
  {
    salary: 2141, qualification: 'Senior', city: 'Minsk', date: '01/26/2018', tech: 'C#',
  },
  {
    salary: 2914, qualification: 'Senior', city: 'Mogilev', date: '03/04/2016', tech: 'JS',
  },
  {
    salary: 2866, qualification: 'Senior', city: 'Mogilev', date: '09/08/2016', tech: 'R',
  },
  {
    salary: 1997, qualification: 'Senior', city: 'Minsk', date: '12/28/2017', tech: 'R',
  },
  {
    salary: 1842, qualification: 'Senior', city: 'Mogilev', date: '03/18/2016', tech: 'JS',
  },
  {
    salary: 2797, qualification: 'Senior', city: 'Grodno', date: '02/15/2016', tech: 'C#',
  },
  {
    salary: 2530, qualification: 'Senior', city: 'Minsk', date: '02/18/2016', tech: 'C#',
  },
  {
    salary: 2082, qualification: 'Senior', city: 'Grodno', date: '02/19/2016', tech: 'Java',
  },
  {
    salary: 2958, qualification: 'Senior', city: 'Vitebsk', date: '08/29/2017', tech: 'Java',
  },
  {
    salary: 2450, qualification: 'Senior', city: 'Grodno', date: '07/26/2017', tech: 'Python',
  },
  {
    salary: 2187, qualification: 'Senior', city: 'Grodno', date: '01/28/2018', tech: 'C#',
  },
  {
    salary: 1715, qualification: 'Senior', city: 'Brest', date: '04/16/2017', tech: 'JS',
  },
  {
    salary: 2840, qualification: 'Senior', city: 'Mogilev', date: '05/02/2017', tech: 'R',
  },
  {
    salary: 2569, qualification: 'Senior', city: 'Brest', date: '07/05/2017', tech: 'C#',
  },
  {
    salary: 2107, qualification: 'Senior', city: 'Minsk', date: '10/23/2017', tech: 'Java',
  },
  {
    salary: 2236, qualification: 'Senior', city: 'Vitebsk', date: '02/08/2017', tech: 'Ruby',
  },
  {
    salary: 2828, qualification: 'Senior', city: 'Mogilev', date: '08/19/2016', tech: 'Ruby',
  },
  {
    salary: 1774, qualification: 'Senior', city: 'Gomel', date: '08/01/2016', tech: 'R',
  },
  {
    salary: 2938, qualification: 'Senior', city: 'Minsk', date: '07/20/2017', tech: 'C#',
  },
  {
    salary: 2666, qualification: 'Senior', city: 'Gomel', date: '07/25/2016', tech: 'JS',
  },
  {
    salary: 2556, qualification: 'Senior', city: 'Brest', date: '03/03/2018', tech: 'Python',
  },
  {
    salary: 2207, qualification: 'Senior', city: 'Mogilev', date: '09/18/2017', tech: 'Python',
  },
  {
    salary: 1716, qualification: 'Senior', city: 'Vitebsk', date: '08/27/2016', tech: 'JS',
  },
  {
    salary: 1900, qualification: 'Senior', city: 'Gomel', date: '03/31/2017', tech: 'Python',
  },
  {
    salary: 2617, qualification: 'Senior', city: 'Grodno', date: '07/29/2016', tech: 'JS',
  },
  {
    salary: 2130, qualification: 'Senior', city: 'Grodno', date: '06/13/2017', tech: 'Ruby',
  },
  {
    salary: 1660, qualification: 'Senior', city: 'Brest', date: '07/03/2016', tech: 'C#',
  },
  {
    salary: 2993, qualification: 'Senior', city: 'Vitebsk', date: '11/05/2017', tech: 'R',
  },
];


export default data;
