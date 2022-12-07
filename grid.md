# Grid du menu mobile
.parent {
display: grid;
grid-template-columns: 1fr repeat(2, 0.5fr) repeat(2, 1fr);
grid-template-rows: repeat(4, 1fr);
grid-column-gap: 0px;
grid-row-gap: 20px;
}

.div1 { grid-area: 1 / 1 / 2 / 2; }
.div2 { grid-area: 1 / 2 / 2 / 5; }
.div3 { grid-area: 1 / 5 / 2 / 6; }
.div4 { grid-area: 2 / 2 / 3 / 4; }
.div5 { grid-area: 3 / 2 / 4 / 4; }
.div6 { grid-area: 4 / 2 / 5 / 3; }
.div7 { grid-area: 4 / 3 / 5 / 4; }
## Aperçu
<img width="789" alt="Capture d’écran 2022-12-07 à 15 58 57" src="https://user-images.githubusercontent.com/117478874/206213345-7ffbc76d-8cc3-4eaf-a6f7-654615403fae.png">
