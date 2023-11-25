package Otdel_kadrov_2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Otdel_kadrov_2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ТаблЧастьСШР
 */
@Entity(name = "IISOtdel_kadrov_2ТаблЧастьСШР")
@Table(schema = "public", name = "ТаблЧастьСШР")
public class TablCHastSSHR {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Код")
    private Integer код;

    @Column(name = "Наименование")
    private String наименование;

    @Column(name = "КоличествоШЕ")
    private Integer количествоше;

    @Column(name = "ТарифнаяСтавка")
    private Integer тарифнаяставка;

    @Column(name = "Надбавки")
    private Integer надбавки;

    @Column(name = "Всего")
    private Integer всего;

    @Column(name = "Примечание")
    private String примечание;

    @Column(name = "ВсегоКолШЕ")
    private Integer всегоколше;

    @Column(name = "ВсегоТС")
    private Integer всеготс;

    @Column(name = "ВсегоНадбавки")
    private Integer всегонадбавки;

    @Column(name = "ИтогоВсего")
    private Integer итоговсего;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Dolzhnost")
    @Convert("Dolzhnost")
    @Column(name = "Должность", length = 16, unique = true, nullable = false)
    private UUID _dolzhnostid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Dolzhnost", insertable = false, updatable = false)
    private Dolzhnost dolzhnost;


    public TablCHastSSHR() {
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

    public String getНаименование() {
      return наименование;
    }

    public void setНаименование(String наименование) {
      this.наименование = наименование;
    }

    public Integer getКоличествоШЕ() {
      return количествоше;
    }

    public void setКоличествоШЕ(Integer количествоше) {
      this.количествоше = количествоше;
    }

    public Integer getТарифнаяСтавка() {
      return тарифнаяставка;
    }

    public void setТарифнаяСтавка(Integer тарифнаяставка) {
      this.тарифнаяставка = тарифнаяставка;
    }

    public Integer getНадбавки() {
      return надбавки;
    }

    public void setНадбавки(Integer надбавки) {
      this.надбавки = надбавки;
    }

    public Integer getВсего() {
      return всего;
    }

    public void setВсего(Integer всего) {
      this.всего = всего;
    }

    public String getПримечание() {
      return примечание;
    }

    public void setПримечание(String примечание) {
      this.примечание = примечание;
    }

    public Integer getВсегоКолШЕ() {
      return всегоколше;
    }

    public void setВсегоКолШЕ(Integer всегоколше) {
      this.всегоколше = всегоколше;
    }

    public Integer getВсегоТС() {
      return всеготс;
    }

    public void setВсегоТС(Integer всеготс) {
      this.всеготс = всеготс;
    }

    public Integer getВсегоНадбавки() {
      return всегонадбавки;
    }

    public void setВсегоНадбавки(Integer всегонадбавки) {
      this.всегонадбавки = всегонадбавки;
    }

    public Integer getИтогоВсего() {
      return итоговсего;
    }

    public void setИтогоВсего(Integer итоговсего) {
      this.итоговсего = итоговсего;
    }


}