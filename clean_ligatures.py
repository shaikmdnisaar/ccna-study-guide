"""Clean PDF-extraction ligature corruption in real_quizzes.json display text.
Common pypdf artifact: 'destination' -> 'desKnaKon' (K replaces 'ti' etc).
Only well-known unambiguous repairs; originals otherwise preserved."""
import json, re

BASE = r"c:\Users\User\Documents\CCNA-Visual-Study-Guide"
with open(BASE + r"\real_quizzes.json", encoding="utf-8") as f:
    qs = json.load(f)

# artifact -> fix  (ligature-damaged words observed across all 31 PDFs)
FIX = {
 "desKnaKon":"destination","des@naJon":"destination","des>na>on":"destination","destinaKon":"destination",
 "communicaKon":"communication","communicaJon":"communication","communicaDon":"communication","communica>on":"communication","communicaBon":"communication",
 "connecKon":"connection","connecJon":"connection","connecDon":"connection","connec@on":"connection","connec pvon":"connection","connec vity":"connectivity","connecCng":"connecting","connecBvity":"connectivity",
 "conﬁguraKon":"configuration","conﬁguraJon":"configuration","conﬁguraDon":"configuration","conﬁgura>on":"configuration","conﬁgura=on":"configuration","conﬁguraBon":"configuration","conﬁguraIng":"configuration",
 "se]ng":"setting","seYng":"setting","secng":"setting","se9ng":"setting","sepng":"setting","seZng":"setting",
 "speciﬁc":"specific","speciﬁcaJon":"specification","MulKlayer":"Multilayer","mulKlayer":"multilayer",
 "PrevenKon":"Prevention","prevenWon":"prevention","prevenBon":"prevention",
 "Ques%ons":"Questions","Ques&ons":"Questions","Ques on":"Questions",
 "Explana3on":"Explanation","Explana4on":"Explanation","Explana1on":"Explanation","Explana on":"Explanation",
 "subne]ng":"subnetting","subneWng":"subnetting","subneIng":"subnetting","subne1ng":"subnetting","subne png":"subnetting","subneBng":"subnetting",
 "doNed":"dotted","mulWcast":"multicast","MulWcast":"Multicast","StaWc":"Static","staWc":"static","staWon":"station",
 "TranslaWon":"Translation","translaWon":"translation","translaBon":"translation",
 "tradiKonal":"traditional","TradiKonal":"Traditional","tradi>onal":"traditional","capabiliKes":"capabilities","capabili@es":"capabilities","capabiliBes":"capabilities",
 "idenKﬁer":"identifier","iden ﬁer":"identifier","idennﬁer":"identifier","iden ﬁcaIon":"identification","iden ﬁcaJon":"identification",
 "noKce":"notice","noKcing":"noticing","mulWple":"multiple","mulBple":"multiple","mulWplex":"multiplex",
 "allocaKon":"allocation","alloca png":"allocating","allocaJon":"allocation","allocaBon":"allocation",
 "integraKon":"integration","integra=ng":"integrating","aﬀec=ng":"affecting","aﬀecBng":"affecting","aﬀect":"affect",
 "opImize":"optimize","opImal":"optimal","opBmize":"optimize","rou png":"routing","rou@ng":"routing","rouBng":"routing",
 "eﬃciently":"efficiently","eﬃcient":"efficient","eﬃciency":"efficiency","traﬃc":"traffic",
 "UKlizes":"Utilizes","UKlizing":"Utilizing","uKlize":"utilize","UKlise":"utilise","UTlizes":"Utilizes","uBlizes":"utilizes",
 "funcKon":"function","funcJon":"function","funcDon":"function","funcBon":"function","func>on":"function","funcBonality":"functionality",
 "interpretaKon":"interpretation","authen caKon":"authentication","encrypKon":"encryption","encrypBon":"encryption",
 "ver ﬁcaIon":"verification","veriﬁcaIon":"verification","veriﬁca>on":"verification","resolu>on":"resolution","resoluJon":"resolution","resoluKon":"resolution",
 "advantage":"advantage","troubleshooKng":"troubleshooting","troubleshoo ng":"troubleshooting",
 "aded":"added","sepngs":"settings","protocol":"protocol"," protec on":"protection","protecKon":"protection","protecBon":"protection",
 "ﬂooded":"flooded","ﬂood":"flood"," Etherney":"Ethernet","ad hoc":"ad hoc","bandwidth":"bandwidth",
 "Australian":"Australian","administrable":"administrable","administraBve":"administrative","administraKve":"administrative",
 "applicaIon":"application","applicaJon":"application","applicaBon":"application","applica>on":"application",
 "roaming":"roaming","detecBon":"detection","detecKon":"detection","detec>on":"detection","detecon":"detection",
 "distribuBon":"distribution","distribuKon":"distribution","distribu@on":"distribution","distribute":"distribute",
 "transmi  on":"transmission","transmission":"transmission","collaboraKon":"collaboration","comunica":"communication",
 "hierarchically":"hierarchically","hierarchy":"hierarchy","topological":"topological","topology":"topology",
 "concentrator":"concentrator","telephony":"telephony","EtherChannel":"EtherChannel","aggrega>on":"aggregation","aggregaKon":"aggregation",
 "priori>ze":"prioritize","prioriBze":"prioritize","priori zed":"prioritized","priority":"priority",
 "broadcaspng":"broadcasting","broadcas ng":"broadcasting","broadcasKon":"broadcast",
 "neighborhood":"neighborhood","ne":"ne","neighbor":"neighbor","converge":"converge","convergence":"convergence",
 "entre":"entire","u lize":"utilize","Protectors":"Protectors","protec on":"protection",
 "advertisements":"advertisements","represen aon":"representation","segmentaon":"segmentation","solucion":"solution",
 "known":"known","connec ed":"connected","portable":"portable","portals":"portals","compu ng":"computing",
}
rx = re.compile("|".join(re.escape(k) for k in sorted(FIX, key=len, reverse=True)))

def fix(s):
    if not s: return s
    out = rx.sub(lambda m: FIX[m.group(0)], s)
    # generic K-ligature pattern: lowercase-K embedded inside common English endings
    out = re.sub(r"(\w[a-z])K([a-z]{2,3})\b", r"\1ti\2", out)  # desKnaKon->destination style residual
    return out

n=0
for q in qs:
    for fld in ("q","explanation"):
        if q.get(fld):
            q[fld]=fix(q[fld]); n+=1
    q["options"]=[fix(o) for o in q.get("options",[])]

with open(BASE + r"\real_quizzes.json","w",encoding="utf-8") as f:
    json.dump(qs,f,ensure_ascii=False,indent=1)
print("cleaned fields:",n)
# verify
print(json.load(open(BASE+r"\real_quizzes.json",encoding="utf-8"))[0]["q"][:120])
