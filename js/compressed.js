function updateQuali(e,a){var d=Array("Mínima do Cargo","Fundamental Completo","Médio Completo","Médio Técnico","Graduação Completa","Especialização","Mestrado","Doutorado"),u=Array(0,1,2,3,4,5,6,7),l=Array(),r=Array(),n=parseFloat(a);for(11>=n?(l=d,r=u):17==n?(l=d.slice(2,d.length),r=u.slice(2,d.length),l.splice(0,1,"Exigência Mínima"),r.splice(0,1,0)):31==n&&(l=d.slice(4,d.length),r=u.slice(4,d.length),l.splice(0,1,"Exigência Mínima"),r.splice(0,1,0));e.ddQuali.options.length;)e.ddQuali.options[0]=null;for(i=0;i<l.length;i++)option=new Option(l[i],r[i]),e.ddQuali.options[e.ddQuali.length]=option;calcSalario(e)}function calcfatorpg(e,a){var d=Array();return d=a?Array(0,.1,.15,.2,.25,.3,.52,.75):Array(0,0,0,.1,.15,.2,.35,.5),d[e]}function firstload(){updateQuali(myform,1),updateQuali(myform2,1)}function validateGD1(e,a){var d=e||window.event,u=d.keyCode||d.which;u=String.fromCharCode(u);var l=/[0-9]|\./;l.test(u)||(d.returnValue=!1,d.preventDefault&&d.preventDefault())}function validateGD2(e){var a=e.gastoTrans.value;a>20?(a=a.toString().substring(0,a.length-1),a>20&&(a=a.toString().substring(0,a.length-1))):a=parseInt(a,10),e.gastoTrans.value=a,calcSalario(e)}function formatValor(e){var a=/^\d+$/;return 0===e?"R$ 0,00":a.test(e)?"R$ "+e+",00":a.test(10*e)?"R$ "+e.toString().replace(".",",")+"0":"R$ "+e.toString().replace(".",",")}function valorIRRF(e,a){var d=0;return 1==a?d=1710.79>e?0:2563.92>e?.075*e-128.31:3418.6>e?.15*e-320.6:4271.59>e?.225*e-577:.275*e-790.58:4>=a?1787.77>=e?d=0:2679.29>=e?(d=.075*e-134,8):3572.43>=e?(d=.15*e-335,3):d=4463.81>=e?.225*e-602.96:.275*e-826.15:d=1903.98>=e?0:2826.65>=e?.075*e-142.8:3751.05>=e?.15*e-354.8:4664.68>=e?.225*e-636.13:.275*e-869.36,Math.floor(100*d)/100}function dependentesIR(e,a){var d=0;return d=1==a?171.97*e:4>=a?179.71*e:189.59*e,Math.floor(100*d)/100}function valorSaude(e,a,d){var u=Array();u[0]=Array(121.94,127.69,129.42,134.6,138.62,143.22,154.98,157.44,159.9,167.7),u[1]=Array(116.19,121.94,123.67,127.69,131.72,136.32,147.42,149.76,152.1,159.9),u[2]=Array(110.44,116.19,117.92,121.94,125.97,130.57,139.86,142.08,144.3,152.1),u[3]=Array(105.84,110.44,112.16,116.19,120.22,124.82,133.56,135.68,137.8,144.3),u[4]=Array(100.08,105.84,107.56,110.44,114.46,119.07,127.26,129.28,131.3,137.8),u[5]=Array(90.88,93.18,94.91,95.48,99.51,104.11,105.84,107.52,109.2,111.8),u[6]=Array(87.43,88.58,90.31,90.88,94.91,99.51,100.8,102.4,104,106.6),u[7]=Array(82.83,83.98,85.7,86.28,90.31,94.91,95.76,97.28,98.8,101.4);var l=0;l=1500>e?0:2e3>e?1:2500>e?2:3e3>e?3:4e3>e?4:5500>e?5:7500>e?6:7;var r=1;return d>=6&&(r=1.22618),1e3==a?0:Math.round(u[l][a]*r*100)/100}function valorCreche(e,a,d){if(6>a){var u=0;return u=6200.8>e?.05:12401.6>e?.1:18602.4>e?.15:24803.2>e?.2:.25,95*(1-u)*d}return 321*d}function valorTransporte(e,a){var d=0;return isNaN(a)||0>a?gastodiario=0:gastodiario=.2*Math.ceil((a-1)/.2)+1,d=22*gastodiario-.06*e*(22/30),0>d?0:d}function valorFG(e,a){var d=Array(0,777.26,522.9,423.94,215.78,175.09,128.4,81.89,60.57,49.15),u=Array(0,790.75,531.99,431.3,219.54,187.14,130.63,83.31,61.61,50),l=Array(0,804.49,541.23,438.79,223.35,181.23,132.89,84.75,62.69,50.86),r=0;return r=1==a?d[e]:2>=a?u[e]:l[e]}function valorCD(e,a){var d=Array(0,9575.95,8004.9,9284.22,4563.53),u=Array(0,10315.37,8623.02,6769.47,4915.92),l=Array(0,11111.9,9288.86,7292.19,5295.51),r=0;return r=1==a?d[e]:3>=a?u[e]:5>=a?l[e]:l[e]}function calcSalario(e){var a=parseInt(e.ddAno.value,10);e.medico.checked?(ftstep=1.038,4>=a?base=2281.27:base=2395.33):1==a?(ftstep=1.036,base=1086.32):2==a?(ftstep=1.037,base=1086.32):3==a?(ftstep=1.037,base=1140.64):4==a?(ftstep=1.038,base=1140.64):5==a||6==a?(ftstep=1.038,base=1197.67):7==a?(ftstep=1.038,base=1263.54):8==a?(ftstep=1.039,base=1326.72):9==a?(ftstep=1.0405,base=1535.84):10==a?(ftstep=1.043,base=1960.17):11==a&&(ftstep=1.0455,base=2501.73);var d=parseFloat(e.ddClasse.value)+parseFloat(e.ddNivel.value)+parseFloat(e.ddProg.value)-3,u=e.ddCargaH.value;if(0==e.ddCD.value||e.rdCD[0].checked)var l=Math.floor(base*Math.pow(ftstep,d)*u*100)/100;else var l=valorCD(e.ddCD.value,a);var r=e.numAnuenio.value/100*l,n=0;n=6>a?e.alim.checked?373:0:e.alim.checked?458:0,.5==u&&(n/=2);var t=e.trans.checked?valorTransporte(l,e.gastoTrans.value):0,o=e.ddInsa.value,v=calcfatorpg(e.ddQuali.value,e.areaquali[0].checked),c=e.removeurp.checked?.2605*l*(1+v):0,i=v*l,s=l+c+i+Math.floor(o*l*100)/100+r,p=e.sintfub.checked?.01*s:0,m=e.saude.checked?valorSaude(s,parseInt(e.ddIdade.value,10),a)+valorSaude(s,parseInt(e.ddIdadeDep1.value,10),a)+valorSaude(s,parseInt(e.ddIdadeDep2.value,10),a)+valorSaude(s,parseInt(e.ddIdadeDep3.value,10),a):0,h=valorCreche(s,a,e.numCreche.value),f=valorFG(parseInt(e.ddFG.value,10),a),k=e.rdCD[0].checked?.6*valorCD(e.ddCD.value,a):0,I=s+m+n+t+h+f+k,D=l+c+i,g=4663.75;a>=6&&(g=5189.82),e.novopss.checked&&D>g&&(D=g);var C=Math.floor(.11*D*100)/100,A=0;if("sim"==e.funp_ad.value)if(D==g){var F=l+c+i-g;A=F*e.ddFunp.value,"myform"==e.name?(document.getElementById("funp_plano_norm1").checked=!0,document.getElementById("ddFunp1").disabled=!1,document.getElementById("numFunpAlt1").disabled=!0):(document.getElementById("funp_plano_norm2").checked=!0,document.getElementById("ddFunp2").disabled=!1,document.getElementById("numFunpAlt2").disabled=!0)}else A=e.numFunpAlt.value,"myform"==e.name?(document.getElementById("funp_plano_alt1").checked=!0,document.getElementById("ddFunp1").disabled=!0,document.getElementById("numFunpAlt1").disabled=!1):(document.getElementById("funp_plano_alt2").checked=!0,document.getElementById("ddFunp2").disabled=!0,document.getElementById("numFunpAlt2").disabled=!1);var y=dependentesIR(e.numDepIRRF.value,a),b=l+c+i+o*l+f+h-C-A-y,M=valorIRRF(b,a),R=Math.round(100*(I-M-C-A-p))/100;"myform"==e.name?liq1=R:liq2=R,document.getElementById("diffLiqAbs").value=formatValor(Math.abs(Math.round(100*(liq1-liq2))/100)),document.getElementById("diffLiqPor").value=Math.round(100*liq2/liq1)+"%",e.txVB.value=formatValor(l),e.txResult.value=formatValor(R),e.txInsa.value=formatValor(Math.floor(o*l*100)/100),e.txInss.value=formatValor(Math.round(100*C)/100),e.txBruto.value=formatValor(Math.round(100*I)/100),e.txIrrf.value=formatValor(Math.round(100*M)/100),e.txSaude.value=formatValor(m),e.txTrans.value=formatValor(Math.round(100*t)/100),e.txAlim.value=formatValor(n),e.txCreche.value=formatValor(h),e.txURP.value=formatValor(Math.round(100*c)/100),e.txbIRRF.value=formatValor(Math.round(100*b)/100),e.txbINSS.value=formatValor(Math.round(100*D)/100),e.txdesconto.value=formatValor(Math.round(100*(M+C))/100),e.txsintfub.value=formatValor(Math.round(100*p)/100),e.txQualif.value=formatValor(Math.round(100*i)/100),e.txFunp.value=formatValor(Math.round(100*A)/100),e.txDepIRRF.value=formatValor(y),e.txFG.value=formatValor(f),e.txCD.value=formatValor(e.rdCD[0].checked?Math.round(100*k)/100:valorCD(e.ddCD.value,a))}function inverterform(e){var a=document.forms.myform,d=document.forms.myform2;if("inverter"==e)var u=Array(a.ddClasse.value,a.ddProg.value,a.ddFG.value,a.ddNivel.value,a.ddCargaH.value,a.ddAno.value,a.ddQuali.value,a.saude.checked,a.ddIdade.value,a.removeurp.checked,a.trans.checked,a.gastoTrans.value,a.alim.checked,a.ddInsa.value,a.numCreche.value,a.sintfub.checked,a.areaquali[0].checked,a.areaquali[1].checked,a.novopss.checked,a.ddFunp.value,a.numAnuenio.value,a.funp_ad.value,a.numFunpAlt.value,a.numDepIRRF.value,a.ddIdadeDep1.value,a.ddIdadeDep2.value,a.ddIdadeDep3.value,a.ddCD.value,a.rdCD[0].checked,a.rdCD[1].checked),l=Array(d.ddClasse.value,d.ddProg.value,d.ddFG.value,d.ddNivel.value,d.ddCargaH.value,d.ddAno.value,d.ddQuali.value,d.saude.checked,d.ddIdade.value,d.removeurp.checked,d.trans.checked,d.gastoTrans.value,d.alim.checked,d.ddInsa.value,d.numCreche.value,d.sintfub.checked,d.areaquali[0].checked,d.areaquali[1].checked,d.novopss.checked,d.ddFunp.value,d.numAnuenio.value,d.funp_ad.value,d.numFunpAlt.value,d.numDepIRRF.value,d.ddIdadeDep1.value,d.ddIdadeDep2.value,d.ddIdadeDep3.value,d.ddCD.value,d.rdCD[0].checked,d.rdCD[1].checked);else if("cima"==e)var l=Array(d.ddClasse.value,d.ddProg.value,d.ddFG.value,d.ddNivel.value,d.ddCargaH.value,d.ddAno.value,d.ddQuali.value,d.saude.checked,d.ddIdade.value,d.removeurp.checked,d.trans.checked,d.gastoTrans.value,d.alim.checked,d.ddInsa.value,d.numCreche.value,d.sintfub.checked,d.areaquali[0].checked,d.areaquali[1].checked,d.novopss.checked,d.ddFunp.value,d.numAnuenio.value,d.funp_ad.value,d.numFunpAlt.value,d.numDepIRRF.value,d.ddIdadeDep1.value,d.ddIdadeDep2.value,d.ddIdadeDep3.value,d.ddCD.value,d.rdCD[0].checked,d.rdCD[1].checked),u=l;else var u=Array(a.ddClasse.value,a.ddProg.value,a.ddFG.value,a.ddNivel.value,a.ddCargaH.value,a.ddAno.value,a.ddQuali.value,a.saude.checked,a.ddIdade.value,a.removeurp.checked,a.trans.checked,a.gastoTrans.value,a.alim.checked,a.ddInsa.value,a.numCreche.value,a.sintfub.checked,a.areaquali[0].checked,a.areaquali[1].checked,a.novopss.checked,a.ddFunp.value,a.numAnuenio.value,a.funp_ad.value,a.numFunpAlt.value,a.numDepIRRF.value,a.ddIdadeDep1.value,a.ddIdadeDep2.value,a.ddIdadeDep3.value,a.ddCD.value,a.rdCD[0].checked,a.rdCD[1].checked),l=u;a.ddClasse.value=l[0],a.ddProg.value=l[1],a.ddFG.value=l[2],a.ddNivel.value=l[3],a.ddCargaH.value=l[4],a.ddAno.value=l[5],a.saude.checked=l[7],a.ddIdade.value=l[8],a.removeurp.checked=l[9],a.trans.checked=l[10],a.gastoTrans.value=l[11],a.alim.checked=l[12],a.ddInsa.value=l[13],a.numCreche.value=l[14],a.sintfub.checked=l[15],a.areaquali[0].checked=l[16],a.areaquali[1].checked=l[17],a.novopss.checked=l[18],a.ddFunp.value=l[19],a.numAnuenio.value=l[20],a.funp_ad.value=l[21],a.numFunpAlt.value=l[22],a.numDepIRRF.value=l[23],a.ddIdadeDep1.value=l[24],a.ddIdadeDep2.value=l[25],a.ddIdadeDep3.value=l[26],a.ddCD.value=l[27],a.rdCD[0].checked=l[28],a.rdCD[1].checked=l[29],d.ddClasse.value=u[0],d.ddProg.value=u[1],d.ddFG.value=u[2],d.ddNivel.value=u[3],d.ddCargaH.value=u[4],d.ddAno.value=u[5],d.saude.checked=u[7],d.ddIdade.value=u[8],d.removeurp.checked=u[9],d.trans.checked=u[10],d.gastoTrans.value=u[11],d.alim.checked=u[12],d.ddInsa.value=u[13],d.numCreche.value=u[14],d.sintfub.checked=u[15],d.areaquali[0].checked=u[16],d.areaquali[1].checked=u[17],d.novopss.checked=u[18],d.ddFunp.value=u[19],d.numAnuenio.value=u[20],d.funp_ad.value=u[21],d.numFunpAlt.value=u[22],d.numDepIRRF.value=u[23],d.ddIdadeDep1.value=u[24],d.ddIdadeDep2.value=u[25],d.ddIdadeDep3.value=u[26],d.ddCD.value=u[27],d.rdCD[0].checked=u[28],d.rdCD[1].checked=u[29],updateQuali(a,l[0]),updateQuali(d,u[0]),a.ddQuali.value=l[6],d.ddQuali.value=u[6],calcSalario(a),calcSalario(d)}var liq1=0,liq2=0;