package Otdel_kadrov_2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Otdel_kadrov_2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: Увольнение
 */
@Entity(name = "IISOtdel_kadrov_2Увольнение")
@Table(schema = "public", name = "Увольнение")
public class Uvolnenie {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ДатаУвольнения")
    private Date датаувольнения;

    @Column(name = "ДатаДк")
    private Date датадк;

    @Column(name = "Основание")
    private String основание;

    @Column(name = "Ответственный")
    private String ответственный;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudniki")
    @Convert("Sotrudniki")
    @Column(name = "Сотрудники", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudniki", insertable = false, updatable = false)
    private Sotrudniki sotrudniki;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "OtdelKadrov")
    @Convert("OtdelKadrov")
    @Column(name = "ОтделКадров", length = 16, unique = true, nullable = false)
    private UUID _otdelkadrovid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "OtdelKadrov", insertable = false, updatable = false)
    private OtdelKadrov otdelkadrov;


    public Uvolnenie() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДатаУвольнения() {
      return датаувольнения;
    }

    public void setДатаУвольнения(Date датаувольнения) {
      this.датаувольнения = датаувольнения;
    }

    public Date getДатаДк() {
      return датадк;
    }

    public void setДатаДк(Date датадк) {
      this.датадк = датадк;
    }

    public String getОснование() {
      return основание;
    }

    public void setОснование(String основание) {
      this.основание = основание;
    }

    public String getОтветственный() {
      return ответственный;
    }

    public void setОтветственный(String ответственный) {
      this.ответственный = ответственный;
    }


}