package Otdel_kadrov_2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Otdel_kadrov_2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ПриказОПриеме
 */
@Entity(name = "IISOtdel_kadrov_2ПриказОПриеме")
@Table(schema = "public", name = "ПриказОПриеме")
public class PrikazOPrieme {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Подразделение")
    private String подразделение;

    @Column(name = "Оклад")
    private Double оклад;

    @Column(name = "ФИО")
    private String фио;

    @Column(name = "ГрафикРаботы")
    private String графикработы;

    @Column(name = "ДатаДк")
    private Date датадк;

    @Column(name = "Ответсвенный")
    private String ответсвенный;

    @Column(name = "СрокЗаключения")
    private Integer срокзаключения;

    @Column(name = "ДатаПриема")
    private Date датаприема;

    @Column(name = "Занятость")
    private String занятость;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Dolzhnost")
    @Convert("Dolzhnost")
    @Column(name = "Должность", length = 16, unique = true, nullable = false)
    private UUID _dolzhnostid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Dolzhnost", insertable = false, updatable = false)
    private Dolzhnost dolzhnost;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "OtdelKadrov")
    @Convert("OtdelKadrov")
    @Column(name = "ОтделКадров", length = 16, unique = true, nullable = false)
    private UUID _otdelkadrovid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "OtdelKadrov", insertable = false, updatable = false)
    private OtdelKadrov otdelkadrov;


    public PrikazOPrieme() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getПодразделение() {
      return подразделение;
    }

    public void setПодразделение(String подразделение) {
      this.подразделение = подразделение;
    }

    public Double getОклад() {
      return оклад;
    }

    public void setОклад(Double оклад) {
      this.оклад = оклад;
    }

    public String getФИО() {
      return фио;
    }

    public void setФИО(String фио) {
      this.фио = фио;
    }

    public String getГрафикРаботы() {
      return графикработы;
    }

    public void setГрафикРаботы(String графикработы) {
      this.графикработы = графикработы;
    }

    public Date getДатаДк() {
      return датадк;
    }

    public void setДатаДк(Date датадк) {
      this.датадк = датадк;
    }

    public String getОтветсвенный() {
      return ответсвенный;
    }

    public void setОтветсвенный(String ответсвенный) {
      this.ответсвенный = ответсвенный;
    }

    public Integer getСрокЗаключения() {
      return срокзаключения;
    }

    public void setСрокЗаключения(Integer срокзаключения) {
      this.срокзаключения = срокзаключения;
    }

    public Date getДатаПриема() {
      return датаприема;
    }

    public void setДатаПриема(Date датаприема) {
      this.датаприема = датаприема;
    }

    public String getЗанятость() {
      return занятость;
    }

    public void setЗанятость(String занятость) {
      this.занятость = занятость;
    }


}