let quizz = {
    question: [
        'Which of the following would make a grid with 2 equally sized columns and 4 equally sized rows?',
        'Which of the following is a display value for a CSS Grid parent element?',
        'Which of the following would create an item that begins at the 3rd row of the grid?',
        'Which of the following would make an item start at row 2 and end right before row 5?',
        'Which function can be used to set minimum and maximum heights and widths for your rows and columns?',
        'Which of the following would make an item span 3 columns?',
        'Which of the following would make a grid with 2 columns - one twice as big as the other?',
        'Which of the following would make a grid with 3 columns where the middle column takes up 60% of the space, the first column takes up 1/3 of the remaining space and the last column takes up 2/3 of the remaining space?',
        'Which of the following properties sizes implicit grid rows?',
        'Which of the following display values will set an element to be a grid container and inline?'
    ],
    answer: [
        [
            'grid-template-columns: repeat(3, 200px); grid-template-rows: 100px 100px 100px 100px;',
            'grid-template-columns: 2fr 3fr; grid-template-rows: 25% 25% 25% 25%;',
            'grid-template-columns: repeat(4, 100px); grid-template-rows: 200px 200px;',
            'grid-template-columns: 50% 50%; grid-template-rows: 1fr 1fr 1fr 1fr;'
        ],
        [
            'absolute',
            'grid',
            'auto',
            'flex'
        ],
        [
            'grid-row-start: 2;',
            'grid-column-start: 3;',
            'grid-row-end: 2;',
            'grid-row-start: 3;'
        ],
        [
            'grid-row: 2 / 6;',
            'grid-row-start: 2; grid-row-end: span 2',
            'grid-row: 2 / span 3;',
            'grid-row: span 3 / 6;'
        ],
        [
            'boundpx()',
            'minmax()',
            'flow()',
            'minimummaximum()'
        ],
        [
            'grid-column-start: 1; grid-column-end: 4;',
            'grid-column-start: 0; grid-column-end: 3;',
            'grid-column-start: 2; grid-column-end: 6;',
            'grid-column-start: 2; grid-column-end: 4;'
        ],
        [
            'grid-template-columns: 2fr 3fr;',
            'grid-template-columns: 100px 100px 200px;',
            'grid-template-columns: 1fr 25% 50%;',
            'grid-template-columns: 1fr 2fr;'
        ],
        [
            'grid-template-columns: 20% 60% 20%;',
            'grid-template-columns: 1fr 2fr 3fr;',
            'grid-template-columns: 3fr 60% 4fr;',
            'grid-template-columns: 1fr 60% 2fr;'
        ],
        [
            'grid-row',
            'grid-template-rows',
            'grid-row-start',
            'grid-auto-rows'
        ],
        [
            'inline-auto-grid',
            'block-grid',
            'inline-block-grid',
            'inline-grid'
        ]
    ],
    correct: [3, 1, 2, 2, 1, 0, 2, 3, 3, 3]

}

let nameQuizz = document.querySelector('[nameQuizz]');
let groupCode = document.querySelector('[groupCode]');
let surnameQuizz = document.querySelector('[surnameQuizz]');

let clickCounter = 0;

var arr = new Array();

let easyMode = document.querySelector('[easyMode]');

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



//* ************************************************************** */
//ადვილი
easyMode.addEventListener('click', function () {

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

                        localStorage.setItem("localData", JSON.stringify(arr));
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
                            var str = localStorage.getItem("localData");
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

                            localStorage.setItem("localData", JSON.stringify(arr));
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
                                var str = localStorage.getItem("localData");
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
        /*
            let arrayForUs = [groupCode.value, surnameQuizz.value, easyMode.value]
            let key = nameQuizz.value;
            let value = arrayForUs;
        
            if (key && value) {
                localStorage.setItem(key, JSON.stringify(value));
            }
        
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                const value = localStorage.getItem(key);
        
                saverGuy.unshift(key);
                saverGuy.unshift(JSON.parse(value));
            };
        */
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

                        localStorage.setItem("localData", JSON.stringify(arr));
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
                            var str = localStorage.getItem("localData");
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

                            localStorage.setItem("localData", JSON.stringify(arr));
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
                                var str = localStorage.getItem("localData");
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
        /*
            let arrayForUs = [groupCode.value, surnameQuizz.value, easyMode.value]
            let key = nameQuizz.value;
            let value = arrayForUs;
        
            if (key && value) {
                localStorage.setItem(key, JSON.stringify(value));
            }
        
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                const value = localStorage.getItem(key);
        
                saverGuy.unshift(key);
                saverGuy.unshift(JSON.parse(value));
            };
        */
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

                        localStorage.setItem("localData", JSON.stringify(arr));
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
                            var str = localStorage.getItem("localData");
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

                            localStorage.setItem("localData", JSON.stringify(arr));
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
                                var str = localStorage.getItem("localData");
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




