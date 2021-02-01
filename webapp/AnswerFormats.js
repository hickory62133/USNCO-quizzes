
    const answers = [
        //2020 L/N
         [3,4,3,3,1,2,1,3,2,3,4,1,4,1,3,4,1,2,1,1,1,2,3,4,3,4,2,3,1,4,2,4,3,4,4,1,1,2,3,3,2,4,1,4,1,3,2,1,2,3,3,1,1,2,1,4,2,3,3,2],
         [1,4,2,2,1,2,4,3,3,1,1,4,2,2,1,2,3,2,3,1,4,2,2,4,1,1,2,4,2,2,3,2,1,4,1,2,4,4,3,4,1,1,4,4,4,2,3,1,1,4,1,1,3,3,2,4,3,2,1,3,],
        //2019
         [4,1,3,1,2,4,3,1,1,3,2,3,3,4,1,2,3,2,2,3,1,2,2,1,4,4,1,1,2,2,1,4,1,4,1,2,4,1,3,2,4,1,1,4,1,2,2,1,3,1,2,1,3,3,2,3,1,4,2,4],
         [2,3,3,3,2,1,1,2,1,1,4,2,1,4,3,3,1,1,3,2,2,4,2,4,4,1,2,4,2,3,4,4,3,4,3,1,3,3,3,1,3,4,1,3,2,3,4,2,2,2,2,3,2,3,1,4,3,3,2,1,],
        //2018
         [3,1,2,3,4,4,4,4,1,2,1,2,1,4,2,1,3,3,3,1,3,2,3,1,4,3,3,4,2,1,2,2,1,1,3,2,2,1,3,3,3,4,1,3,1,3,3,2,4,2,2,2,1,4,3,3,3,1,2,1,],
         [2,2,3,4,1,4,2,1,3,3,4,3,4,3,2,1,3,4,3,2,1,2,4,1,3,4,4,4,2,4,3,4,1,4,1,4,4,1,2,2,4,3,4,2,1,4,3,3,3,1,3,2,3,1,2,3,4,2,1,2,],
        //2017
         [1,4,1,3,4,2,3,1,4,3,1,4,2,2,1,1,3,1,3,2,1,4,3,4,4,3,2,3,2,4,1,3,1,1,1,2,1,2,4,2,4,1,4,1,4,2,3,3,2,3,3,2,1,2,4,4,1,2,1,3,],
         [2,1,4,4,3,3,1,3,2,1,3,3,2,2,2,2,1,3,4,3,3,4,1,2,3,4,3,3,1,4,3,4,4,3,2,2,4,2,1,2,1,1,2,3,2,2,3,1,1,2,1,1,1,2,2,2,3,4,1,4,],
        //2016
         [1,1,1,2,4,1,4,4,2,1,4,4,2,4,3,2,1,3,2,3,1,3,1,4,3,3,3,1,4,1,2,1,4,3,2,4,2,2,3,1,2,4,1,1,2,3,1,2,1,3,2,3,3,2,3,4,2,4,1,2,],
         [4,2,1,1,4,2,2,2,2,4,3,3,1,4,2,1,2,1,4,4,1,4,4,3,2,3,2,3,3,1,4,2,3,3,2,2,1,3,1,2,2,1,1,4,3,4,1,2,4,1,3,4,4,2,1,2,3,1,3,2,],
        //2015
         [2,1,4,3,2,1,3,3,4,1,2,2,1,2,1,3,4,2,2,2,1,4,2,1,3,2,3,3,2,4,1,4,4,3,3,3,2,2,4,1,1,3,1,4,4,2,2,1,3,2,1,2,4,4,1,4,3,4,3,2,],
         [1,2,3,1,3,2,2,1,2,3,3,1,3,2,2,2,1,3,1,4,3,4,2,4,1,3,1,3,2,1,4,2,2,4,3,3,4,3,2,2,4,2,3,2,1,4,1,3,2,4,4,3,1,2,1,4,4,4,2,3,],
        //2014
         [4,3,2,3,4,1,3,1,2,2,1,1,4,1,3,4,4,3,4,2,2,2,1,3,3,1,4,3,2,4,4,4,2,3,2,1,4,1,2,4,1,2,4,3,3,2,3,2,3,4,2,3,4,1,1,1,3,2,4,2,],
         [4,2,1,3,4,1,3,1,3,4,4,3,3,4,1,4,2,4,1,3,4,1,2,2,1,3,4,3,2,3,2,1,1,2,2,2,3,3,4,2,2,1,2,3,3,3,4,3,2,2,3,2,1,1,1,2,2,1,2,4,],
        //2013
         [4,2,3,2,3,3,4,2,4,1,1,4,2,2,1,2,2,4,4,1,1,2,3,2,4,2,3,4,4,1,4,2,4,4,2,3,3,1,2,2,1,2,4,3,1,4,3,2,4,3,3,4,4,4,3,2,4,2,4,3,],
         [3,1,3,2,1,1,1,1,2,4,2,4,2,1,2,3,4,4,3,2,2,3,3,1,1,3,1,4,3,2,1,2,3,4,3,1,2,2,2,2,1,4,3,1,3,4,1,4,4,2,1,2,1,4,4,2,2,4,4,1,],
        //2012
         [1,2,1,3,3,3,3,2,2,1,3,1,1,1,3,4,2,2,1,2,2,4,4,4,3,2,3,2,4,1,1,3,3,4,3,2,1,1,4,2,4,3,2,4,1,2,3,2,3,4,4,1,4,2,4,3,1,3,1,2,],
         [4,4,2,4,3,4,1,4,2,2,1,3,1,2,1,2,3,2,2,1,1,3,3,4,1,1,3,2,3,3,4,4,3,1,1,4,2,2,4,1,3,3,1,2,4,3,1,3,1,2,3,4,1,3,1,4,2,3,3,4,],
        //2011
         [2,1,4,3,1,4,4,3,4,4,1,4,1,2,4,4,1,4,1,2,2,1,4,1,1,1,1,4,2,2,4,4,3,3,1,2,3,2,2,3,3,2,3,4,4,2,2,4,4,1,1,2,3,3,2,3,3,2,1,4,],
         [4,1,3,2,3,2,4,2,4,3,1,2,1,1,4,2,4,3,4,2,2,1,1,4,4,1,3,2,2,4,1,1,3,2,2,3,2,1,1,2,2,4,3,1,4,3,3,2,1,1,3,1,2,4,4,3,2,3,2,1,],
        //2010
         [4,1,2,3,1,1,4,2,3,2,4,1,3,4,4,3,1,3,1,1,1,2,3,4,2,4,1,3,2,3,4,4,3,1,4,3,2,3,1,2,3,1,1,4,2,3,3,4,4,2,1,1,4,2,3,3,4,1,4,2,],
         [1,2,4,3,3,2,4,2,4,2,1,4,3,2,4,1,3,3,4,1,2,2,3,4,4,3,2,2,3,1,2,1,4,4,4,1,4,3,1,2,3,1,1,3,2,2,4,1,4,3,4,2,1,4,3,4,2,1,4,3,],
    ];

    const formats = [
        //2020 L/N
         [0,0,0,1,0,1,0,0,-1,0,-1,-1,1,-1,-1,-1,1,1,-1,0,0,0,0,-1,-1,0,0,0,1,-1,-1,0,1,0,1,0,0,-1,0,-1,0,0,1,1,1,-1,-1,1,1,1,-1,-1,-1,1,0,0,0,1,0,-1],
         [0,1,0,0,-1,0,0,-1,-1,0,0,-1,0,-1,-1,1,1,-1,0,-1,0,0,-1,0,0,0,0,0,-1,0,0,1,1,1,0,-1,1,0,1,0,-1,-1,-1,0,1,0,1,-1,1,1,0,0,-1,1,0,1,0,0,-1,1,],
        //2019
         [1,0,0,1,-1,-1,0,0,0,0,-1,-1,1,-1,-1,-1,0,1,0,-1,-1,0,0,0,-1,0,-1,0,0,-1,-1,1,-1,0,0,0,1,1,0,0,0,0,-1,1,0,0,0,-1,0,1,-1,0,0,-1,0,0,0,1,0,0,],
         [0,0,0,1,0,1,0,0,0,0,-1,-1,-1,-1,0,-1,-1,0,-1,0,0,-1,0,0,-1,0,-1,-1,0,-1,0,1,0,-1,0,0,-1,1,-1,0,1,0,-1,-1,1,1,0,-1,0,-1,1,0,0,-1,0,1,-1,1,-1,-1,],
        //2018
         [0,0,0,0,1,-1,1,1,0,0,-1,0,0,-1,-1,0,0,-1,1,-1,0,0,0,-1,0,0,-1,-1,0,-1,1,1,1,0,0,1,-1,-1,1,1,-1,1,0,1,0,1,1,-1,0,1,1,-1,-1,0,1,1,1,0,-1,-1,],
         [1,-1,1,0,0,1,0,-1,1,0,0,-1,-1,-1,0,-1,0,1,-1,0,0,-1,0,-1,1,0,1,-1,0,0,1,0,0,1,0,0,1,1,0,1,-1,1,1,0,-1,1,1,1,1,0,0,-1,0,-1,-1,0,1,0,-1,0,],
        //2017
         [0,0,1,0,-1,-1,1,1,0,0,-1,-1,1,-1,-1,0,-1,-1,0,0,0,0,0,-1,0,1,-1,0,-1,-1,-1,0,0,-1,0,0,1,1,1,0,0,0,1,-1,0,1,0,1,1,-1,0,-1,-1,1,0,0,0,-1,0,0,],
         [1,1,0,1,0,-1,-1,0,0,0,0,0,-1,-1,0,-1,-1,0,0,0,0,-1,0,0,-1,1,0,-1,-1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,-1,1,0,1,-1,-1,-1,0,-1,0,-1,-1,-1,],
        //2016
         [1,0,1,1,0,0,0,-1,0,0,1,0,0,0,1,0,1,-1,-1,1,0,-1,0,0,-1,0,0,0,-1,0,-1,-1,0,0,-1,0,1,1,1,0,0,-1,-1,1,-1,-1,0,1,1,0,1,0,-1,0,1,0,0,-1,0,0,],
         [1,0,1,1,0,0,-1,-1,0,0,0,-1,0,-1,0,-1,0,-1,0,-1,0,0,-1,0,0,0,-1,0,0,-1,-1,-1,-1,1,-1,1,1,1,0,0,0,1,0,0,1,-1,1,0,1,0,1,1,1,-1,0,0,1,0,-1,0,],
        //2015
         [0,-1,0,0,-1,0,-1,1,0,-1,0,1,0,1,-1,0,0,0,1,-1,0,-1,0,0,0,0,0,0,0,-1,-1,0,1,0,0,0,1,-1,0,0,-1,0,1,1,1,1,1,0,0,-1,-1,0,1,1,0,0,0,0,1,0,],
         [1,0,1,0,-1,0,0,1,-1,-1,1,1,0,1,0,-1,-1,-1,-1,-1,1,0,1,-1,-1,1,-1,0,-1,-1,0,1,-1,1,0,-1,1,0,1,1,-1,1,0,1,0,1,-1,0,1,-1,0,0,0,0,-1,0,-1,0,-1,-1,],
        //2014
         [0,-1,0,0,0,1,-1,1,1,0,-1,0,-1,0,0,-1,0,-1,0,0,1,0,0,1,0,-1,0,0,-1,-1,0,0,-1,0,0,-1,1,1,1,-1,-1,1,1,0,-1,0,1,0,1,0,1,0,1,-1,-1,0,0,0,0,0,],
         [1,0,1,0,1,0,1,-1,0,0,-1,0,-1,-1,1,-1,-1,1,0,1,0,0,-1,1,0,0,0,-1,0,0,0,0,-1,1,0,0,-1,0,1,0,1,1,1,1,0,1,0,0,-1,0,1,0,1,-1,-1,1,0,-1,0,-1,],
        //2013
         [1,0,1,1,0,0,0,-1,1,0,0,-1,0,0,0,-1,-1,0,0,0,0,0,-1,-1,0,1,1,0,0,1,-1,-1,0,0,-1,0,0,0,0,1,0,-1,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,-1,0,1,],
         [0,1,0,-1,-1,1,0,1,0,0,1,-1,0,0,0,1,-1,-1,0,0,0,0,0,0,0,0,0,0,0,0,-1,1,0,0,1,0,1,-1,0,1,-1,0,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,-1,],
        //2012
         [0,0,0,1,0,1,1,0,0,1,0,0,-1,1,-1,-1,1,1,0,1,1,-1,0,0,-1,1,-1,1,1,0,0,0,0,0,0,0,1,-1,1,1,-1,0,0,1,-1,0,1,1,0,1,0,1,0,1,0,-1,0,1,0,0,],
         [1,1,1,1,1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,1,0,1,0,0,0,0,0,0,1,-1,0,-1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,-1,1,0,0,1,0,0,0,0,1,-1,1,0,0,1,0,],
        //2011
         [-1,0,1,1,-1,-1,0,1,0,-1,0,0,0,1,1,-1,0,0,-1,0,0,0,-1,0,-1,0,0,-1,-1,-1,0,0,0,-1,0,0,-1,0,0,0,-1,0,1,0,1,0,0,0,1,1,1,1,-1,1,0,1,1,0,0,0,],
         [0,0,0,-1,0,0,0,1,1,0,0,0,0,0,1,1,1,-1,-1,0,0,1,0,0,-1,1,0,0,-1,1,0,0,0,1,0,0,1,0,1,-1,1,1,1,0,0,1,1,1,0,0,1,-1,0,0,1,-1,0,1,1,0,],
        //2010
         [0,0,0,0,-1,0,1,0,0,-1,0,0,1,0,0,-1,1,-1,0,1,0,-1,-1,1,-1,0,0,1,1,0,0,-1,1,1,1,0,0,-1,0,0,1,1,-1,0,1,0,1,1,1,1,0,1,-1,1,0,1,0,0,1,-1,],
         [-1,-1,-1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,-1,1,1,0,-1,0,0,1,0,0,-1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,-1,1,1,-1,0,0,0,0,-1,0,],
    ];


    const topics = {//2020-2010 = DONE
        Q1_6:1,
        Stoich:[
            /*2020*/[1,3],[1,2],  [2,4,6],[2,5], [3,5],[1,3,4], [5],[1,2,3,4,5], [1,2,4],[1,3,4,5], [1,2,4,5],[1,2,4],
            /*2014*/[2],[1,3], [1,4],[1,2,7], [4,6],[1,4,5], [8],[8,11], [11],[],],
        UConversions:[
                    [2,4,5,6],[3,4,5], [1,3,5],[1,3,4,6], [1,2,4,6],[2,5,6], [1,2,3,4,6],[6], [3,6,18],[2], [3,6],[3,5],
                    [1,3,4,5],[2,4,6], [2,3,5,6],[3,4,5,6,13], [1,2,3,5],[2,3,6,12], [7,9,12],[6,9,10,12], [1,8,9,12,33],[7,10,11,12],],
        Solutions:[
                    [4,5],[4,5,6], [5,6],[6], [2,6],[5], [4,6],[5,6], [3,6],[2,6], [3,6],[3,5], 
                    [4,5],[4], [2,5,6],[4,5,6], [3,5],[2], [7,12],[9,10,12], [12,33],[7,11,12], ],

        Q7_12:7,
        Descriptive:[
            /*2020*/[7,9,10,11],[7,10,11,12], [7,8,9],[6,7,8,10,], [7,8,9,10],[7,9,10], [7,8,9,10],[7,8,10], [5,7,8,9,10,11],[8,9], [5,7,8,9,11,12],[7,8,10,11,12],
            /*2014*/[6,7,8,9],[5,7,8,9,10], [9,10,11,33,46],[8,9,11], [7,8,11],[7,9,10,30,31,33], [2,3,4,6,11,33],[1,2,3,7], [2,3,6,10],[1,2,3,4,6,8,9],],
        LabPractice:[
            /*2020*/[8,12],[8,9], [10,11,12],[9,11,12], [11,12],[8,11,12], [11,12],[9,11,12], [12],[7,10,11,12], [10,14],[9],
            /*2014*/[10,11,12],[11,12], [7,8,12],[10,12], [10,12],[8,11,12], [1,5],[4,5], [5],[5],],
    
        Q13_18:13,
        StatesofMatter:[
            /*2020*/[13,14,15,16,17,18], [13,14,15,16,17,18], [13,14,15,16,17,18], [13,14,15,16,17,18], [13,14,15,16,17,18], [13,14,15,16,17,18], [13,14,15,16,17,18], [13,14,15,16,17,18], [13,14,15,16,17,18], [13,14,15,16,17,18], [13,14,15,16,17,18], [13,14,15,16,17,18], 
            /*2014*/[13,14,15,16,17,18],[13,14,15,16,17,18], [13,14,15,16,17,18],[13,14,15,16,17,18], [11,13,14,15,16,17,18],[13,14,15,16,17], [13,14,15,16,17],[13,14,15,16,17], [13,14,15,16,17,53],[13,14,15,16,17],],
        IntermolForces: [
            /*2020*/[14,16],[13,15,16,17], [14,15],[13,14,15], [14,17,18],[14,15], [14,15,17,18],[13,16,17], [15],[13,16,18], [15,17],[13,14,16],
            /*2014*/[15,16,17],[13], [15,17],[18], [11,13,18],[16], [15,16,55],[14,16], [4,53],[8],],
        UnitCells: [
            /*2020*/[17,18],[18], [18],[18], [],[18], [],[18], [17],[17], [19],[18],
            /*2014*/[],[16,18], [18],[], [17],[], [],[17], [],[18],],
        MolKinetics: [//Gases?
            /*2020*/[13],[], [13],[17], [13,15,16],[], [],[14], [14],[], [],[15],
            /*2014*/[13],[], [],[14,15], [],[14], [18],[15], [15],[13,17],],

        Q19_24:19,
        Thermodynamics: [
            /*2020*/[19,20,21,22,23,24],[19,20,21,22,23,24], [19,20,21,22,23,24], [19,20,21,22,23,24], [19,20,21,22,23,24], [19,20,21,22,23,24], [19,20,21,22,23,24], [19,20,21,22,23,24], [19,20,21,22,23,24], [19,20,21,22,23,24], [19,20,21,22,23,24], [19,20,21,22,23,24], 
            /*2014*/[19,20,21,22,23,24],[19,20,21,22,23,24], [19,20,21,22,23,24],[19,20,21,22,23,24], [19,20,21,22,23,24],[18,19,20,21,22,23,24], [19,20,21,22,23,24],[18,19,20,21,22,23,24,31,51], [19,20,21,22,23,24],[19,20,21,22,23,24],],
        Conceptual:[
            /*2020*/[19,23,24],[20,22,23], [20,21,22,],[19,21,22], [20,23,24],[20,22,23], [23],[20,22,24], [19,22],[20,21], [18,20,22],[19,23,24],
            /*2014*/[20,22,23,24],[21,23], [20,23,24],[19,21], [22,23,24],[21,22,24], [19,22,23,24],[19,31], [19,22,23,24],[22,34],],
        Calculations:[
            /*2020*/[20,21,22],[19,21,23,24], [19,23,24],[20,23,24], [19,21,22],[19,21,24], [19,20,21,22,24],[19,21,23], [20,21,23,24],[19,22,23,24], [21,23,24],[20,21,22],
            /*2014*/[19,21],[19,20,22,24], [19,21,22],[20,22,23,24], [19,20,21],[18,19,20,23], [20,21,52],[20,21,22,23,24,51], [20,21],[19,20,21,23,24],],

        Q25_30:25,
        Kinetics: [
            /*2020*/[25,26,27,28,29,30],[25,26,27,28,29,30], [25,26,27,28,29,30], [25,26,27,28,29,30], [25,26,27,28,29,30], [25,26,27,28,29,30], [25,26,27,28,29,30], [25,26,27,28,29,30], [25,26,27,28,29,30], [25,26,27,28,29,30], [25,26,27,28,29,30], [25,26,27,28,29,30], 
            /*2014*/[25,26,27,28,29,30],[25,26,27,28,29,30], [25,26,27,28,29,30],[25,26,27,28,29,30], [25,26,27,28,29,30],[25,26,27,28,29,30], [25,26,27,28,29,30],[25,26,27,28,29,30], [25,26,27,28,29,30],[25,26,27,28,29,30],],
        RateLaws: [
            /*2020*/[27,30],[26,27,28,29,30], [25,26,29,30],[25,27,30], [26,27,29],[25,26,27,28,29], [26,27,30],[25,27,28,30], [27,28,30],[25,27,28,30], [26,27,28],[25,26,27], 
            /*2014*/[27,28],[25,26,27,29,30], [26,27,28],[26,27,28,29], [28,29],[26,27,29], [27,28],[26,29], [28,30],[25,26,28,29],
        ],
        Arrhenius: [
            /*2020*/[26,28],[], [27],[26], [28],[], [28,29],[26], [],[26,29], [30],[28,29],
            /*2014*/[29,30],[28], [30],[30], [25,27],[25,28], [26],[27,28], [27],[],
        ],


        Q31_36:31,
        Equilibrium: [
            /*2020*/[31,32,33,34,35,36],[31,32,33,34,35,36], [31,32,33,34,35,36],[31,32,33,34,35,36], [31,32,33,34,35,36],[31,32,33,34,35,36], [31,32,33,34,35,36],[31,32,33,34,35,36], [31,32,33,34,35,36],[5,31,32,33,34,35,36], [30,31,32,33,34,35,36],[6,9,31,32,33,34,35,36], 
            /*2014*/[31,32,33,34,35,36],[12,31,32,33,34,35,36], [31,32,34,35,36],[31,32,33,34,35,36], [31,32,34,35,36],[31,32,33,34,35,36], [31,32,34,35,36],[31,32,33,34,35,36], [31,32,34,35,36],[31,32,33,34,35,36],],

        Titrations: [
            /*2020*/[35],[35], [36],[36], [39],[], [34],[35], [35],[5,35], [36],[6,9,36],
            /*2014*/[],[12,31], [],[], [5,34,36],[32], [10],[], [],[],],

        Q37_42:37,
        Redox: [
            /*2020*/[37,38,39,40,41,42],[37,38,39,40,41,42], [37,38,39,40,41,42], [37,38,39,40,41,42], [37,38,39,40,41,42], [37,38,39,40,41,42], [37,38,39,40,41,42], [37,38,39,40,41,42], [37,38,39,40,41,42], [37,38,39,40,41,42], [37,38,39,40,41,42], [37,38,39,40,41,42], 
            /*2014*/[37,38,39,40,41,42],[37,38,39,40,41,42], [37,38,39,40,41,42],[37,38,39,40,41,42], [37,38,39,40,41,42,52],[37,38,39,40,41,42], [37,38,39,40,41,42,49],[37,38,39,40,41,42], [37,38,39,40,41,42,49],[37,38,39,40,41,42],],

        OxStates: [
            /*2020*/[37,38],[37], [37],[38], [37],[37,38], [38,39],[38,39], [37],[37], [37],[37,40],
            /*2014*/[37,38],[], [38,39],[37], [37,39,52],[37], [39,49],[37], [7,39,40],[],],

        Q43_48:43,
        Atoms:[
            [44,47,48],[43,44,47,48], [43,44,46,47],[43,46,47], [43,45,46],[44,47,48], [43,45,46,47,48],[43,45,46], [43,44,46,47],[43,44,45,48], [43,46,48],[43,45,48],
            [43,44,45,46],[43,44,45,46], [43,44,45],[43,44,46], [9,43,44,45],[43,44,45,46,47], [43,44,45,48],[43,44,45,46,48], [43,44,47],[43,44,45],],
            Nuclear: [
            /*2020*/[48],[], [46],[47], [],[48], [47],[], [43,48],[48], [],[],
            /*2014*/[],[], [45],[], [43],[], [48],[], [],[],],
            Electrons: [
            /*2020*/[44,47],[43,44,47,48], [44,47],[43,46], [43,46],[44,47], [43,46,48],[43,45,46], [47],[43,44,45], [43,46,48],[43,45],
            /*2014*/[43,44,45,46],[43,44,45], [44],[43,44,46], [9,44,45],[43,44,45,46,47], [43,44,45],[43,45,46,48], [47],[43,44],],
        Periodicity: [
            /*2020*/[43,45,46],[45,46,], [45,48],[44,45,48], [44,47,48],[43,45,46], [44],[44,47,48], [44,45,46],[46,47], [44,45,47],[44,46,47],
            /*2014*/[47,48],[46,47,48], [47,48],[45,47,48], [46,47,48],[48], [46,47],[47], [45,46,48],[46,47,48],],
        

        Q49_54:49,
        Bonding:[
            /*2020*/[50,51,52,53],[49,52,53], [49,51,52,53,54],[50,52,53,54], [49,51,53,54],[51,54], [51,52,53,54],[49,51,52,53,54], [49,50,51,53],[49,50,51,52,54], [50,51,53,54],[49,50,52,54],
            /*2014*/[49,50,51,52,53],[49,51,53,54], [49,50,51,54],[49,51,52,53,54], [49,51,52,53],[49], [54],[49,50], [49,50,54],[50,51,52,54],],
            Lewis_Structures: [
                /*2020*/[50,51,52,53],[52], [49,52,53],[50,53,54], [49,51],[51], [51,52,53,54],[49,51,54], [50,51,54],[49,50,52,54], [50,51,53,54],[49,50,52,54],
                /*2014*/[50,53],[51], [51,54],[49,51,52,54], [51,53],[], [54],[49,50], [49],[50,51,52],],
        MolStruct:[
            /*2020*/[49,54],[50,51,52,54], [49,50],[49,51,53], [50,52,54],[49,50,52,53], [49,50,53],[50,53,54], [49,52,54],[51,53,54], [49,52],[51,52,53], 
            /*2014*/[54,55],[50,52], [52,53,55],[50,54], [50,54],[50,51,52,53,54], [50,51,53],[52,53,54], [51,52],[49,53],],
            VSEPR: [
                /*2020*/[49],[50,51,52], [49,50],[49,51,53], [50,54],[49,50,53], [49,50,53],[50,53,54], [49,52,54],[51,54], [49,52],[51,53],
                /*2014*/[54],[50,52], [52,53],[50,54], [50,54],[50,51,52,53], [50,51,53],[52,54], [51,52],[49],],
            Isomerization: [
                /*2020*/[54],[54], [],[], [52],[52], [],[], [],[53], [],[],
                /*2014*/[55],[], [55],[], [],[54], [],[53], [],[53],],//include orgo?

        Q55_60:55,
        Organic:[
            /*2020*/[55,56,57,58,59,60], [55,56,57,58,59,60], [55,56,57,58,59,60], [55,56,57,58,59,60], [55,56,57,58,59,60], [55,56,57,58,59,60], [55,56,57,58,59,60], [55,56,57,58,59,60], [55,56,57,58,59,60], [55,56,57,58,59,60], [55,56,57,58,59,60], [55,56,57,58,59,60], 
            /*2014*/[55,56,57,58,59,60],[55,56,57,58,59,60], [55,56,57,58,59,60],[55,56,57,58,59,60], [55,56,57,58,59,60],[55,56,57,58,59,60], [55,56,57,58,59,60],[55,56,57,58,59,60], [55,56,57,58,59,60],[55,56,57,58,59,60],],
        Biochemistry: [
            /*2020*/[60],[60], [60],[60], [60],[60], [60],[60], [60],[60], [60],[60],
            /*2014*/[59,60],[60], [59,60],[58], [57,60],[60], [60],[59,60], [60],[58,60],],
    }

    const topicnumbers = [0,3,5,9,12,15,17,19,23,28,30];
    const topickeys = [
        "Stoich", "UConversions","Solutions",
        "Descriptive", "LabPractice",  
        "StatesofMatter","IntermolForces","UnitCells","MolKinetics",
        "Thermodynamics","Conceptual","Calculations",
        "Kinetics", "RateLaws", "Arrhenius",
        "Equilibrium","Titrations",
        "Redox","OxStates",
        "Atoms","Nuclear","Electrons","Periodicity",
        "Bonding","Lewis_Structures", "MolStruct", "VSEPR","Isomerization",
        "Organic","Biochemistry"];
    const topicnames = [
        "Stoichiometry", "Unit Conversions", "Solutions",
        "Descriptive Chemistry", "Laboratory Practice",
        "States of Matter", "Intermolecular Forces", "Unit Cells", "Kinetic Theory of Gases",
        "Thermodynamics", "Thermodynamic Concepts", "Thermodynamic Calculations",
        "Kinetics", "Rate Laws", "Arrhenius Equation",
        "Equilibrium", "Titrations",
        "Oxidation-Reduction", "Oxidation States",
        "Atomic Structure", "Nuclear Chemistry", "Electrons", "Periodicity",
        "Bonding", "Lewis Structures","Molecular Structure", "VSEPR", "Isomerization",
        "Organic Chemistry", "Biochemistry"
    ];
    const getTopic = (array) => {
        if (array===-1){
            let topic=[];
            for (let i=0;i<formats.length;i++){
                const temp=[];
                for (let j=1;j<61;j++){
                    temp[j-1]=j;
                }
                topic[i]=temp;
            }
            return {topic:topic,name:"Questions 1-60"};
        }

        let n = topicnumbers[array[0]]+array[1];
        let name = topicnames[n];
        let topic = topics[topickeys[n]];

        if (typeof(topic)==="number") {
            let n=topic;
            topic=[];
                for (let i=0;i<formats.length;i++){
                    topic[i]=[n,n+1,n+2,n+3,n+4,n+5];
                }
        }

        return {topic:topic,name:name};
    }

    const getAnswer = (props) => {
        var add = 0;
        if (props.test==="N") add++;
        return answers[2*(2020-props.year)+add][props.number-1]-1;
    }
    const getFormat = (props) => {
        var add = 0;
        if (props.test==="N") add++;
        return formats[2*(2020-props.year)+add][props.number-1];
    }

    const getTest = (index,abbreviation) => {
        const year = 2020-Math.floor(index/2);
        let test;
        if (abbreviation) test= 2*(2020-year)===index ? "L" : "N";
        else test= 2*(2020-year)===index ? "Locals" : "USNCO";
        return {year:year,test:test}
    }



export {getAnswer,getFormat,getTopic,topicnames,topicnumbers,formats,getTest}