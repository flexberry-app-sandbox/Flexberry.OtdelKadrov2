package Otdel_kadrov_2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Otdel_kadrov_2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ТабУчРВ
 */
@Entity(name = "IISOtdel_kadrov_2ТабУчРВ")
@Table(schema = "public", name = "ТабУчРВ")
public class TabUchRV {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ДатаДк")
    private Date датадк;

    @Column(name = "Руководитель")
    private String руководитель;

    @Column(name = "Период")
    private Date период;

    @Column(name = "Исполнитель")
    private String исполнитель;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "OtdelKadrov")
    @Convert("OtdelKadrov")
    @Column(name = "ОтделКадров", length = 16, unique = true, nullable = false)
    private UUID _otdelkadrovid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "OtdelKadrov", insertable = false, updatable = false)
    private OtdelKadrov otdelkadrov;


    public TabUchRV() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДатаДк() {
      return датадк;
    }

    public void setДатаДк(Date датадк) {
      this.датадк = датадк;
    }

    public String getРуководитель() {
      return руководитель;
    }

    public void setРуководитель(String руководитель) {
      this.руководитель = руководитель;
    }

    public Date getПериод() {
      return период;
    }

    public void setПериод(Date период) {
      this.период = период;
    }

    public String getИсполнитель() {
      return исполнитель;
    }

    public void setИсполнитель(String исполнитель) {
      this.исполнитель = исполнитель;
    }


}