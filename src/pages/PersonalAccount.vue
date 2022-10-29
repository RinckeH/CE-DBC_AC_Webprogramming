<template>
    <!--This page is a startup account, the person who got the invite can view his personal details-->
    <BasePage> 
        <!-- calling / importing the base page vue component to use the left sticky side bar and two google material items -->
        <div class="welkom-message">
            <h2>Hallo Floris, welkom bij</h2>
            <h1>Accountinstellingen</h1>
        </div>
        <div class="content-block">
            <div class="overlay"></div>
            <div class="content">
                <div class="content-introduction">
                    <div class="content-introduction-left">
                        <h3>PERSOONLIJK ACCOUNT</h3>
                        <p>Jouw startup is aangemeld door een van onze begeleiders. Via dit overzicht kan jij eigen gegevens inzien en wijzigigen. Voeg ook je teamleden toe en bekijk welke programma’s je hebt afgerond. </p>
                    </div>
                    <div class="content-introduction-right"> 
                        <div class="content-introduction-name">S.U</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="community"> <!-- This block will be an exmaple of a flex box with multiple flexboxes in it to style it via a more specific way-->
            <div  class="community-left">
                <h5>JOIN ONZE COMMUNITY </h5>
                <p>‘Onbeperkte, intensieve en persoonlijke hulp voor jouw startup’</p>

            </div>

            <div class="community-right">
                <h5>VOOR STARTUPS</h5>
                <div class="community-data">
                    <div class="community-data-1">
                        <h1>62</h1>
                        <p>VERSCHILLENDE BEGELEIDERS</p>
                    </div>

                    <div class="community-data-2">
                        <h1>521</h1>
                        <p>STARTUPS SAMEN </p>
                    </div>

                    <div class="community-data-3">
                        <H1>8.3</H1>
                        <P>ONZE KLANTTEVREDENHEID</P>
                    </div>
                </div>
                <div class="community-call-to-action">
                     <button class="community-button">Vraag hulp</button>
                </div>
         
            </div>
            
            </div>

             <div class="personal-information">
                <h3>PERSOONLIJKE GEGEVENS</h3>
                <table>
                    <tr class="values-row-1">
                        <th>NAAM</th>
                        <th>ORGANISATIE</th>
                        <th>FUNCTIE</th>
                    </tr>
                    <tr class="values-row-1-answers">
                        <td class="values-row-1-answers-left">Floris</td>
                        <td>X</td>
                        <td class="values-row-1-answers-right">Co-Founder</td>
                    </tr>

                    <tr class="values-row-2">
                        <th>SECTOR</th>
                        <th>TELEFOONNUMMER</th>
                        <th>MAILADRES</th>
                    </tr>
                    <tr class="values-row-2-answers">
                        <td class="values-row-2-answers-left">Tech</td>
                        <td>06-0101010</td>
                        <td class="values-row-2-answers-right">Florism@mail.nl</td>
                    </tr>
                </table>
                <div class="personal-informaton-cta">
                <button class="personal-information-button">Gegevens opslaan</button>
                </div>
            </div>







            <div class="team">
            <h2>TEAMLEDEN</h2>
            <h3>Bekijk hier jouw teamleden of voeg ze toe. </h3>
            <div class="team-content">
                <div class="team-overview-content-left">
                    <div class="member">
                        <p>Rincke Helling | Product Developer | rincke@gritd.nl | 06-41017541</p>
                        <div class="member-icons">
                        <span class="material-symbols-outlined more_vert">more_vert</span>
                        <span class="material-symbols-outlined close">close</span>
                        <!-- 'material-symbols-outlined'is a standard class that can be called to use any icon of the google icons api. 
                         After the class you can fill in the icon's name that you want to use. -->
                        </div>
                        </div>

                     <div class="member">
                        <p>Rincke Helling | Product Developer | rincke@gritd.nl | 06-41017541</p>
                        <div class="member-icons">
                        <span class="material-symbols-outlined more_vert">more_vert</span>
                        <span class="material-symbols-outlined close">close</span>
                        </div>
                    </div>

                    <div class="member">
                        <p>Floris Meulensteen | Product Developer | floris@gritd.nl | 06-51794420</p>
                        <div class="member-icons">
                        <span class="material-symbols-outlined more_vert">more_vert</span>
                        <span class="material-symbols-outlined close">close</span>
                        </div>
                    </div>

                    <div class="member">
                        <p>Stephan Botz | Co-Founder | stephan@gritd.nl | 06-31416681</p>
                        <div class="member-icons">
                        <span class="material-symbols-outlined more_vert">more_vert</span>
                        <span class="material-symbols-outlined close">close</span>
                        </div>
                    </div>

                    <div class="member">
                        <p>Persoon x  Editie 13 | xxx@mail.nl | 06-21876320</p>
                        <div class="member-icons">
                        <span class="material-symbols-outlined more_vert">more_vert</span>
                        <span class="material-symbols-outlined close">close</span>
                        </div>
                    </div>

                    <div class="member">
                        <p>Persoon x | Editie 12 | xxx@mail.nl | 06-31758920</p>
                        <div class="member-icons">
                        <span class="material-symbols-outlined more_vert">more_vert</span>
                        <span class="material-symbols-outlined close">close</span>
                        </div>
                    </div>
                </div> 
            </div>
            <div class="Add-member-button">
                <button class="member-button">+ Voeg teamlid toe</button>
                </div>
        </div>



            <div class="information-supervisor">
                <h2>GEGEVENS BEGELEIDER</h2>
                <table>
                    <tr class="values-row-1">
                        <th>NAAM</th>
                        <th>ORGANISATIE</th>
                        <th>STAD</th>
                    </tr>
                    <tr class="values-row-1-answers">
                        <td class="values-row-1-answers-left">Pepijn Herman </td>
                        <td>Hypetrain</td>
                        <td class="values-row-1-answers-right">Tilburg</td>
                    </tr>

                    <tr class="values-row-1">
                        <th>SECTOR</th>
                        <th>TELEFOONNUMMER</th>
                        <th>MAILADRES</th>
                    </tr>
                    <tr class="values-row-2-answers">
                        <td class="values-row-2-answers-left">Tech</td>
                        <td>06-0101010</td>
                        <td class="values-row-2-answers-right">Pepijn.h@mail.nl</td>
                    </tr>
                </table>
               
            </div>




            <div class="history">
                <h2>HISTORIE</h2>
                <h3>Bekijk hier jouw persoonlijke historie. Selecteer via de filter functie welke details je wilt inzien.  </h3>
                <div class="history-content">
                    <div class="history-overview-content">
                        <div class="history-item"> <!-- The repeat class name is due to the same style per finished program-->
                            <p>Invenstor Readiness Program | Editie 18 | 20-06-2022 / 25-08-2022 | Lopend</p>   
                        </div>

                        <div class="history-item">
                            <p>Market Readiness Program | Editie 15 | 20-06-2022 / 25-08-2021 | Afgerond</p>
                        </div>

                        <div class="history-item">
                            <p>Market Readiness Program | Editie 14 | 20-06-2022 / 25-08-2020 | Afgerond</p>
                        </div>

                        <div class="history-item">
                            <p>Startup Readiness Program 2 | Editie 13 | 20-06-2022 / 25-08-2019 | Afgerond</p>
                        </div>

                        <div class="history-item">
                            <p>Startup Readiness Program 1 | Editie 12 | 20-06-2022 / 25-08-2018 | Afgerond</p>
                        </div>
                    </div> 
                </div>
            </div>


            <br>
            <br>
        
         

    </BasePage>

