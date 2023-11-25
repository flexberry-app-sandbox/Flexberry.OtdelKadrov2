package Otdel_kadrov_2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Otdel_kadrov_2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.Date;

/**
 * Entity implementation class for Entity: ТаблЧастьСотруд
 */
@Entity(name = "IISOtdel_kadrov_2ТаблЧастьСотруд")
@Table(schema = "public", name = "ТаблЧастьСотруд")
public class TablCHastSotrud {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НаимОбуч")
    private String наимобуч;

    @Column(name = "Квалификация")
    private String квалификация;

    @Column(name = "НаимДок")
    private String наимдок;

    @Column(name = "Cерия")
    private Integer cерия;

    @Column(name = "Номер")
    private Integer номер;

    @Column(name = "ГодОкончания")
    private Date годокончания;


    public TablCHastSotrud() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getНаимОбуч() {
      return наимобуч;
    }

    public void setНаимОбуч(String наимобуч) {
      this.наимобуч = наимобуч;
    }

    public String getКвалификация() {
      return квалификация;
    }

    public void setКвалификация(String квалификация) {
      this.квалификация = квалификация;
    }

    public String getНаимДок() {
      return наимдок;
    }

    public void setНаимДок(String наимдок) {
      this.наимдок = наимдок;
    }

    public Integer getCерия() {
      return cерия;
    }

    public void setCерия(Integer cерия) {
      this.cерия = cерия;
    }

    public Integer getНомер() {
      return номер;
    }

    public void setНомер(Integer номер) {
      this.номер = номер;
    }

    public Date getГодОкончания() {
      return годокончания;
    }

    public void setГодОкончания(Date годокончания) {
      this.годокончания = годокончания;
    }


}