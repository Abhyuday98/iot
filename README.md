## Prerequisites 
1. You'll need to have setup a KAAIOT dashboard. Go through the following documentation to learn how to setup the KAAIOT dashbaord: https://docs.kaaiot.io/KAA/docs/v1.2.0/Welcome/
2. You'll need to replace you're the following two variables with your KAAIOT tokens and endpoits in the sendDataToKaaIOT.ipynb
```
ENDPOINT_TOKEN = "DfxM96LkQT" # Paste endpoint token
APPLICATION_VERSION = "bu29218547tsntf2sup0-v1"  # Paste application version
```
3. set up a telegram bot and connect it to a channel. You can refer to to following link https://core.telegram.org/bots. Replace the telegram url in the "telegramChannelUpdates.pynb" file
```
telegramURL = "https://api.telegram.org/bot733055974:AAEsyKoq3z5mquv0k_xmzugu_dej_1MbdtA/sendMessage?chat_id=-1001267215209&parse_mode=Markdown&text=" # replace with your url
``` 


## Set up database

1. You’ll need to set up a MySQL version 8 database. 
2. After you set it up you'll need to run to sql file inside the DatabaseSettings Folder.
3. You'll need to enter the database configurations into the three jupyter notebooks in the server folder under the variable 
```
database_settings = { "username": <change username>,
                     "password": <change password>,
                     "ip_address":<change ip address>,
                     "port": "3306",
                     "database_name": "iotg5"
                            }
```
---

## Set up requirenments on python backend server

Install the following libraries:
run: 
```
pip install pymysql sqlalchemy paho_mqtt 
```

## Run the server Jupyter notebooks

Next, you’ll need to run the three jupyter notebooks under the server folder.

1. Open "getDataFromRaspberryPi.ipynb" and click run all. 
2. Open "sendDataToKaaIOT.ipynb" and click run all.
3. Open "TelegramChannelUpdates.ipynb" and click run all.

---

## The Microbit folder contains the code for the different microbits. 

---


## On the raspberry pi

1. follow the steps to install the pyBeacon package: https://github.com/forksociety/PyBeacon
2. Follow the following steps to pair the pysical notification microbit with the raspberry pi: https://ukbaz.github.io/howto/ubit_workshop.html
3. Run "runCommsFinal.py" from the raspberrypi folder on the raspberrypi

---

### The combined Cleaned collected Data can be found in the "collectedDataset.csv" file and can be visualized through the following link https://public.tableau.com/profile/abhyuday.samadder#!/vizhome/IOTG5/Sheet1?publish=yes