</template>

<script>
import BasePage from "../components/BasePage.vue";
// importing the component to use it in within the template//
export default {
    name: 'PersonalAccount',
    components:{
        BasePage: BasePage,
    }
}
</script>

<style>

.content-block {
    height: 180px;
    
}
.content {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    color: white;
    padding: 20px 150px 20px 20px;
    
}

.content-introduction {
    display: flex;
    flex-direction: row;
    

}

.content-introduction-left {
    padding-right: 123px;
}

.content-introduction-name {
    margin-top: 10px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: white;
    color: black;
    padding: 20px;
    font-size: 36px;
    text-align: center;
    line-height: 75px;
}

.community {
    display: flex;
    flex-direction: row;
    padding-left: 30px;
    padding: 48px 90px 41px 103px;
    width: 805px;
    height: 276px;
    margin-top: 12px;
    background: #135B5C;
    border-radius: 20px;
}

.community-left {
    color: white;
    height: 207px;
    width: 450px;
    left: 594px;
    top: 385px;
}

.community-left p {
    margin: 0px;
    font-family: Lato;
    font-size: 36px;
    font-weight: 800;
    line-height: 43px;
    letter-spacing: 0px;
    text-align: left;


}

.community-right {
    color: white;
   
}

.community-data {
    display: flex;
    flex-direction: row;
    padding-left: 10px;
    justify-content: space-evenly;
    
    
}

.community-data-1 > p, .community-data-2 > p, .community-data-3 > p, .community-data-1 > h1, .community-data-2 > h1, .community-data-3 > h1 {
    margin: 0px;
}



