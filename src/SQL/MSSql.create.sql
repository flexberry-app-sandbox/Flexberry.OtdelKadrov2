



CREATE TABLE [ТаблЧастьСШР] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Всего] INT  NULL,

	 [ВсегоКолШЕ] INT  NULL,

	 [ВсегоНадбавки] INT  NULL,

	 [ВсегоТС] INT  NULL,

	 [ИтогоВсего] INT  NULL,

	 [Код] INT  NULL,

	 [КоличествоШЕ] INT  NULL,

	 [Надбавки] INT  NULL,

	 [Наименование] VARCHAR(13)  NULL,

	 [Примечание] VARCHAR(255)  NULL,

	 [ТарифнаяСтавка] INT  NULL,

	 [Должность] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Сотрудники] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [IDСотрудника] INT  NULL,

	 [Гражданство] VARCHAR(255)  NULL,

	 [ДатаРождения] DATETIME  NULL,

	 [ЗнаниеЯзыков] VARCHAR(255)  NULL,

	 [Образование] VARCHAR(11)  NULL,

	 [Подразделение] VARCHAR(13)  NULL,

	 [Пол] VARCHAR(255)  NULL,

	 [ФИО] VARCHAR(255)  NULL,

	 [Должность] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ТаблЧастьТУ] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ДатаДк] DATETIME  NULL,

	 [ДниЧасы] INT  NULL,

	 [ИзНихПоПричинам] INT  NULL,

	 [Код] INT  NULL,

	 [КодВидаОплаты] VARCHAR(255)  NULL,

	 [КолВыхПразд] INT  NULL,

	 [КолНеявок] INT  NULL,

	 [КолЯвокМес] INT  NULL,

	 [КолЯвокПМес] INT  NULL,

	 [КорресСчет] INT  NULL,

	 [ЧасыЗаМесяц] FLOAT  NULL,

	 [ЧасыЗаПМес] FLOAT  NULL,

	 [ЯвкаНеявка] BIT  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ТабУчРВ] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ДатаДк] DATETIME  NULL,

	 [Исполнитель] VARCHAR(255)  NULL,

	 [Период] DATETIME  NULL,

	 [Руководитель] VARCHAR(255)  NULL,

	 [ОтделКадров] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Должность] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [IDДолжности] INT  NULL,

	 [Наименование] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ТаблЧастьГО] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ДатаЗап] DATETIME  NULL,

	 [ДатаФакт] DATETIME  NULL,

	 [Код] INT  NULL,

	 [КолКалДней] INT  NULL,

	 [Основание] VARCHAR(255)  NULL,

	 [Перенос] DATETIME  NULL,

	 [Примечание] VARCHAR(255)  NULL,

	 [Сотрудники] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Увольнение] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ДатаДк] DATETIME  NULL,

	 [ДатаУвольнения] DATETIME  NULL,

	 [Основание] VARCHAR(255)  NULL,

	 [Ответственный] VARCHAR(255)  NULL,

	 [ОтделКадров] UNIQUEIDENTIFIER  NOT NULL,

	 [Сотрудники] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ГрафикОтпуск] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ДатаДк] DATETIME  NULL,

	 [Период] DATETIME  NULL,

	 [РуководительКО] VARCHAR(255)  NULL,

	 [РуководительОр] VARCHAR(255)  NULL,

	 [ОтделКадров] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ТаблЧастьСотруд] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Cерия] INT  NULL,

	 [ГодОкончания] DATETIME  NULL,

	 [Квалификация] VARCHAR(255)  NULL,

	 [НаимДок] VARCHAR(255)  NULL,

	 [НаимОбуч] VARCHAR(255)  NULL,

	 [Номер] INT  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ОтделКадров] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Сотрудники] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [СостШтатРас] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ГлавБух] VARCHAR(255)  NULL,

	 [ДатаДк] DATETIME  NULL,

	 [Период] DATETIME  NULL,

	 [РуководительКО] VARCHAR(255)  NULL,

	 [ОтделКадров] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ПриказОПриеме] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ГрафикРаботы] VARCHAR(255)  NULL,

	 [ДатаДк] DATETIME  NULL,

	 [ДатаПриема] DATETIME  NULL,

	 [Занятость] VARCHAR(15)  NULL,

	 [Оклад] FLOAT  NULL,

	 [Ответсвенный] VARCHAR(255)  NULL,

	 [Подразделение] VARCHAR(13)  NULL,

	 [СрокЗаключения] INT  NULL,

	 [ФИО] VARCHAR(255)  NULL,

	 [Должность] UNIQUEIDENTIFIER  NOT NULL,

	 [ОтделКадров] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMNETLOCKDATA] (

	 [LockKey] VARCHAR(300)  NOT NULL,

	 [UserName] VARCHAR(300)  NOT NULL,

	 [LockDate] DATETIME  NULL,

	 PRIMARY KEY ([LockKey]))


CREATE TABLE [STORMSETTINGS] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Module] varchar(1000)  NULL,

	 [Name] varchar(255)  NULL,

	 [Value] text  NULL,

	 [User] varchar(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMAdvLimit] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [User] varchar(255)  NULL,

	 [Published] bit  NULL,

	 [Module] varchar(255)  NULL,

	 [Name] varchar(255)  NULL,

	 [Value] text  NULL,

	 [HotKeyData] int  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERSETTING] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] varchar(255)  NOT NULL,

	 [DataObjectView] varchar(255)  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMWEBSEARCH] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] varchar(255)  NOT NULL,

	 [Order] INT  NOT NULL,

	 [PresentView] varchar(255)  NOT NULL,

	 [DetailedView] varchar(255)  NOT NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERDETAIL] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Caption] varchar(255)  NOT NULL,

	 [DataObjectView] varchar(255)  NOT NULL,

	 [ConnectMasterProp] varchar(255)  NOT NULL,

	 [OwnerConnectProp] varchar(255)  NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERLOOKUP] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [DataObjectType] varchar(255)  NOT NULL,

	 [Container] varchar(255)  NULL,

	 [ContainerTag] varchar(255)  NULL,

	 [FieldsToView] varchar(255)  NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [UserSetting] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [AppName] varchar(256)  NULL,

	 [UserName] varchar(512)  NULL,

	 [UserGuid] uniqueidentifier  NULL,

	 [ModuleName] varchar(1024)  NULL,

	 [ModuleGuid] uniqueidentifier  NULL,

	 [SettName] varchar(256)  NULL,

	 [SettGuid] uniqueidentifier  NULL,

	 [SettLastAccessTime] DATETIME  NULL,

	 [StrVal] varchar(256)  NULL,

	 [TxtVal] varchar(max)  NULL,

	 [IntVal] int  NULL,

	 [BoolVal] bit  NULL,

	 [GuidVal] uniqueidentifier  NULL,

	 [DecimalVal] decimal(20,10)  NULL,

	 [DateTimeVal] DATETIME  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ApplicationLog] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Category] varchar(64)  NULL,

	 [EventId] INT  NULL,

	 [Priority] INT  NULL,

	 [Severity] varchar(32)  NULL,

	 [Title] varchar(256)  NULL,

	 [Timestamp] DATETIME  NULL,

	 [MachineName] varchar(32)  NULL,

	 [AppDomainName] varchar(512)  NULL,

	 [ProcessId] varchar(256)  NULL,

	 [ProcessName] varchar(512)  NULL,

	 [ThreadName] varchar(512)  NULL,

	 [Win32ThreadId] varchar(128)  NULL,

	 [Message] varchar(2500)  NULL,

	 [FormattedMessage] varchar(max)  NULL,

	 PRIMARY KEY ([primaryKey]))




