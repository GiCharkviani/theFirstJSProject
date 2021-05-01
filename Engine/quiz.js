
let quizzGetting;

if (window.XMLHttpRequest) {
    quizzGetting = new XMLHttpRequest();
} else {
    quizzGetting = new ActiveXObject("MSXML2.XMLHTTP");
}





//ავტორიზაციის ფერების კონტროლი
function gamwvanebaN() {
    nameQuizz.style.borderColor = 'green'
}
function gamwvanebaS() {
    surnameQuizz.style.borderColor = 'blue'
}
function gamwvanebaG() {
    groupCode.style.borderColor = 'green'
}


//ქვიზის ძრავი
quizzGetting.onreadystatechange = function () {
    if ((quizzGetting.status === 200) && (quizzGetting.readyState === 4)) {

        let quizz = JSON.parse(quizzGetting.responseText);


        document.querySelector('[entranceWhere]').hidden = false;




        let nameQuizz = document.querySelector('[nameQuizz]');
        let groupCode = document.querySelector('[groupCode]');
        let surnameQuizz = document.querySelector('[surnameQuizz]');

        var arr = new Array();

        let easyMode = document.querySelector('[easyMode]');

        let badge = document.querySelector('.badge');




        //* ************************************************************** */
        //ადვილი
        easyMode.addEventListener('click', function () {
            $('[sarchevi]').css({
                "display": "none",
            })

            document.querySelector('.leave').hidden = true;

            if (nameQuizz.value == '' && groupCode.value == '') {
                nameQuizz.style.borderColor = 'red'
                groupCode.style.borderColor = 'red'
            } else if (nameQuizz.value == '') {
                nameQuizz.style.borderColor = 'red'
            } else if (groupCode.value == '') {
                groupCode.style.borderColor = 'red'
            }
            else {





                document.querySelector('[entranceWhere]').hidden = true;
                document.querySelector('[quizWhere]').hidden = false;

                var question = `
    
    <div class="progress mb-4">
        <div class="progress-bar bg-danger timingGuy" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
    </div>


 
    <h2 class="kitxva">კითხვა</h2>
<div class="ertiKitxva">
    <input type="radio" pasuxi name="pasuxiGot" value="0" id="pirveli" required>
    <label class="pasuxi card-1" pasuxi for="pirveli">პასუხი 1</label>
</div>

<div class="oriKitxva">
    <input type="radio" pasuxi value="1" name="pasuxiGot" id="meore" required>
    <label class="pasuxi card-1" pasuxi for="meore">პასუხი 1</label>
</div>

<div class="samiKitxva">
    <input type="radio" pasuxi value="2" name="pasuxiGot" id="mesame" required>
    <label class="pasuxi card-1" pasuxi for="mesame">პასუხი 1</label>
</div>
<div class="otxiKitxva">
    <input type="radio" pasuxi value="3" name="pasuxiGot" id="meotxe" required>
    <label class="pasuxi card-1" pasuxi for="meotxe">პასუხი 1</label>
</div>
`

                $('[hereWeAre]').append(question);

                var fexi = ` <div class="progress-bar bg-warning progress-bar-striped progress-bar-animated goAhaid" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%"></div>`

                $('.fexi').append(fexi);

                let clickNumber = 0;
                let countQuest = 1;
                let correctAnsw = 0;
                let wrongAnsw = 0;
                let answer = 0;
                let kitxvebi = document.querySelector('.kitxva');
                let pasuxebi = document.querySelectorAll('.pasuxi');




                //შაფლის პროცესი
                const shuffleArray = (quest, answi, corri) => {
                    for (let i = quest.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                        const temp = quest[i];
                        quest[i] = quest[j];
                        quest[j] = temp;
                        const temp1 = answi[i];
                        answi[i] = answi[j];
                        answi[j] = temp1;
                        const temp3 = corri[i];
                        corri[i] = corri[j];
                        corri[j] = temp3;
                    }
                    return [quest, answi, corri];
                };
                //აშაფლულის გამოძახება
                let avshafle = shuffleArray(quizz.question, quizz.answer, quizz.correct);
                console.log(avshafle)











                kitxvebi.innerText = avshafle[0].slice(0, 5)[0];

                for (let i = 0; i < quizz.answer[0].length; i++) {
                    pasuxebi[i].innerText = avshafle[1][0][i];
                }


                badge.innerText = `1 / ${quizz.question.slice(0, 5).length}`



                let time = 60;
                let gayofa = 100;
                let progressing = 100 / quizz.question.slice(0, 5).length;

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
                            progressing += 100 / quizz.question.slice(0, 5).length;
                        }

                        let answerGot = document.quizi.pasuxiGot.value;

                        if (answerGot == avshafle[2][answer]) {
                            correctAnsw++;
                            console.log('სწორია: ' + correctAnsw);
                        } else {
                            wrongAnsw++;
                            console.log('არასწორია: ' + wrongAnsw);
                        }
                        answer++;
                        clickNumber++;
                        countQuest++;

                        if (countQuest <= quizz.question.slice(0, 5).length) {

                            kitxvebi.innerText = avshafle[0].slice(0, 5)[clickNumber];

                            for (let i = 0; i < 4; i++) {
                                pasuxebi[i].innerText = avshafle[1][clickNumber][i]

                                $('input[name="pasuxiGot"]').prop('checked', false);

                                badge.innerText = `${countQuest} / ${quizz.question.slice(0, 5).length}`




                                $('.goAhaid').css({
                                    "width": `${progressing}%`
                                })




                            }
                        }
                        else if (countQuest == quizz.question.slice(0, 5).length + 1) {
                            countQuest = 6;

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
                                    GroupCode: groupCode.value,
                                    Type: easyMode.value,
                                    Mark: correctAnsw
                                });

                                localStorage.setItem("userLogin", JSON.stringify(arr));
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
                                        cell2.innerText = arr[i].GroupCode;
                                        cell3.innerText = arr[i].Type;
                                        cell4.innerText = arr[i].Mark;
                                    }
                                }

                                function getData() {
                                    var str = localStorage.getItem("userLogin");
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



                    let interval = setInterval(growing, 1000);

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
                                progressing += 100 / quizz.question.slice(0, 5).length;
                            }

                            if (countQuest <= quizz.question.slice(0, 5).length) {

                                kitxvebi.innerText = avshafle[0].slice(0, 5)[clickNumber];

                                for (let i = 0; i < 4; i++) {
                                    pasuxebi[i].innerText = avshafle[1][clickNumber][i]

                                    $('input[name="pasuxiGot"]').prop('checked', false);


                                    badge.innerText = `${countQuest} / ${quizz.question.slice(0, 5).length}`

                                    $('.goAhaid').css({
                                        "width": `${progressing}%`
                                    })
                                }
                            } else if (countQuest == quizz.question.slice(0, 5).length + 1) {
                                countQuest = 6;
                                clearInterval(interval)
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
                                        GroupCode: groupCode.value,
                                        Type: easyMode.value,
                                        Mark: correctAnsw
                                    });

                                    localStorage.setItem("userLogin", JSON.stringify(arr));
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
                                            cell2.innerText = arr[i].GroupCode;
                                            cell3.innerText = arr[i].Type;
                                            cell4.innerText = arr[i].Mark;
                                        }
                                    }

                                    function getData() {
                                        var str = localStorage.getItem("userLogin");
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

        //* ************************************************************** */

        //საშუალო
        let midMode = document.querySelector('[midMode]');
        midMode.addEventListener('click', function () {
            $('[sarchevi]').css({
                "display": "none",
            })
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

                var question = `
        <div class="progress mb-4">
        <div class="progress-bar bg-danger timingGuy" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
    </div>


    <h2 class="kitxva">კითხვა</h2>
    <div class="ertiKitxva">
    <input type="radio" pasuxi name="pasuxiGot" value="0" id="pirveli" required>
    <label class="pasuxi card-1" pasuxi for="pirveli">პასუხი 1</label>
</div>

<div class="oriKitxva">
    <input type="radio" pasuxi value="1" name="pasuxiGot" id="meore" required>
    <label class="pasuxi card-1" pasuxi for="meore">პასუხი 1</label>
</div>

<div class="samiKitxva">
    <input type="radio" pasuxi value="2" name="pasuxiGot" id="mesame" required>
    <label class="pasuxi card-1" pasuxi for="mesame">პასუხი 1</label>
</div>

<div class="otxiKitxva">
    <input type="radio" pasuxi value="2" name="pasuxiGot" id="meotxe" required>
    <label class="pasuxi card-1" pasuxi for="meotxe">პასუხი 1</label>
</div>
`

                $('[hereWeAre]').append(question);

                var fexi = ` <div class="progress-bar bg-warning progress-bar-striped progress-bar-animated goAhaid" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%"></div>`

                $('.fexi').append(fexi);

                let clickNumber = 0;
                let countQuest = 1;
                let correctAnsw = 0;
                let wrongAnsw = 0;
                let answer = 0;
                let kitxvebi = document.querySelector('.kitxva');
                let pasuxebi = document.querySelectorAll('.pasuxi');



                //შაფლის პროცესი
                const shuffleArray = (quest, answi, corri) => {
                    for (let i = quest.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                        const temp = quest[i];
                        quest[i] = quest[j];
                        quest[j] = temp;
                        const temp1 = answi[i];
                        answi[i] = answi[j];
                        answi[j] = temp1;
                        const temp3 = corri[i];
                        corri[i] = corri[j];
                        corri[j] = temp3;
                    }
                    return [quest, answi, corri];
                };
                //აშაფლულის გამოძახება
                let avshafle = shuffleArray(quizz.question, quizz.answer, quizz.correct);
                console.log(avshafle)




                kitxvebi.innerText = avshafle[0].slice(0, 8)[0];

                for (let i = 0; i < quizz.answer[0].length; i++) {
                    pasuxebi[i].innerText = avshafle[1][0][i];
                }


                badge.innerText = `1 / ${quizz.question.slice(0, 8).length}`


                let time = 45;
                let gayofa = 100;
                let progressing = 100 / quizz.question.slice(0, 8).length;

                $('.goAhaid').css({
                    "width": `${progressing}%`
                });

                //დაჭერით

                $('#gilaki').click(function () {
                    if ($('input[name="pasuxiGot"]').is(':checked')) {

                        gayofa = 100;
                        $('.timingGuy').css({
                            "width": `100%`
                        });
                        if (progressing <= 100) {
                            progressing += 100 / quizz.question.slice(0, 8).length;
                        }
                        let answerGot = document.quizi.pasuxiGot.value;

                        if (answerGot == avshafle[2][answer]) {
                            correctAnsw += 2;
                            console.log('სწორია: ' + correctAnsw);
                        } else {
                            wrongAnsw++;
                            console.log('არასწორია: ' + wrongAnsw);
                        }
                        answer++;
                        clickNumber++;
                        countQuest++;

                        if (countQuest <= quizz.question.slice(0, 8).length) {

                            kitxvebi.innerText = avshafle[0].slice(0, 8)[clickNumber];

                            for (let i = 0; i < 4; i++) {
                                pasuxebi[i].innerText = avshafle[1][clickNumber][i]

                                $('input[name="pasuxiGot"]').prop('checked', false);

                                badge.innerText = `${countQuest} / ${quizz.question.slice(0, 8).length}`

                                $('.goAhaid').css({
                                    "width": `${progressing}%`
                                })




                            }
                        }
                        else if (countQuest == quizz.question.slice(0, 8).length + 1) {
                            countQuest = 9;

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
                                    GroupCode: groupCode.value,
                                    Type: midMode.value,
                                    Mark: correctAnsw
                                });

                                localStorage.setItem("userLogin", JSON.stringify(arr));
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
                                        cell2.innerText = arr[i].GroupCode;
                                        cell3.innerText = arr[i].Type;
                                        cell4.innerText = arr[i].Mark;
                                    }
                                }

                                function getData() {
                                    var str = localStorage.getItem("userLogin");
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




                    let interval = setInterval(growing, 1000);

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
                                progressing += 100 / quizz.question.slice(0, 8).length;
                            }
                            if (countQuest <= quizz.question.slice(0, 8).length) {

                                kitxvebi.innerText = avshafle[0].slice(0, 8)[clickNumber];

                                for (let i = 0; i < 4; i++) {
                                    pasuxebi[i].innerText = avshafle[1][clickNumber][i]

                                    $('input[name="pasuxiGot"]').prop('checked', false);


                                    badge.innerText = `${countQuest} / ${quizz.question.slice(0, 8).length}`

                                    $('.goAhaid').css({
                                        "width": `${progressing}%`
                                    })
                                }
                            } else if (countQuest == quizz.question.slice(0, 8).length + 1) {
                                countQuest = 9;
                                clearInterval(interval);
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
                                        GroupCode: groupCode.value,
                                        Type: easyMode.value,
                                        Mark: correctAnsw
                                    });

                                    localStorage.setItem("userLogin", JSON.stringify(arr));
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
                                            cell2.innerText = arr[i].GroupCode;
                                            cell3.innerText = arr[i].Type;
                                            cell4.innerText = arr[i].Mark;
                                        }
                                    }

                                    function getData() {
                                        var str = localStorage.getItem("userLogin");
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

        //* ************************************************************** */

        //რთული
        let hardMode = document.querySelector('[hardMode]');
        hardMode.addEventListener('click', function () {
            $('[sarchevi]').css({
                "display": "none",
            })
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

                var question = `
    <div class="progress mb-4">
        <div class="progress-bar bg-danger timingGuy" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
    </div>


    <h2 class="kitxva">კითხვა</h2>
    <div class="ertiKitxva">
    <input type="radio" pasuxi name="pasuxiGot" value="0" id="pirveli" required>
    <label class="pasuxi card-1" pasuxi for="pirveli">პასუხი 1</label>
</div>

<div class="oriKitxva">
    <input type="radio" pasuxi value="1" name="pasuxiGot" id="meore" required>
    <label class="pasuxi card-1" pasuxi for="meore">პასუხი 1</label>
</div>

<div class="samiKitxva">
    <input type="radio" pasuxi value="2" name="pasuxiGot" id="mesame" required>
    <label class="pasuxi card-1" pasuxi for="mesame">პასუხი 1</label>
</div>

<div class="otxiKitxva">
    <input type="radio" pasuxi value="2" name="pasuxiGot" id="meotxe" required>
    <label class="pasuxi card-1" pasuxi for="meotxe">პასუხი 1</label>
</div>
`

                $('[hereWeAre]').append(question);

                var fexi = ` <div class="progress-bar bg-warning progress-bar-striped progress-bar-animated goAhaid" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%"></div>`

                $('.fexi').append(fexi);

                let clickNumber = 0;
                let countQuest = 1;
                let correctAnsw = 0;
                let wrongAnsw = 0;
                let answer = 0;
                let kitxvebi = document.querySelector('.kitxva');
                let pasuxebi = document.querySelectorAll('.pasuxi');




                //შაფლის პროცესი
                const shuffleArray = (quest, answi, corri) => {
                    for (let i = quest.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                        const temp = quest[i];
                        quest[i] = quest[j];
                        quest[j] = temp;
                        const temp1 = answi[i];
                        answi[i] = answi[j];
                        answi[j] = temp1;
                        const temp3 = corri[i];
                        corri[i] = corri[j];
                        corri[j] = temp3;
                    }
                    return [quest, answi, corri];
                };
                //აშაფლულის გამოძახება
                let avshafle = shuffleArray(quizz.question, quizz.answer, quizz.correct);
                console.log(avshafle)







                kitxvebi.innerText = avshafle[0].slice(0, 10)[0];

                for (let i = 0; i < quizz.answer[0].length; i++) {
                    pasuxebi[i].innerText = avshafle[1][0][i];
                }


                badge.innerText = `1 / ${quizz.question.slice(0, 10).length}`



                let time = 30;
                let gayofa = 100;
                let progressing = 100 / quizz.question.slice(0, 10).length;

                $('.goAhaid').css({
                    "width": `${progressing}%`
                });

                //დაჭერით

                $('#gilaki').click(function () {
                    if ($('input[name="pasuxiGot"]').is(':checked')) {
                        gayofa = 100;
                        $('.timingGuy').css({
                            "width": `100%`
                        });
                        if (progressing <= 100) {
                            progressing += 100 / quizz.question.slice(0, 10).length;
                        }
                        let answerGot = document.quizi.pasuxiGot.value;

                        if (answerGot == avshafle[2][answer]) {
                            correctAnsw += 3;
                            console.log('სწორია: ' + correctAnsw);
                        } else {
                            correctAnsw--;
                            wrongAnsw++;
                            console.log('არასწორია: ' + wrongAnsw);
                        }
                        answer++;
                        clickNumber++;
                        countQuest++;

                        if (countQuest <= quizz.question.slice(0, 10).length) {

                            kitxvebi.innerText = avshafle[0].slice(0, 10)[clickNumber];

                            for (let i = 0; i < 4; i++) {
                                pasuxebi[i].innerText = avshafle[1][clickNumber][i]

                                $('input[name="pasuxiGot"]').prop('checked', false);

                                badge.innerText = `${countQuest} / ${quizz.question.slice(0, 10).length}`

                                $('.goAhaid').css({
                                    "width": `${progressing}%`
                                })




                            }
                        }
                        else if (countQuest == quizz.question.slice(0, 10).length + 1) {
                            countQuest = 11;

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
                                    GroupCode: groupCode.value,
                                    Type: hardMode.value,
                                    Mark: correctAnsw
                                });

                                localStorage.setItem("userLogin", JSON.stringify(arr));
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
                                        cell2.innerText = arr[i].GroupCode;
                                        cell3.innerText = arr[i].Type;
                                        cell4.innerText = arr[i].Mark;
                                    }
                                }

                                function getData() {
                                    var str = localStorage.getItem("userLogin");
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



                    let interval = setInterval(growing, 1000);

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
                                progressing += 100 / quizz.question.slice(0, 10).length;
                            }
                            if (countQuest <= quizz.question.slice(0, 10).length) {

                                kitxvebi.innerText = avshafle[0].slice(0, 10)[clickNumber];

                                for (let i = 0; i < 4; i++) {
                                    pasuxebi[i].innerText = avshafle[1][clickNumber][i]

                                    $('input[name="pasuxiGot"]').prop('checked', false);


                                    badge.innerText = `${countQuest} / ${quizz.question.slice(0, 10).length}`

                                    $('.goAhaid').css({
                                        "width": `${progressing}%`
                                    })
                                }
                            } else if (countQuest == quizz.question.slice(0, 10).length + 1) {
                                countQuest = 11;
                                clearInterval(interval);
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
                                        GroupCode: groupCode.value,
                                        Type: easyMode.value,
                                        Mark: correctAnsw
                                    });

                                    localStorage.setItem("userLogin", JSON.stringify(arr));
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
                                            cell2.innerText = arr[i].GroupCode;
                                            cell3.innerText = arr[i].Type;
                                            cell4.innerText = arr[i].Mark;
                                        }
                                    }

                                    function getData() {
                                        var str = localStorage.getItem("userLogin");
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


    }
}