.community-call-to-action {
    display: flex;
    justify-content: center;


}

.community-button {
    font-family: Lato;
    font-size: 16px;
    font-weight: 800;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: center;
    padding: 10px 80px 10px 80px;
    border-radius: 10px;
    border: none;
    margin-top: 60px;

}

.personal-information {
    width: 960px;
    height: 390px;
    background-color: rgb(41, 183, 185, .1);
    display: flex;
    flex-direction: column;
    padding-top: 30px;
    margin-top: 30px;
    padding-left: 40px;
    margin-right: 50px;
    border-radius: 20px;
}


table {
    padding: 20px;
    border-spacing: 0;
    
}
table, th, td {
  border: none;
}
th {
    padding: 20px 80px 20px 50px;
}

td {
    text-align: center;
    padding: 10px 10px 10px 10px;
    
   
}

.values-row-1-answers-left {
    border-top-left-radius: 80px;
    border-bottom-left-radius: 80px;
}

.values-row-1-answers-right {
    border-top-right-radius: 80px;
    border-bottom-right-radius: 80px;
}

table.center {
  margin-left: auto;
  margin-right: auto;
}

.values-row-1 {
    color: #1C7D7E;
    font-size: 18px;
    font-weight: 400;
}

.values-row-1-answers > td{
    background-color: white;
}



.values-row-2 {
    color: #1C7D7E;
    font-size: 18px;
    font-weight: 400;
}

.values-row-2-answers > td{
    background-color: white;
}

.values-row-2-answers-left {
    border-top-left-radius: 80px;
    border-bottom-left-radius: 80px;
}

.values-row-2-answers-right {
    border-top-right-radius: 80px;
    border-bottom-right-radius: 80px;
}

.personal-informaton-cta {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    
}
.personal-information-button {
    font-family: Lato;
    font-size: 16px;
    font-weight: 800;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: center;
    border: none;
    background-color: transparent;
    padding-right: 30px;
    padding-top: 30px;
   

}





.values-row-1-answers-left {
    border-top-left-radius: 80px;
    border-bottom-left-radius: 80px;
}

.values-row-1-answers-right {
    border-top-right-radius: 80px;
    border-bottom-right-radius: 80px;
}

table.center {
  margin-left: auto;
  margin-right: auto;
}

.values-row-1 {
    color: #1C7D7E;
    font-size: 18px;
    font-weight: 400;
}

.values-row-1-answers > td{
    background-color: white;
}



.information-supervisor {
    width: 960px;
    height: 350px;
    background-color: rgb(41, 183, 185, .1);
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    padding-top: 30px;
    padding-left: 40px;
    margin-right: 50px;
    border-radius: 20px;
}


.values-row-2 {
    color: #1C7D7E;
    font-size: 18px;
    font-weight: 400;
}

.values-row-2-answers > td{
    background-color: white;
}

.values-row-2-answers-left {
    border-top-left-radius: 80px;
    border-bottom-left-radius: 80px;
}

.values-row-2-answers-right {
    border-top-right-radius: 80px;
    border-bottom-right-radius: 80px;
}

.personal-informaton-cta {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    
}
.personal-information-button {
    font-family: Lato;
    font-size: 16px;
    font-weight: 800;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: center;
    border: none;
    background-color: transparent;
    padding-right: 40px;
   

}


.team{
    margin-top: 30px;
    height: 655px;
    width: 920px;
    left: 490px;
    top: 1098px;
    border-radius: 20px;
    background-color: #29B7B91A;
    padding: 45px;
}




.team h3{
    color: #1C7D7E;
}

.team-content {
    display: flex;

}

.team-overview-content-left {
    display: flex;
    flex-direction: column;


}

.member{
    width: 746px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding:5px 120px 5px 32px;
    background-color: white;
    border-radius: 50px;
    margin: 10px;
}

.Add-member-button {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}

.member-button {
    font-family: Lato;
    font-size: 16px;
    font-weight: 800;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: center;
    border: none;
    background-color: transparent;
    padding-top: 30px;
    padding-right: 10px;
   
}









.history {
    margin-top: 30px;
   
    width: 910px;
    border-radius: 20px;
    background-color: #29B7B91A;
    padding: 45px;
    
    
}


.history h3{
    color: #1C7D7E;
}

.history-content {
    display: flex;

}

.history-overview-content {
    display: flex;
    flex-direction: column;


}

.history-item{
    width: 746px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding:5px 120px 5px 32px;
    background-color: white;
    border-radius: 50px;
    margin: 10px;
}
</style>