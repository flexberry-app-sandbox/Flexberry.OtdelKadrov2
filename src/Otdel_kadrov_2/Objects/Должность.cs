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
    /// Должность.
    /// </summary>
    // *** Start programmer edit section *** (Должность CustomAttributes)

    // *** End programmer edit section *** (Должность CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ДолжностьE", new string[] {
            "Наименование as \'Наименование\'",
            "IDДолжности as \'I d должности\'"})]
    [View("ДолжностьL", new string[] {
            "Наименование as \'Наименование\'",
            "IDДолжности as \'I d должности\'"})]
    public class Должность : ICSSoft.STORMNET.DataObject
    {
        
        private string fНаименование;
        
        private int fIDДолжности;
        
        // *** Start programmer edit section *** (Должность CustomMembers)

        // *** End programmer edit section *** (Должность CustomMembers)

        
        /// <summary>
        /// IDДолжности.
        /// </summary>
        // *** Start programmer edit section *** (Должность.IDДолжности CustomAttributes)

        // *** End programmer edit section *** (Должность.IDДолжности CustomAttributes)
        public virtual int IDДолжности
        {
            get
            {
                // *** Start programmer edit section *** (Должность.IDДолжности Get start)

                // *** End programmer edit section *** (Должность.IDДолжности Get start)
                int result = this.fIDДолжности;
                // *** Start programmer edit section *** (Должность.IDДолжности Get end)

                // *** End programmer edit section *** (Должность.IDДолжности Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Должность.IDДолжности Set start)

                // *** End programmer edit section *** (Должность.IDДолжности Set start)
                this.fIDДолжности = value;
                // *** Start programmer edit section *** (Должность.IDДолжности Set end)

                // *** End programmer edit section *** (Должность.IDДолжности Set end)
            }
        }
        
        /// <summary>
        /// Наименование.
        /// </summary>
        // *** Start programmer edit section *** (Должность.Наименование CustomAttributes)

        // *** End programmer edit section *** (Должность.Наименование CustomAttributes)
        [StrLen(255)]
        public virtual string Наименование
        {
            get
            {
                // *** Start programmer edit section *** (Должность.Наименование Get start)

                // *** End programmer edit section *** (Должность.Наименование Get start)
                string result = this.fНаименование;
                // *** Start programmer edit section *** (Должность.Наименование Get end)

                // *** End programmer edit section *** (Должность.Наименование Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Должность.Наименование Set start)

                // *** End programmer edit section *** (Должность.Наименование Set start)
                this.fНаименование = value;
                // *** Start programmer edit section *** (Должность.Наименование Set end)

                // *** End programmer edit section *** (Должность.Наименование Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ДолжностьE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ДолжностьE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ДолжностьE", typeof(IIS.Otdel_kadrov_2.Должность));
                }
            }
            
            /// <summary>
            /// "ДолжностьL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ДолжностьL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ДолжностьL", typeof(IIS.Otdel_kadrov_2.Должность));
                }
            }
        }
    }
}