//ფირმის ქვიზის დასაწყებად
$('[firma]').on('click', function () {
  

    quizzGetting.open('GET', '../JSONQuizzes/firma.json');
    quizzGetting.send();
    
    $('[sarchevi]').css({
        "grid-area": "1/1/1/span 3",
    })
    $('[firma]').css({
        "border-color": "red",
        "box-shadow": "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
        "opacity": "1"
    })
    $('[shromeconomics]').css({
        "border-color": "white",
        "box-shadow": "none",
        "opacity": "0.5"
    })
    $('[shrmigracia]').css({
        "border-color": "white",
        "box-shadow": "none",
        "opacity": "0.5"
    })
    $('[macroeconomics]').css({
        "border-color": "white",
        "box-shadow": "none",
        "opacity": "0.5"
    })
    $('body').css({
        "background-image": "url(../JSONQuizzes/imgs/bg/firmBG.jpg)",
        "background-size": "cover",
        "background-repeat": "no-repeat"
    })
    $('.bacgrounding').css({
        "background-color": "rgba(128, 128, 128,0.8)",
    })
    document.querySelector('.titling').innerText = 'ფირმის ეკონომიკა'
    document.querySelector('.tableTitle').innerText = 'ფირმის ეკონომიკა'
    document.querySelector('[shromeconomics]').style.pointerEvents = 'none'
    document.querySelector('[shrmigracia]').style.pointerEvents = 'none'
    document.querySelector('[macroeconomics]').style.pointerEvents = 'none'
    document.querySelector('.leave').href = "./quiz.html"
})

