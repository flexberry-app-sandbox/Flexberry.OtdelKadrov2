﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Otdel_kadrov_2
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Табл часть СШР.
    /// </summary>
    // *** Start programmer edit section *** (ТаблЧастьСШР CustomAttributes)

    // *** End programmer edit section *** (ТаблЧастьСШР CustomAttributes)
    [AutoAltered()]
    [Caption("Табл часть СШР")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ТаблЧастьСШРE", new string[] {
            "Код as \'Код\'",
            "Наименование as \'Наименование\'",
            "КоличествоШЕ as \'Количество ШЕ\'",
            "ТарифнаяСтавка as \'Тарифная ставка\'",
            "Надбавки as \'Надбавки\'",
            "Всего as \'Всего\'",
            "Примечание as \'Примечание\'",
            "ВсегоКолШЕ as \'Всего кол ШЕ\'",
            "ВсегоТС as \'Всего ТС\'",
            "ВсегоНадбавки as \'Всего надбавки\'",
            "ИтогоВсего as \'Итого всего\'",
            "Должность as \'Должность\'",
            "Должность.Наименование as \'Наименование\'"}, Hidden=new string[] {
            "Должность.Наименование"})]
    [MasterViewDefineAttribute("ТаблЧастьСШРE", "Должность", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    [View("ТаблЧастьСШРL", new string[] {
            "Код as \'Код\'",
            "Наименование as \'Наименование\'",
            "КоличествоШЕ as \'Количество ШЕ\'",
            "ТарифнаяСтавка as \'Тарифная ставка\'",
            "Надбавки as \'Надбавки\'",
            "Всего as \'Всего\'",
            "Примечание as \'Примечание\'",
            "ВсегоКолШЕ as \'Всего кол ШЕ\'",
            "ВсегоТС as \'Всего ТС\'",
            "ВсегоНадбавки as \'Всего надбавки\'",
            "ИтогоВсего as \'Итого всего\'",
            "Должность.Наименование as \'Наименование\'"})]
    public class ТаблЧастьСШР : ICSSoft.STORMNET.DataObject
    {
        
        private int fКод;
        
        private IIS.Otdel_kadrov_2.Подразделение fНаименование;
        
        private int fКоличествоШЕ;
        
        private int fТарифнаяСтавка;
        
        private int fНадбавки;
        
        private int fВсего;
        
        private string fПримечание;
        
        private int fВсегоКолШЕ;
        
        private int fВсегоТС;
        
        private int fВсегоНадбавки;
        
        private int fИтогоВсего;
        
        private IIS.Otdel_kadrov_2.Должность fДолжность;
        
        // *** Start programmer edit section *** (ТаблЧастьСШР CustomMembers)

        // *** End programmer edit section *** (ТаблЧастьСШР CustomMembers)

        
        /// <summary>
        /// Всего.
        /// </summary>
        // *** Start programmer edit section *** (ТаблЧастьСШР.Всего CustomAttributes)

        // *** End programmer edit section *** (ТаблЧастьСШР.Всего CustomAttributes)
        public virtual int Всего
        {
            get
            {
                // *** Start programmer edit section *** (ТаблЧастьСШР.Всего Get start)

                // *** End programmer edit section *** (ТаблЧастьСШР.Всего Get start)
                int result = this.fВсего;
                // *** Start programmer edit section *** (ТаблЧастьСШР.Всего Get end)

                // *** End programmer edit section *** (ТаблЧастьСШР.Всего Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТаблЧастьСШР.Всего Set start)

                // *** End programmer edit section *** (ТаблЧастьСШР.Всего Set start)
                this.fВсего = value;
                // *** Start programmer edit section *** (ТаблЧастьСШР.Всего Set end)

                // *** End programmer edit section *** (ТаблЧастьСШР.Всего Set end)
            }
        }
        
        /// <summary>
        /// ВсегоКолШЕ.
        /// </summary>
        // *** Start programmer edit section *** (ТаблЧастьСШР.ВсегоКолШЕ CustomAttributes)

        // *** End programmer edit section *** (ТаблЧастьСШР.ВсегоКолШЕ CustomAttributes)
        public virtual int ВсегоКолШЕ
        {
            get
            {
                // *** Start programmer edit section *** (ТаблЧастьСШР.ВсегоКолШЕ Get start)

                // *** End programmer edit section *** (ТаблЧастьСШР.ВсегоКолШЕ Get start)
                int result = this.fВсегоКолШЕ;
                // *** Start programmer edit section *** (ТаблЧастьСШР.ВсегоКолШЕ Get end)

                // *** End programmer edit section *** (ТаблЧастьСШР.ВсегоКолШЕ Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТаблЧастьСШР.ВсегоКолШЕ Set start)

                // *** End programmer edit section *** (ТаблЧастьСШР.ВсегоКолШЕ Set start)
                this.fВсегоКолШЕ = value;
                // *** Start programmer edit section *** (ТаблЧастьСШР.ВсегоКолШЕ Set end)

                // *** End programmer edit section *** (ТаблЧастьСШР.ВсегоКолШЕ Set end)
            }
        }
        
        /// <summary>
        /// ВсегоНадбавки.
        /// </summary>
        // *** Start programmer edit section *** (ТаблЧастьСШР.ВсегоНадбавки CustomAttributes)

        // *** End programmer edit section *** (ТаблЧастьСШР.ВсегоНадбавки CustomAttributes)
        public virtual int ВсегоНадбавки
        {
            get
            {
                // *** Start programmer edit section *** (ТаблЧастьСШР.ВсегоНадбавки Get start)

                // *** End programmer edit section *** (ТаблЧастьСШР.ВсегоНадбавки Get start)
                int result = this.fВсегоНадбавки;
                // *** Start programmer edit section *** (ТаблЧастьСШР.ВсегоНадбавки Get end)

                // *** End programmer edit section *** (ТаблЧастьСШР.ВсегоНадбавки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТаблЧастьСШР.ВсегоНадбавки Set start)

                // *** End programmer edit section *** (ТаблЧастьСШР.ВсегоНадбавки Set start)
                this.fВсегоНадбавки = value;
                // *** Start programmer edit section *** (ТаблЧастьСШР.ВсегоНадбавки Set end)

                // *** End programmer edit section *** (ТаблЧастьСШР.ВсегоНадбавки Set end)
            }
        }
        
        /// <summary>
        /// ВсегоТС.
        /// </summary>
        // *** Start programmer edit section *** (ТаблЧастьСШР.ВсегоТС CustomAttributes)

        // *** End programmer edit section *** (ТаблЧастьСШР.ВсегоТС CustomAttributes)
        public virtual int ВсегоТС
        {
            get
            {
                // *** Start programmer edit section *** (ТаблЧастьСШР.ВсегоТС Get start)

                // *** End programmer edit section *** (ТаблЧастьСШР.ВсегоТС Get start)
                int result = this.fВсегоТС;
                // *** Start programmer edit section *** (ТаблЧастьСШР.ВсегоТС Get end)

                // *** End programmer edit section *** (ТаблЧастьСШР.ВсегоТС Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТаблЧастьСШР.ВсегоТС Set start)

                // *** End programmer edit section *** (ТаблЧастьСШР.ВсегоТС Set start)
                this.fВсегоТС = value;
                // *** Start programmer edit section *** (ТаблЧастьСШР.ВсегоТС Set end)

                // *** End programmer edit section *** (ТаблЧастьСШР.ВсегоТС Set end)
            }
        }
        
        /// <summary>
        /// ИтогоВсего.
        /// </summary>
        // *** Start programmer edit section *** (ТаблЧастьСШР.ИтогоВсего CustomAttributes)

        // *** End programmer edit section *** (ТаблЧастьСШР.ИтогоВсего CustomAttributes)
        public virtual int ИтогоВсего
        {
            get
            {
                // *** Start programmer edit section *** (ТаблЧастьСШР.ИтогоВсего Get start)

                // *** End programmer edit section *** (ТаблЧастьСШР.ИтогоВсего Get start)
                int result = this.fИтогоВсего;
                // *** Start programmer edit section *** (ТаблЧастьСШР.ИтогоВсего Get end)

                // *** End programmer edit section *** (ТаблЧастьСШР.ИтогоВсего Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТаблЧастьСШР.ИтогоВсего Set start)

                // *** End programmer edit section *** (ТаблЧастьСШР.ИтогоВсего Set start)
                this.fИтогоВсего = value;
                // *** Start programmer edit section *** (ТаблЧастьСШР.ИтогоВсего Set end)

                // *** End programmer edit section *** (ТаблЧастьСШР.ИтогоВсего Set end)
            }
        }
        
        /// <summary>
        /// Код.
        /// </summary>
        // *** Start programmer edit section *** (ТаблЧастьСШР.Код CustomAttributes)

        // *** End programmer edit section *** (ТаблЧастьСШР.Код CustomAttributes)
        public virtual int Код
        {
            get
            {
                // *** Start programmer edit section *** (ТаблЧастьСШР.Код Get start)

                // *** End programmer edit section *** (ТаблЧастьСШР.Код Get start)
                int result = this.fКод;
                // *** Start programmer edit section *** (ТаблЧастьСШР.Код Get end)

                // *** End programmer edit section *** (ТаблЧастьСШР.Код Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТаблЧастьСШР.Код Set start)

                // *** End programmer edit section *** (ТаблЧастьСШР.Код Set start)
                this.fКод = value;
                // *** Start programmer edit section *** (ТаблЧастьСШР.Код Set end)

                // *** End programmer edit section *** (ТаблЧастьСШР.Код Set end)
            }
        }
        
        /// <summary>
        /// КоличествоШЕ.
        /// </summary>
        // *** Start programmer edit section *** (ТаблЧастьСШР.КоличествоШЕ CustomAttributes)

        // *** End programmer edit section *** (ТаблЧастьСШР.КоличествоШЕ CustomAttributes)
        public virtual int КоличествоШЕ
        {
            get
            {
                // *** Start programmer edit section *** (ТаблЧастьСШР.КоличествоШЕ Get start)

                // *** End programmer edit section *** (ТаблЧастьСШР.КоличествоШЕ Get start)
                int result = this.fКоличествоШЕ;
                // *** Start programmer edit section *** (ТаблЧастьСШР.КоличествоШЕ Get end)

                // *** End programmer edit section *** (ТаблЧастьСШР.КоличествоШЕ Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТаблЧастьСШР.КоличествоШЕ Set start)

                // *** End programmer edit section *** (ТаблЧастьСШР.КоличествоШЕ Set start)
                this.fКоличествоШЕ = value;
                // *** Start programmer edit section *** (ТаблЧастьСШР.КоличествоШЕ Set end)

                // *** End programmer edit section *** (ТаблЧастьСШР.КоличествоШЕ Set end)
            }
        }
        
        /// <summary>
        /// Надбавки.
        /// </summary>
        // *** Start programmer edit section *** (ТаблЧастьСШР.Надбавки CustomAttributes)

        // *** End programmer edit section *** (ТаблЧастьСШР.Надбавки CustomAttributes)
        public virtual int Надбавки
        {
            get
            {
                // *** Start programmer edit section *** (ТаблЧастьСШР.Надбавки Get start)

                // *** End programmer edit section *** (ТаблЧастьСШР.Надбавки Get start)
                int result = this.fНадбавки;
                // *** Start programmer edit section *** (ТаблЧастьСШР.Надбавки Get end)

                // *** End programmer edit section *** (ТаблЧастьСШР.Надбавки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТаблЧастьСШР.Надбавки Set start)

                // *** End programmer edit section *** (ТаблЧастьСШР.Надбавки Set start)
                this.fНадбавки = value;
                // *** Start programmer edit section *** (ТаблЧастьСШР.Надбавки Set end)

                // *** End programmer edit section *** (ТаблЧастьСШР.Надбавки Set end)
            }
        }
        
        /// <summary>
        /// Наименование.
        /// </summary>
        // *** Start programmer edit section *** (ТаблЧастьСШР.Наименование CustomAttributes)

        // *** End programmer edit section *** (ТаблЧастьСШР.Наименование CustomAttributes)
        public virtual IIS.Otdel_kadrov_2.Подразделение Наименование
        {
            get
            {
                // *** Start programmer edit section *** (ТаблЧастьСШР.Наименование Get start)

                // *** End programmer edit section *** (ТаблЧастьСШР.Наименование Get start)
                IIS.Otdel_kadrov_2.Подразделение result = this.fНаименование;
                // *** Start programmer edit section *** (ТаблЧастьСШР.Наименование Get end)

                // *** End programmer edit section *** (ТаблЧастьСШР.Наименование Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТаблЧастьСШР.Наименование Set start)

                // *** End programmer edit section *** (ТаблЧастьСШР.Наименование Set start)
                this.fНаименование = value;
                // *** Start programmer edit section *** (ТаблЧастьСШР.Наименование Set end)

                // *** End programmer edit section *** (ТаблЧастьСШР.Наименование Set end)
            }
        }
        
        /// <summary>
        /// Примечание.
        /// </summary>
        // *** Start programmer edit section *** (ТаблЧастьСШР.Примечание CustomAttributes)

        // *** End programmer edit section *** (ТаблЧастьСШР.Примечание CustomAttributes)
        [StrLen(255)]
        public virtual string Примечание
        {
            get
            {
                // *** Start programmer edit section *** (ТаблЧастьСШР.Примечание Get start)

                // *** End programmer edit section *** (ТаблЧастьСШР.Примечание Get start)
                string result = this.fПримечание;
                // *** Start programmer edit section *** (ТаблЧастьСШР.Примечание Get end)

                // *** End programmer edit section *** (ТаблЧастьСШР.Примечание Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТаблЧастьСШР.Примечание Set start)

                // *** End programmer edit section *** (ТаблЧастьСШР.Примечание Set start)
                this.fПримечание = value;
                // *** Start programmer edit section *** (ТаблЧастьСШР.Примечание Set end)

                // *** End programmer edit section *** (ТаблЧастьСШР.Примечание Set end)
            }
        }
        
        /// <summary>
        /// ТарифнаяСтавка.
        /// </summary>
        // *** Start programmer edit section *** (ТаблЧастьСШР.ТарифнаяСтавка CustomAttributes)

        // *** End programmer edit section *** (ТаблЧастьСШР.ТарифнаяСтавка CustomAttributes)
        public virtual int ТарифнаяСтавка
        {
            get
            {
                // *** Start programmer edit section *** (ТаблЧастьСШР.ТарифнаяСтавка Get start)

                // *** End programmer edit section *** (ТаблЧастьСШР.ТарифнаяСтавка Get start)
                int result = this.fТарифнаяСтавка;
                // *** Start programmer edit section *** (ТаблЧастьСШР.ТарифнаяСтавка Get end)

                // *** End programmer edit section *** (ТаблЧастьСШР.ТарифнаяСтавка Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТаблЧастьСШР.ТарифнаяСтавка Set start)

                // *** End programmer edit section *** (ТаблЧастьСШР.ТарифнаяСтавка Set start)
                this.fТарифнаяСтавка = value;
                // *** Start programmer edit section *** (ТаблЧастьСШР.ТарифнаяСтавка Set end)

                // *** End programmer edit section *** (ТаблЧастьСШР.ТарифнаяСтавка Set end)
            }
        }
        
        /// <summary>
        /// Табл часть СШР.
        /// </summary>
        // *** Start programmer edit section *** (ТаблЧастьСШР.Должность CustomAttributes)

        // *** End programmer edit section *** (ТаблЧастьСШР.Должность CustomAttributes)
        [PropertyStorage(new string[] {
                "Должность"})]
        [NotNull()]
        public virtual IIS.Otdel_kadrov_2.Должность Должность
        {
            get
            {
                // *** Start programmer edit section *** (ТаблЧастьСШР.Должность Get start)

                // *** End programmer edit section *** (ТаблЧастьСШР.Должность Get start)
                IIS.Otdel_kadrov_2.Должность result = this.fДолжность;
                // *** Start programmer edit section *** (ТаблЧастьСШР.Должность Get end)

                // *** End programmer edit section *** (ТаблЧастьСШР.Должность Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ТаблЧастьСШР.Должность Set start)

                // *** End programmer edit section *** (ТаблЧастьСШР.Должность Set start)
                this.fДолжность = value;
                // *** Start programmer edit section *** (ТаблЧастьСШР.Должность Set end)

                // *** End programmer edit section *** (ТаблЧастьСШР.Должность Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ТаблЧастьСШРE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТаблЧастьСШРE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТаблЧастьСШРE", typeof(IIS.Otdel_kadrov_2.ТаблЧастьСШР));
                }
            }
            
            /// <summary>
            /// "ТаблЧастьСШРL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ТаблЧастьСШРL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ТаблЧастьСШРL", typeof(IIS.Otdel_kadrov_2.ТаблЧастьСШР));
                }
            }
        }
    }
}
