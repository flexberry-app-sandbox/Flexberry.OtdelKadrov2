package Otdel_kadrov_2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Otdel_kadrov_2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.Date;

/**
 * Entity implementation class for Entity: ТаблЧастьТУ
 */
@Entity(name = "IISOtdel_kadrov_2ТаблЧастьТУ")
@Table(schema = "public", name = "ТаблЧастьТУ")
public class TablCHastTU {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Код")
    private Integer код;

    @Column(name = "ДатаДк")
    private Date датадк;

    @Column(name = "ЯвкаНеявка")
    private Boolean явканеявка;

    @Column(name = "КолЯвокПМес")
    private Integer колявокпмес;

    @Column(name = "КолЯвокМес")
    private Integer колявокмес;

    @Column(name = "ЧасыЗаПМес")
    private Double часызапмес;

    @Column(name = "ЧасыЗаМесяц")
    private Double часызамесяц;

    @Column(name = "КодВидаОплаты")
    private String кодвидаоплаты;

    @Column(name = "КорресСчет")
    private Integer коррессчет;

    @Column(name = "ДниЧасы")
    private Integer дничасы;

    @Column(name = "КолНеявок")
    private Integer колнеявок;

    @Column(name = "ИзНихПоПричинам")
    private Integer изнихпопричинам;

    @Column(name = "КолВыхПразд")
    private Integer колвыхпразд;


    public TablCHastTU() {
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

    public Date getДатаДк() {
      return датадк;
    }

    public void setДатаДк(Date датадк) {
      this.датадк = датадк;
    }

    public Boolean getЯвкаНеявка() {
      return явканеявка;
    }

    public void setЯвкаНеявка(Boolean явканеявка) {
      this.явканеявка = явканеявка;
    }

    public Integer getКолЯвокПМес() {
      return колявокпмес;
    }

    public void setКолЯвокПМес(Integer колявокпмес) {
      this.колявокпмес = колявокпмес;
    }

    public Integer getКолЯвокМес() {
      return колявокмес;
    }

    public void setКолЯвокМес(Integer колявокмес) {
      this.колявокмес = колявокмес;
    }

    public Double getЧасыЗаПМес() {
      return часызапмес;
    }

    public void setЧасыЗаПМес(Double часызапмес) {
      this.часызапмес = часызапмес;
    }

    public Double getЧасыЗаМесяц() {
      return часызамесяц;
    }

    public void setЧасыЗаМесяц(Double часызамесяц) {
      this.часызамесяц = часызамесяц;
    }

    public String getКодВидаОплаты() {
      return кодвидаоплаты;
    }

    public void setКодВидаОплаты(String кодвидаоплаты) {
      this.кодвидаоплаты = кодвидаоплаты;
    }

    public Integer getКорресСчет() {
      return коррессчет;
    }

    public void setКорресСчет(Integer коррессчет) {
      this.коррессчет = коррессчет;
    }

    public Integer getДниЧасы() {
      return дничасы;
    }

    public void setДниЧасы(Integer дничасы) {
      this.дничасы = дничасы;
    }

    public Integer getКолНеявок() {
      return колнеявок;
    }

    public void setКолНеявок(Integer колнеявок) {
      this.колнеявок = колнеявок;
    }

    public Integer getИзНихПоПричинам() {
      return изнихпопричинам;
    }

    public void setИзНихПоПричинам(Integer изнихпопричинам) {
      this.изнихпопричинам = изнихпопричинам;
    }

    public Integer getКолВыхПразд() {
      return колвыхпразд;
    }

    public void setКолВыхПразд(Integer колвыхпразд) {
      this.колвыхпразд = колвыхпразд;
    }


}