//შრომის ქვიზის დასაწყებად
$('[shromeconomics]').on('click', function () {
    
    quizzGetting.open('GET', '../JSONQuizzes/shroma.json');
    quizzGetting.send();

    
    $('[sarchevi]').css({
        "grid-area": "1/1/1/span 3",
    })
    $('[shromeconomics]').css({
        "border-color": "red",
        "box-shadow": "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
        "opacity": "1"
    })
    $('[firma]').css({
        "border-color": "white",
        "box-shadow": "none",
        "opacity": "0.5"
    })
    $('[shrmigracia]').css({
        "border-color": "white",
        "box-shadow": "none",
        "opacity": "0.5"
    })
    $('[macroeconomics]').css({
        "border-color": "white",
        "box-shadow": "none",
        "opacity": "0.5"
    })
    $('body').css({
        "background-image": "url(../JSONQuizzes/imgs/bg/labourBG.jpg)",
        "background-size": "cover",
        "background-repeat": "no-repeat"
    })
    $('.bacgrounding').css({
        "background-color": "rgba(233, 234, 236,0.8)",
    })
    document.querySelector('.titling').innerText = 'შრომის ეკონომიკა'
    document.querySelector('.tableTitle').innerText = 'შრომის ეკონომიკა'
    document.querySelector('[firma]').style.pointerEvents = 'none'
    document.querySelector('[shrmigracia]').style.pointerEvents = 'none'
    document.querySelector('[macroeconomics]').style.pointerEvents = 'none'
    document.querySelector('.leave').href = "./quiz.html"
})



