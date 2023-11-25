package Otdel_kadrov_2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Otdel_kadrov_2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ТаблЧастьГО
 */
@Entity(name = "IISOtdel_kadrov_2ТаблЧастьГО")
@Table(schema = "public", name = "ТаблЧастьГО")
public class TablCHastGO {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Код")
    private Integer код;

    @Column(name = "КолКалДней")
    private Integer колкалдней;

    @Column(name = "ДатаЗап")
    private Date датазап;

    @Column(name = "ДатаФакт")
    private Date датафакт;

    @Column(name = "Основание")
    private String основание;

    @Column(name = "Перенос")
    private Date перенос;

    @Column(name = "Примечание")
    private String примечание;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudniki")
    @Convert("Sotrudniki")
    @Column(name = "Сотрудники", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudniki", insertable = false, updatable = false)
    private Sotrudniki sotrudniki;


    public TablCHastGO() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКод() {
      return код;
    }

    public void setКод(Integer код) {
      this.код = код;
    }

    public Integer getКолКалДней() {
      return колкалдней;
    }

    public void setКолКалДней(Integer колкалдней) {
      this.колкалдней = колкалдней;
    }

    public Date getДатаЗап() {
      return датазап;
    }

    public void setДатаЗап(Date датазап) {
      this.датазап = датазап;
    }

    public Date getДатаФакт() {
      return датафакт;
    }

    public void setДатаФакт(Date датафакт) {
      this.датафакт = датафакт;
    }

    public String getОснование() {
      return основание;
    }

    public void setОснование(String основание) {
      this.основание = основание;
    }

    public Date getПеренос() {
      return перенос;
    }

    public void setПеренос(Date перенос) {
      this.перенос = перенос;
    }

    public String getПримечание() {
      return примечание;
    }

    public void setПримечание(String примечание) {
      this.примечание = примечание;
    }


}