select oge.*
from sev.police pol, sev.vertrag ver, sev.gefahr gef, sev.gefahr_objekt gob,
  sev.objekt_gebaeude oge
where  pol.pol_policen_nr = 3000000300
  and pol.pol_gueltig_ab <= :standdatum
  and pol.pol_ungueltig_ab > :standdatum
  and pol.pol_historie IN ('AN', 'HN')
  and ver.pol_policen_nr = pol.pol_policen_nr
  and ver.pol_gueltig_ab <= :standdatum
  and ver.ver_ungueltig_ab > :standdatum
  and ver.ver_historie IN ('AN', 'HN')
  and gef.pol_policen_nr = ver.pol_policen_nr
  and gef.ver_vertrag_nr = ver.ver_vertrag_nr
  and gef.pol_gueltig_ab <= :standdatum
  and gef.gef_ungueltig_ab > :standdatum
  and gef.gef_historie IN ('AN', 'HN')
  and gob.pol_policen_nr = gef.pol_policen_nr
  and gob.ver_vertrag_nr = gef.ver_vertrag_nr
  and gob.gef_gefahr_nr = gef.gef_gefahr_nr
  and gob.pol_gueltig_ab <= :standdatum
  and gob.gob_ungueltig_ab > :standdatum
  and gob.gob_historie IN ('AN', 'HN')
  and oge.pol_policen_nr = gob.pol_policen_nr
  and oge.ver_vertrag_nr = gob.ver_vertrag_nr
  and oge.gef_gefahr_nr = gob.gef_gefahr_nr
  and oge.obj_objekt_nr = gob.obj_objekt_nr
  and oge.pol_gueltig_ab = gob.pol_gueltig_ab
  and oge.pol_aenderung = gob.pol_aenderung