//შრომითი მიგრაციის ქვიზის დასაწყებად
$('[shrmigracia]').on('click', function () {
    quizzGetting.open('GET', '../JSONQuizzes/labourMigration.json');
    quizzGetting.send();
    $('[sarchevi]').css({
        "grid-area": "1/1/1/span 3",
    })
    $('[shrmigracia]').css({
        "border-color": "red",
        "box-shadow": "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
        "opacity": "1"
    })
    $('[firma]').css({
        "border-color": "white",
        "box-shadow": "none",
        "opacity": "0.5"
    })
    $('[shromeconomics]').css({
        "border-color": "white",
        "box-shadow": "none",
        "opacity": "0.5"
    })
    $('[macroeconomics]').css({
        "border-color": "white",
        "box-shadow": "none",
        "opacity": "0.5"
    })
    $('body').css({
        "background-image": "url(../JSONQuizzes/imgs/bg/labourMigrationBG.jpg)",
        "background-size": "cover",
        "background-repeat": "no-repeat"
    })
    $('.bacgrounding').css({
        "background-color": "rgba(247, 214, 208,0.8)",
    })
    document.querySelector('.titling').innerText = 'შრომითი მიგრაცია'
    document.querySelector('.tableTitle').innerText = 'შრომითი მიგრაცია'
    document.querySelector('[firma]').style.pointerEvents = 'none'
    document.querySelector('[shromeconomics]').style.pointerEvents = 'none'
    document.querySelector('[macroeconomics]').style.pointerEvents = 'none'
    document.querySelector('.leave').href = "./quiz.html"
})

