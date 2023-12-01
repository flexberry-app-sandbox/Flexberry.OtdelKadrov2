



CREATE TABLE "ТаблЧастьСШР"
(

	"primaryKey" RAW(16) NOT NULL,

	"Код" NUMBER(10) NULL,

	"Наименование" NVARCHAR2(26) NULL,

	"КоличествоШЕ" NUMBER(10) NULL,

	"ТарифнаяСтавка" NUMBER(10) NULL,

	"Надбавки" NUMBER(10) NULL,

	"Всего" NUMBER(10) NULL,

	"Примечание" NVARCHAR2(255) NULL,

	"ВсегоКолШЕ" NUMBER(10) NULL,

	"ВсегоТС" NUMBER(10) NULL,

	"ВсегоНадбавки" NUMBER(10) NULL,

	"ИтогоВсего" NUMBER(10) NULL,

	"Должность" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Сотрудники"
(

	"primaryKey" RAW(16) NOT NULL,

	"ФИО" NVARCHAR2(255) NULL,

	"ДатаРождения" DATE NULL,

	"IDСотрудника" NUMBER(10) NULL,

	"Пол" NVARCHAR2(255) NULL,

	"Подразделение" NVARCHAR2(26) NULL,

	"ЗнаниеЯзыков" NVARCHAR2(255) NULL,

	"Образование" NVARCHAR2(24) NULL,

	"Гражданство" NVARCHAR2(255) NULL,

	"Должность" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ТаблЧастьТУ"
(

	"primaryKey" RAW(16) NOT NULL,

	"Код" NUMBER(10) NULL,

	"ДатаДк" DATE NULL,

	"ЯвкаНеявка" NUMBER(1) NULL,

	"КолЯвокПМес" NUMBER(10) NULL,

	"КолЯвокМес" NUMBER(10) NULL,

	"ЧасыЗаПМес" FLOAT(126) NULL,

	"ЧасыЗаМесяц" FLOAT(126) NULL,

	"КодВидаОплаты" NVARCHAR2(255) NULL,

	"КорресСчет" NUMBER(10) NULL,

	"ДниЧасы" NUMBER(10) NULL,

	"КолНеявок" NUMBER(10) NULL,

	"ИзНихПоПричинам" NUMBER(10) NULL,

	"КолВыхПразд" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ТабУчРВ"
(

	"primaryKey" RAW(16) NOT NULL,

	"ДатаДк" DATE NULL,

	"Руководитель" NVARCHAR2(255) NULL,

	"Период" DATE NULL,

	"Исполнитель" NVARCHAR2(255) NULL,

	"ОтделКадров" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Должность"
(

	"primaryKey" RAW(16) NOT NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"IDДолжности" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ТаблЧастьГО"
(

	"primaryKey" RAW(16) NOT NULL,

	"Код" NUMBER(10) NULL,

	"КолКалДней" NUMBER(10) NULL,

	"ДатаЗап" DATE NULL,

	"ДатаФакт" DATE NULL,

	"Основание" NVARCHAR2(255) NULL,

	"Перенос" DATE NULL,

	"Примечание" NVARCHAR2(255) NULL,

	"Сотрудники" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Увольнение"
(

	"primaryKey" RAW(16) NOT NULL,

	"ДатаУвольнения" DATE NULL,

	"ДатаДк" DATE NULL,

	"Основание" NVARCHAR2(255) NULL,

	"Ответственный" NVARCHAR2(255) NULL,

	"Сотрудники" RAW(16) NOT NULL,

	"ОтделКадров" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ГрафикОтпуск"
(

	"primaryKey" RAW(16) NOT NULL,

	"ДатаДк" DATE NULL,

	"Период" DATE NULL,

	"РуководительОр" NVARCHAR2(255) NULL,

	"РуководительКО" NVARCHAR2(255) NULL,

	"ОтделКадров" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ТаблЧастьСотруд"
(

	"primaryKey" RAW(16) NOT NULL,

	"НаимОбуч" NVARCHAR2(255) NULL,

	"Квалификация" NVARCHAR2(255) NULL,

	"НаимДок" NVARCHAR2(255) NULL,

	"Cерия" NUMBER(10) NULL,

	"Номер" NUMBER(10) NULL,

	"ГодОкончания" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ОтделКадров"
(

	"primaryKey" RAW(16) NOT NULL,

	"Сотрудники" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "СостШтатРас"
(

	"primaryKey" RAW(16) NOT NULL,

	"Период" DATE NULL,

	"РуководительКО" NVARCHAR2(255) NULL,

	"ДатаДк" DATE NULL,

	"ГлавБух" NVARCHAR2(255) NULL,

	"ОтделКадров" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ПриказОПриеме"
(

	"primaryKey" RAW(16) NOT NULL,

	"Подразделение" NVARCHAR2(26) NULL,

	"Оклад" FLOAT(126) NULL,

	"ФИО" NVARCHAR2(255) NULL,

	"ГрафикРаботы" NVARCHAR2(255) NULL,

	"ДатаДк" DATE NULL,

	"Ответсвенный" NVARCHAR2(255) NULL,

	"СрокЗаключения" NUMBER(10) NULL,

	"ДатаПриема" DATE NULL,

	"Занятость" NVARCHAR2(28) NULL,

	"Должность" RAW(16) NOT NULL,

	"ОтделКадров" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "ТаблЧастьСШР"
	ADD CONSTRAINT "ТаблЧастьСШР__9471" FOREIGN KEY ("Должность") REFERENCES "Должность" ("primaryKey");

CREATE INDEX "ТаблЧастьСШР__7532" on "ТаблЧастьСШР" ("Должность");

ALTER TABLE "Сотрудники"
	ADD CONSTRAINT "Сотрудники_FД_1441" FOREIGN KEY ("Должность") REFERENCES "Должность" ("primaryKey");

CREATE INDEX "Сотрудники_IД_6987" on "Сотрудники" ("Должность");

ALTER TABLE "ТабУчРВ"
	ADD CONSTRAINT "ТабУчРВ_FОтде_5023" FOREIGN KEY ("ОтделКадров") REFERENCES "ОтделКадров" ("primaryKey");

CREATE INDEX "ТабУчРВ_IОтде_5988" on "ТабУчРВ" ("ОтделКадров");

ALTER TABLE "ТаблЧастьГО"
	ADD CONSTRAINT "ТаблЧастьГО_F_4931" FOREIGN KEY ("Сотрудники") REFERENCES "Сотрудники" ("primaryKey");

CREATE INDEX "ТаблЧастьГО_I_4710" on "ТаблЧастьГО" ("Сотрудники");

ALTER TABLE "Увольнение"
	ADD CONSTRAINT "Увольнение_FС_7175" FOREIGN KEY ("Сотрудники") REFERENCES "Сотрудники" ("primaryKey");

CREATE INDEX "Увольнение_IС_1024" on "Увольнение" ("Сотрудники");

ALTER TABLE "Увольнение"
	ADD CONSTRAINT "Увольнение_FО_4762" FOREIGN KEY ("ОтделКадров") REFERENCES "ОтделКадров" ("primaryKey");

CREATE INDEX "Увольнение_IО_2537" on "Увольнение" ("ОтделКадров");

ALTER TABLE "ГрафикОтпуск"
	ADD CONSTRAINT "ГрафикОтпуск__5319" FOREIGN KEY ("ОтделКадров") REFERENCES "ОтделКадров" ("primaryKey");

CREATE INDEX "ГрафикОтпуск__7678" on "ГрафикОтпуск" ("ОтделКадров");

ALTER TABLE "ОтделКадров"
	ADD CONSTRAINT "ОтделКадров_F_8220" FOREIGN KEY ("Сотрудники") REFERENCES "Сотрудники" ("primaryKey");

CREATE INDEX "ОтделКадров_I_7058" on "ОтделКадров" ("Сотрудники");

ALTER TABLE "СостШтатРас"
	ADD CONSTRAINT "СостШтатРас_F_7760" FOREIGN KEY ("ОтделКадров") REFERENCES "ОтделКадров" ("primaryKey");

CREATE INDEX "СостШтатРас_I_4373" on "СостШтатРас" ("ОтделКадров");

ALTER TABLE "ПриказОПриеме"
	ADD CONSTRAINT "ПриказОПрием_6693" FOREIGN KEY ("Должность") REFERENCES "Должность" ("primaryKey");

CREATE INDEX "ПриказОПрием_7493" on "ПриказОПриеме" ("Должность");

ALTER TABLE "ПриказОПриеме"
	ADD CONSTRAINT "ПриказОПриеме_993" FOREIGN KEY ("ОтделКадров") REFERENCES "ОтделКадров" ("primaryKey");

CREATE INDEX "ПриказОПрием_7185" on "ПриказОПриеме" ("ОтделКадров");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


