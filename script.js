// Input 
let plusbudget = document.getElementById('plusbudget');
let whydepense = document.getElementById('whydepense');
let montantdepense = document.getElementById('montantdepense');

// Button
let btngreen = document.getElementById('btngreen');
let btnred = document.getElementById('btnred');

// Visuel
let mtnbudget = document.getElementById('mtnbudget');
let mtnexpense = document.getElementById('mtnexpense');
let mtnbalance = document.getElementById('mtnbalance');

// Liste 
let liste = document.getElementById('liste');

let x = 0;

plusbudget.addEventListener('change', f1);
    function f1(e){
        let valeurbudget = e.target.value;
        btngreen.addEventListener('click', f2);
            function f2() {
                try{
                    x = parseInt(valeurbudget);
                    mtnbudget.textContent = x;
                    mtnbalance.textContent = x;
                } finally {
                    plusbudget.value = '';
                }
            }
            
    }
    
let valeurD = 0;
let w = '';
let m = '';

whydepense.addEventListener('change', recupWhyD);
    function recupWhyD(wd) {
            w = wd.target.value;
    }

montantdepense.addEventListener('change', recupMtnD);
            function recupMtnD(md) {
                m = md.target.value;
            }

btnred.addEventListener('click', integResultat);
    function integResultat() {
        // Affichage des résultats de l'opération
        
        valeurD += parseInt(m);
        mtnexpense.textContent = valeurD;
        mtnbalance.textContent = x - valeurD;

        //Apprence selon que l'on soit ou non dans la fourchette du budget
            if (x > valeurD) {
                mtnbalance.style.color = 'green';
                liste.style.background = 'rgba(0, 128, 0, 0.3)';
            } else {
                mtnbalance.style.color = 'red';
                liste.style.background = 'rgba(255, 0, 0, 0.3)';
            }

        // Réinitilisation des champs "Opération"
        montantdepense.value = '';
        whydepense.value = '';

        // Création des éléments de la liste des "Opérations"
        let sousListe = document.createElement('div');
            sousListe.classList.add('sousL');
            liste.appendChild(sousListe);
            sousListe.classList.add('conteneursousliste', 'dFlex');
            sousListe.innerHTML = `<div class="productachter">${w}</div><div class="coutduproduit">${m}</div>`;

            // Création du boutton Editer
            let bouttonEdit = document.createElement('button');
                bouttonEdit.classList.add("fa-solid", "fa-pen-to-square", 'btnE');
                bouttonEdit.style.fontSize = '1.2em';
                sousListe.appendChild(bouttonEdit);
                bouttonEdit.addEventListener('click', eee);
                    function eee () {
                        let parent = bouttonEdit.parentElement;
                        let vM = parent.childNodes[1].childNodes[0].nodeValue;
                        let wM = parent.childNodes[0].childNodes[0].nodeValue;
                        console.log(vM);
                        console.log(wM);
                        valeurD -= vM;
                        mtnexpense.textContent = valeurD;
                        mtnbalance.textContent = (parseInt(mtnbalance.textContent) + parseInt(vM));
                        parent.remove();
                        montantdepense.value = vM;
                        whydepense.value = wM;
                    }

            // Création du boutton Supprimer
            let bouttonSupp = document.createElement('button');
                bouttonSupp.classList.add('fa-solid', 'fa-trash-can', 'btnS');
                bouttonSupp.style.fontSize = '1.2em';
                sousListe.appendChild(bouttonSupp);
                bouttonSupp.addEventListener('click', sss);
                    function sss () {
                        let parent = bouttonEdit.parentElement;
                        let vM = parent.childNodes[1].childNodes[0].nodeValue;
                        mtnbalance.textContent = (parseInt(mtnbalance.textContent) + parseInt(vM));
                        mtnexpense.textContent = valeurD -= vM;
                        parent.remove();
                    }
    }       