//მაკროეკონომიკის ქვიზის დასაწყებად
$('[macroeconomics]').on('click', function () {
    quizzGetting.open('GET', '../JSONQuizzes/macroeconomics.json');
    quizzGetting.send();
    $('[sarchevi]').css({
        "grid-area": "1/1/1/span 3",
    })
    $('[macroeconomics]').css({
        "border-color": "red",
        "box-shadow": "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
        "opacity": "1"
    })
    $('[firma]').css({
        "border-color": "white",
        "box-shadow": "none",
        "opacity": "0.5"
    })
    $('[shromeconomics]').css({
        "border-color": "white",
        "box-shadow": "none",
        "opacity": "0.5"
    })
    $('[shrmigracia]').css({
        "border-color": "white",
        "box-shadow": "none",
        "opacity": "0.5"
    })
    $('body').css({
        "background-image": "url(../JSONQuizzes/imgs/bg/macroeconomicsBG.jpg)",
        "background-size": "cover",
        "background-repeat": "no-repeat"
    })
    $('.bacgrounding').css({
        "background-color": "rgba(255, 255, 240,0.8)",
    })
    document.querySelector('.titling').innerText = 'მაკროეკონომიკა'
    document.querySelector('.tableTitle').innerText = 'მაკროეკონომიკა'
    document.querySelector('[firma]').style.pointerEvents = 'none'
    document.querySelector('[shromeconomics]').style.pointerEvents = 'none'
    document.querySelector('[shrmigracia]').style.pointerEvents = 'none'
    document.querySelector('.leave').href = "./quiz.html"
})