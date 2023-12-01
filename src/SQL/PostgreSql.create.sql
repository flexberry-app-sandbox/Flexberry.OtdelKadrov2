




CREATE TABLE ТаблЧастьСШР (
 primaryKey UUID NOT NULL,
 Код INT NULL,
 Наименование VARCHAR(26) NULL,
 КоличествоШЕ INT NULL,
 ТарифнаяСтавка INT NULL,
 Надбавки INT NULL,
 Всего INT NULL,
 Примечание VARCHAR(255) NULL,
 ВсегоКолШЕ INT NULL,
 ВсегоТС INT NULL,
 ВсегоНадбавки INT NULL,
 ИтогоВсего INT NULL,
 Должность UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Сотрудники (
 primaryKey UUID NOT NULL,
 ФИО VARCHAR(255) NULL,
 ДатаРождения TIMESTAMP(3) NULL,
 IDСотрудника INT NULL,
 Пол VARCHAR(255) NULL,
 Подразделение VARCHAR(26) NULL,
 ЗнаниеЯзыков VARCHAR(255) NULL,
 Образование VARCHAR(24) NULL,
 Гражданство VARCHAR(255) NULL,
 Должность UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ТаблЧастьТУ (
 primaryKey UUID NOT NULL,
 Код INT NULL,
 ДатаДк TIMESTAMP(3) NULL,
 ЯвкаНеявка BOOLEAN NULL,
 КолЯвокПМес INT NULL,
 КолЯвокМес INT NULL,
 ЧасыЗаПМес DOUBLE PRECISION NULL,
 ЧасыЗаМесяц DOUBLE PRECISION NULL,
 КодВидаОплаты VARCHAR(255) NULL,
 КорресСчет INT NULL,
 ДниЧасы INT NULL,
 КолНеявок INT NULL,
 ИзНихПоПричинам INT NULL,
 КолВыхПразд INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ТабУчРВ (
 primaryKey UUID NOT NULL,
 ДатаДк TIMESTAMP(3) NULL,
 Руководитель VARCHAR(255) NULL,
 Период TIMESTAMP(3) NULL,
 Исполнитель VARCHAR(255) NULL,
 ОтделКадров UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Должность (
 primaryKey UUID NOT NULL,
 Наименование VARCHAR(255) NULL,
 IDДолжности INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ТаблЧастьГО (
 primaryKey UUID NOT NULL,
 Код INT NULL,
 КолКалДней INT NULL,
 ДатаЗап TIMESTAMP(3) NULL,
 ДатаФакт TIMESTAMP(3) NULL,
 Основание VARCHAR(255) NULL,
 Перенос TIMESTAMP(3) NULL,
 Примечание VARCHAR(255) NULL,
 Сотрудники UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Увольнение (
 primaryKey UUID NOT NULL,
 ДатаУвольнения TIMESTAMP(3) NULL,
 ДатаДк TIMESTAMP(3) NULL,
 Основание VARCHAR(255) NULL,
 Ответственный VARCHAR(255) NULL,
 Сотрудники UUID NOT NULL,
 ОтделКадров UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ГрафикОтпуск (
 primaryKey UUID NOT NULL,
 ДатаДк TIMESTAMP(3) NULL,
 Период TIMESTAMP(3) NULL,
 РуководительОр VARCHAR(255) NULL,
 РуководительКО VARCHAR(255) NULL,
 ОтделКадров UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ТаблЧастьСотруд (
 primaryKey UUID NOT NULL,
 НаимОбуч VARCHAR(255) NULL,
 Квалификация VARCHAR(255) NULL,
 НаимДок VARCHAR(255) NULL,
 Cерия INT NULL,
 Номер INT NULL,
 ГодОкончания TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ОтделКадров (
 primaryKey UUID NOT NULL,
 Сотрудники UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE СостШтатРас (
 primaryKey UUID NOT NULL,
 Период TIMESTAMP(3) NULL,
 РуководительКО VARCHAR(255) NULL,
 ДатаДк TIMESTAMP(3) NULL,
 ГлавБух VARCHAR(255) NULL,
 ОтделКадров UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ПриказОПриеме (
 primaryKey UUID NOT NULL,
 Подразделение VARCHAR(26) NULL,
 Оклад DOUBLE PRECISION NULL,
 ФИО VARCHAR(255) NULL,
 ГрафикРаботы VARCHAR(255) NULL,
 ДатаДк TIMESTAMP(3) NULL,
 Ответсвенный VARCHAR(255) NULL,
 СрокЗаключения INT NULL,
 ДатаПриема TIMESTAMP(3) NULL,
 Занятость VARCHAR(28) NULL,
 Должность UUID NOT NULL,
 ОтделКадров UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE ТаблЧастьСШР ADD CONSTRAINT FK914793ebffd4f33d7eb5b25c0d4747cfe278ad9b FOREIGN KEY (Должность) REFERENCES Должность; 
CREATE INDEX Index914793ebffd4f33d7eb5b25c0d4747cfe278ad9b on ТаблЧастьСШР (Должность); 

 ALTER TABLE Сотрудники ADD CONSTRAINT FKdb12690da9c19a13f60fc28ce9dc5fcfae00ada9 FOREIGN KEY (Должность) REFERENCES Должность; 
CREATE INDEX Indexdb12690da9c19a13f60fc28ce9dc5fcfae00ada9 on Сотрудники (Должность); 

 ALTER TABLE ТабУчРВ ADD CONSTRAINT FKefcbae3982549e1bf5ad98b5ebda067eb6ddfb79 FOREIGN KEY (ОтделКадров) REFERENCES ОтделКадров; 
CREATE INDEX Indexefcbae3982549e1bf5ad98b5ebda067eb6ddfb79 on ТабУчРВ (ОтделКадров); 

 ALTER TABLE ТаблЧастьГО ADD CONSTRAINT FK471e52b1798a0ae3d1bbc2324532c6cd4a1a1520 FOREIGN KEY (Сотрудники) REFERENCES Сотрудники; 
CREATE INDEX Index471e52b1798a0ae3d1bbc2324532c6cd4a1a1520 on ТаблЧастьГО (Сотрудники); 

 ALTER TABLE Увольнение ADD CONSTRAINT FKe9c4e3a1248ce67181d011a5fcb65595bc49dac0 FOREIGN KEY (Сотрудники) REFERENCES Сотрудники; 
CREATE INDEX Indexe9c4e3a1248ce67181d011a5fcb65595bc49dac0 on Увольнение (Сотрудники); 

 ALTER TABLE Увольнение ADD CONSTRAINT FKe25d2b7f352372558ca38171524b4a019c53aa49 FOREIGN KEY (ОтделКадров) REFERENCES ОтделКадров; 
CREATE INDEX Indexe25d2b7f352372558ca38171524b4a019c53aa49 on Увольнение (ОтделКадров); 

 ALTER TABLE ГрафикОтпуск ADD CONSTRAINT FKe7020f1e21ea8fd6e93d4943d70701b751202768 FOREIGN KEY (ОтделКадров) REFERENCES ОтделКадров; 
CREATE INDEX Indexe7020f1e21ea8fd6e93d4943d70701b751202768 on ГрафикОтпуск (ОтделКадров); 

 ALTER TABLE ОтделКадров ADD CONSTRAINT FK085bd76ce29423e6cdfaf857c901e17dc9bf312e FOREIGN KEY (Сотрудники) REFERENCES Сотрудники; 
CREATE INDEX Index085bd76ce29423e6cdfaf857c901e17dc9bf312e on ОтделКадров (Сотрудники); 

 ALTER TABLE СостШтатРас ADD CONSTRAINT FK1b6d2dd51b9d7629c5d7dfc051db5b45270fe027 FOREIGN KEY (ОтделКадров) REFERENCES ОтделКадров; 
CREATE INDEX Index1b6d2dd51b9d7629c5d7dfc051db5b45270fe027 on СостШтатРас (ОтделКадров); 

 ALTER TABLE ПриказОПриеме ADD CONSTRAINT FKa51be1f4c0ff736928e9cd7bb20e9adfa7fc11c8 FOREIGN KEY (Должность) REFERENCES Должность; 
CREATE INDEX Indexa51be1f4c0ff736928e9cd7bb20e9adfa7fc11c8 on ПриказОПриеме (Должность); 

 ALTER TABLE ПриказОПриеме ADD CONSTRAINT FK5094d435ee545f30219e08f205020a26f14dbc14 FOREIGN KEY (ОтделКадров) REFERENCES ОтделКадров; 
CREATE INDEX Index5094d435ee545f30219e08f205020a26f14dbc14 on ПриказОПриеме (ОтделКадров); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

