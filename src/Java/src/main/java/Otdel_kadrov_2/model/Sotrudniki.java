package Otdel_kadrov_2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Otdel_kadrov_2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: Сотрудники
 */
@Entity(name = "IISOtdel_kadrov_2Сотрудники")
@Table(schema = "public", name = "Сотрудники")
public class Sotrudniki {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ФИО")
    private String фио;

    @Column(name = "ДатаРождения")
    private Date датарождения;

    @Column(name = "IDСотрудника")
    private Integer idсотрудника;

    @Column(name = "Пол")
    private String пол;

    @Column(name = "Подразделение")
    private String подразделение;

    @Column(name = "ЗнаниеЯзыков")
    private String знаниеязыков;

    @Column(name = "Образование")
    private String образование;

    @Column(name = "Гражданство")
    private String гражданство;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Dolzhnost")
    @Convert("Dolzhnost")
    @Column(name = "Должность", length = 16, unique = true, nullable = false)
    private UUID _dolzhnostid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Dolzhnost", insertable = false, updatable = false)
    private Dolzhnost dolzhnost;


    public Sotrudniki() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getФИО() {
      return фио;
    }

    public void setФИО(String фио) {
      this.фио = фио;
    }

    public Date getДатаРождения() {
      return датарождения;
    }

    public void setДатаРождения(Date датарождения) {
      this.датарождения = датарождения;
    }

    public Integer getIDСотрудника() {
      return idсотрудника;
    }

    public void setIDСотрудника(Integer idсотрудника) {
      this.idсотрудника = idсотрудника;
    }

    public String getПол() {
      return пол;
    }

    public void setПол(String пол) {
      this.пол = пол;
    }

    public String getПодразделение() {
      return подразделение;
    }

    public void setПодразделение(String подразделение) {
      this.подразделение = подразделение;
    }

    public String getЗнаниеЯзыков() {
      return знаниеязыков;
    }

    public void setЗнаниеЯзыков(String знаниеязыков) {
      this.знаниеязыков = знаниеязыков;
    }

    public String getОбразование() {
      return образование;
    }

    public void setОбразование(String образование) {
      this.образование = образование;
    }

    public String getГражданство() {
      return гражданство;
    }

    public void setГражданство(String гражданство) {
      this.гражданство = гражданство;
    }


}