let nameQuizz = document.querySelector('[nameQuizz]');
let groupCode = document.querySelector('[groupCode]');
let surnameQuizz = document.querySelector('[surnameQuizz]');

let clickCounter = 0;

var arr = new Array();

let dawkeba = document.querySelector('[dawkeba]');

let badge = document.querySelector('.badge');

function gamwvanebaN() {
    nameQuizz.style.borderColor = 'green'
}
function gamwvanebaS() {
    surnameQuizz.style.borderColor = 'blue'
}
function gamwvanebaG() {
    groupCode.style.borderColor = 'green'
}

let deleteAll = document.querySelector('[delete]');
deleteAll.addEventListener('click', function () {
    
    window.localStorage.removeItem("ქვიზი1");
    location.reload();
    
})
document.querySelector('[addBtn]').addEventListener('click', function(){
if(document.getElementById('question').value == '' || document.querySelector('[answ]').value == '' || document.querySelector('[answ1]').value == '' || document.querySelector('[answ2]').value == '' || document.querySelector('[answ3]').value == ''){
    alert('კითხვა ან რომელიმე პასუხი არ გაქვს შევსებული!\n რეკომენდირებულია ბაზა წაშალო და თავიდან შეავსო')
}
})


//ქვიზის გასამზადებელი ღილაკი
$('[ready]').click(function () {

    if(qvizi1.length > 0){
        document.querySelector('[getTime]').style.borderColor = 'green';
        document.querySelector('[dawkebiturt]').disabled = false;
        document.querySelector('[getTime]').disabled = false;
        document.querySelector('[addBtn]').disabled = true;
        document.querySelector('#question').disabled = true;
        document.querySelector('[answ]').disabled = true;
        document.querySelector('[answ1]').disabled = true;
        document.querySelector('[answ2]').disabled = true;
        document.querySelector('[answ3]').disabled = true;
        document.querySelector('#correctAnsw').disabled = true;
        document.querySelector('.sheqmeni').style.color = 'green';
        document.querySelector('.sheqmeni').innerText = 'ქვიზი შექმნილია';
        document.querySelector('[shuffling]').disabled = false;
    } else {
        alert('ქვიზი ცარიელია')
    }
    
})


//დაწყების ღილაკი (ავტორიზაციაზე გადადის)
$('[dawkebiturt]').click(function () {
    document.querySelector('[container]').hidden = true;
    document.querySelector('[entranceWhere]').hidden = false;
    document.querySelector('#myTableVissible').hidden = true;
})

