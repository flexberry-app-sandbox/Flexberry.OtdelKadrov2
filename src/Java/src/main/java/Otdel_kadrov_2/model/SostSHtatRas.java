package Otdel_kadrov_2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Otdel_kadrov_2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: СостШтатРас
 */
@Entity(name = "IISOtdel_kadrov_2СостШтатРас")
@Table(schema = "public", name = "СостШтатРас")
public class SostSHtatRas {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Период")
    private Date период;

    @Column(name = "РуководительКО")
    private String руководителько;

    @Column(name = "ДатаДк")
    private Date датадк;

    @Column(name = "ГлавБух")
    private String главбух;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "OtdelKadrov")
    @Convert("OtdelKadrov")
    @Column(name = "ОтделКадров", length = 16, unique = true, nullable = false)
    private UUID _otdelkadrovid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "OtdelKadrov", insertable = false, updatable = false)
    private OtdelKadrov otdelkadrov;


    public SostSHtatRas() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getПериод() {
      return период;
    }

    public void setПериод(Date период) {
      this.период = период;
    }

    public String getРуководительКО() {
      return руководителько;
    }

    public void setРуководительКО(String руководителько) {
      this.руководителько = руководителько;
    }

    public Date getДатаДк() {
      return датадк;
    }

    public void setДатаДк(Date датадк) {
      this.датадк = датадк;
    }

    public String getГлавБух() {
      return главбух;
    }

    public void setГлавБух(String главбух) {
      this.главбух = главбух;
    }


}