//* ************************************************************** */
//ქვიზის ძრავი
dawkeba.addEventListener('click', function () {


    if($('[shuffling]').is(':checked')){
        //შაფლის პროცესი
        const shuffleArray = (quest) => {
            for(let i = quest.length-1; i>0; i--){
              const j = Math.floor(Math.random()*(i+1));
              const temp = quest[i];
              quest[i] = quest[j];
              quest[j] = temp;
            }
            return [quest];
          };
          //აშაფლულის გამოძახება
          let avshafle = shuffleArray(qvizi1);
          console.log(avshafle)
        }



    if (nameQuizz.value == '' && groupCode.value == '') {
        nameQuizz.style.borderColor = 'red'
        groupCode.style.borderColor = 'red'
    } else if (nameQuizz.value == '') {
        nameQuizz.style.borderColor = 'red'
    } else if (groupCode.value == '') {
        groupCode.style.borderColor = 'red'
    }
    else {



        document.querySelector('.leave').hidden = true;

        document.querySelector('[entranceWhere]').hidden = true;
        document.querySelector('[quizWhere]').hidden = false;
//აქ იქმნება ქვიზის სხეული
        var questiona = `
    
    <div class="progress mb-4" hidden gaqroba>
        <div class="progress-bar bg-danger timingGuy" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
    </div>


    <h2 class="kitxva">კითხვა</h2>
<div class="ertiKitxva">
    <input type="radio" pasuxi name="pasuxiGot" value="1" id="pirveli" required>
    <label class="pasuxi card-1" pasuxi for="pirveli">პასუხი 1</label>
</div>

<div class="oriKitxva">
    <input type="radio" pasuxi value="2" name="pasuxiGot" id="meore" required>
    <label class="pasuxi card-1" pasuxi for="meore">პასუხი 1</label>
</div>

<div class="samiKitxva">
    <input type="radio" pasuxi value="3" name="pasuxiGot" id="mesame" required>
    <label class="pasuxi card-1" pasuxi for="mesame">პასუხი 1</label>
</div>

<div class="otxiKitxva">
    <input type="radio" pasuxi value="4" name="pasuxiGot" id="meotxe" required>
    <label class="pasuxi card-1" pasuxi for="meotxe">პასუხი 1</label>
</div>
`

        $('[hereWeAre]').append(questiona);

        var fexi = ` <div class="progress-bar bg-warning progress-bar-striped progress-bar-animated goAhaid" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%"></div>`

        $('.fexi').append(fexi);
//ქაუნთერები
        let clickNumber = 0;
        let countQuest = 1;
        let correctAnsw = 0;
        let wrongAnsw = 0;
        let answer = 0;
        let kitxvebi = document.querySelector('.kitxva');
        let pasuxebi = document.querySelectorAll('.pasuxi');





        kitxvebi.innerText = qvizi1[0].Question;

        for (let i = 0; i < qvizi1[0].Answers.length; i++) {
            pasuxebi[i].innerText = qvizi1[0].Answers[i];
        }


        badge.innerText = `1 / ${qvizi1.length}`



        let time = document.querySelector('[getTime]').value;

        if (time > 0) {
            document.querySelector('[gaqroba]').hidden = false
        }

        let gayofa = 100;
        let progressing = 100 / qvizi1.length;

        $('.goAhaid').css({
            "width": `${progressing}%`
        })


        //დაჭერით



        $('#gilaki').click(function () {
            if ($('input[name="pasuxiGot"]').is(':checked')) {



                gayofa = 100;
                $('.timingGuy').css({
                    "width": `100%`
                });

                if (progressing <= 100) {
                    progressing += 100 / qvizi1.length;
                }

                let answerGot = document.quizi.pasuxiGot.value;

                if (answerGot == qvizi1[answer].correctAnsw) {
                    correctAnsw++;
                    console.log('სწორია: ' + correctAnsw);
                } else {
                    wrongAnsw++;
                    console.log('არასწორია: ' + wrongAnsw);
                }
                answer++;
                clickNumber++;
                countQuest++;

                if (countQuest <= qvizi1.length) {

                    kitxvebi.innerText = qvizi1[clickNumber].Question;

                    for (let i = 0; i < 4; i++) {
                        pasuxebi[i].innerText = qvizi1[clickNumber].Answers[i]

                        $('input[name="pasuxiGot"]').prop('checked', false);

                        badge.innerText = `${countQuest} / ${qvizi1.length}`




                        $('.goAhaid').css({
                            "width": `${progressing}%`
                        })

                    }
                }
                else if (countQuest == qvizi1.length + 1) {
                    

                    document.querySelector('[quizWhere]').hidden = true;

                    document.querySelector('.timingGuy').hidden = true;

                    $('[finishEnd]').css({
                        "visibility": "visible"
                    })




                    $('#daasrule').click(function () {
                        document.querySelector('[quizWhere]').hidden = true;

                        document.querySelector('[results]').hidden = false;

                        $('[finishEnd]').css({
                            "visibility": "hidden"
                        })


                        getData();
                        arr.push({
                            Name: nameQuizz.value,
                            Surname: surnameQuizz.value,
                            GroupCode: groupCode.value,
                            Mark: correctAnsw
                        });

                        localStorage.setItem("sxvaQvizi", JSON.stringify(arr));
                        showData();


                        function showData() {
                            getData();
                            var tbl = document.getElementById('myTable');
                            var x = tbl.rows.length;
                            while (--x) {
                                tbl.deleteRow(x);
                            }
                            for (i = 0; i < arr.length; i++) {
                                var r = tbl.insertRow();
                                var cell1 = r.insertCell();
                                var cell2 = r.insertCell();
                                var cell3 = r.insertCell();
                                var cell4 = r.insertCell();

                                cell1.innerText = arr[i].Name;
                                cell2.innerText = arr[i].Surname;
                                cell3.innerText = arr[i].GroupCode;
                                cell4.innerText = arr[i].Mark;
                            }
                        }

                        function getData() {
                            var str = localStorage.getItem("sxvaQvizi");
                            if (str != null) {
                                arr = JSON.parse(str)
                            }
                        }

                        var axaliBichebi = `                  
                    <script>
                      showData();
                    </script>
                    ` ;

                        $('[resultsVar]').append(axaliBichebi)

                        var kidevScade = `
                        <a  href=""><div class="btn btn-outline-dark boloKacuna">კიდევ სცადე</div></a>`

                        $('.kidevScade').append(kidevScade)

                    })
                }




            } else {

            }

        })


        //თაიმინგი
        if (document.querySelector('[entranceWhere]').hidden = true) {


            if (time > 0) {
                let interval = setInterval(growing, 1000);
            }



            function growing() {
                if (gayofa > 0) {
                    gayofa -= 100 / time;
                    $('.timingGuy').css({
                        "width": `${gayofa}%`
                    });
                } else {

                    gayofa = 100;
                    $('.timingGuy').css({
                        "width": `${gayofa}%`
                    });

                    clickNumber++;
                    countQuest++;
                    if (progressing <= 100) {
                        progressing += 100 / qvizi1.length;
                    }

                    if (countQuest <= qvizi1.length) {

                        kitxvebi.innerText = qvizi1[clickNumber].Question;

                        for (let i = 0; i < 4; i++) {
                            pasuxebi[i].innerText = qvizi1[clickNumber].Answers[i]

                            $('input[name="pasuxiGot"]').prop('checked', false);


                            badge.innerText = `${countQuest} / ${qvizi1.length}`

                            $('.goAhaid').css({
                                "width": `${progressing}%`
                            })
                        }
                        
                    } else if (countQuest == qvizi1.length + 1) {

                        document.querySelector('[quizWhere]').hidden = true;

                        document.querySelector('.timingGuy').hidden = true;

                        document.querySelector('[finishEnd]').hidden = false;




                        $('#daasrule').click(function () {

                            document.querySelector('[quizWhere]').hidden = true;

                            document.querySelector('[results]').hidden = false;

                            document.querySelector('[finishEnd]').hidden = true;


                            getData();
                            arr.push({
                                Name: nameQuizz.value,
                                Surname: surnameQuizz.value,
                                GroupCode: groupCode.value,
                                Mark: correctAnsw
                            });

                            localStorage.setItem("sxvaQvizi", JSON.stringify(arr));
                            showData();


                            function showData() {
                                getData();
                                var tbl = document.getElementById('myTable');
                                var x = tbl.rows.length;
                                while (--x) {
                                    tbl.deleteRow(x);
                                }
                                for (i = 0; i < arr.length; i++) {
                                    var r = tbl.insertRow();
                                    var cell1 = r.insertCell();
                                    var cell2 = r.insertCell();
                                    var cell3 = r.insertCell();
                                    var cell4 = r.insertCell();

                                    cell1.innerText = arr[i].Name;
                                    cell2.innerText = arr[i].Surname;
                                    cell3.innerText = arr[i].GroupCode;
                                    cell4.innerText = arr[i].Mark;
                                }
                            }

                            function getData() {
                                var str = localStorage.getItem("sxvaQvizi");
                                if (str != null) {
                                    arr = JSON.parse(str)
                                }
                            }

                            var axaliBichebi = `                  
                            <script>
                              showData();
                            </script>
                            ` ;

                            $('[resultsVar]').append(axaliBichebi)

                            var kidevScade = `
                                <a  href=""><div class="btn btn-outline-dark boloKacuna">კიდევ სცადე</div></a>`

                            $('.kidevScade').append(kidevScade)


                        })

                    }
                }


            }







        }
    }

})