// File tp update localstorage across all pages
  
// Change below to "tipqic.org/" or "https://tipqic.org/" later
// let domainBaseURL = "http://127.0.0.1:5500/";
let domainBaseURL = "https://tipqic.org/";

    // Function to list all occurences of FUH based of class="FUH"
    let FUH_list = document.getElementsByClassName("FUH");

    if(FUH_list.length>0){


        // console.log(FUH_list);
        // console.log(FUH_list[0].innerHTML);
        // Change below to "tipqic.org/" or "https://tipqic.org/" later
        // console.log("Base URL origin : "+FUH_list[0].baseURI.split(domainBaseURL)[1]);
        


        // For the page 'MEASURES AND PERFORMANCE MEASUREMENT'
        if(FUH_list[0].baseURI.split(domainBaseURL)[1] == 'measures.html'){

            let FUH_innerList=[];
            for(let i=0; i<FUH_list.length; i++){
    
                FUH_innerList[i]={
                    URL: FUH_list[i].baseURI.split(domainBaseURL)[1],
                    text: FUH_list[i].innerHTML,
                };
    
            } // End of for loop



            // console.log(FUH_innerList);
        
            localStorage.setItem("FUH_WORDS_MeasurePerformance", JSON.stringify(FUH_innerList));
        }



        // For the page 'YOUR PERFORMANCE'   !!! Later change to non local URL
        if(FUH_list[0].baseURI.split(domainBaseURL)[1] == 'dashboard.html'){

            let FUH_innerList=[];
            for(let i=0; i<FUH_list.length; i++){
    
                FUH_innerList[i]={
                    URL: FUH_list[i].baseURI.split(domainBaseURL)[1],
                    text: FUH_list[i].innerHTML,
                };
    
            } // End of for loop

        
            localStorage.setItem("FUH_WORDS_YourPerformance", JSON.stringify(FUH_innerList));
        }


        // For the page 'PERFORMANCE IMPROVEMENT'
        if(FUH_list[0].baseURI.split(domainBaseURL)[1] == 'perfimp.html'){

            let FUH_innerList=[];
            for(let i=0; i<FUH_list.length; i++){
    
                FUH_innerList[i]={
                    URL: FUH_list[i].baseURI.split(domainBaseURL)[1],
                    text: FUH_list[i].innerHTML,
                };
    
            } // End of for loop

        
            localStorage.setItem("FUH_WORDS_PerformanceImprovement", JSON.stringify(FUH_innerList));
        }


        // For the page 'QIC MEETINGS & CEU'
        if(FUH_list[0].baseURI.split(domainBaseURL)[1] == 'qic/qicarchive/pedsadulthospital.html'){

            let FUH_innerList=[];
            for(let i=0; i<FUH_list.length; i++){
    
                FUH_innerList[i]={
                    URL: FUH_list[i].baseURI.split(domainBaseURL)[1],
                    text: FUH_list[i].innerHTML,
                };
    
            } // End of for loop

        
            localStorage.setItem("FUH_WORDS_QIC_PA&H", JSON.stringify(FUH_innerList));
        }



        // For the page 'QI WORKGROUPS' ...add the 4 differemt URLs in if statement?
        if(FUH_list[0].baseURI.split(domainBaseURL)[1] == 'QIWorkgroups.html'){

            let FUH_innerList=[];
            for(let i=0; i<FUH_list.length; i++){
    
                FUH_innerList[i]={
                    URL: FUH_list[i].baseURI.split(domainBaseURL)[1],
                    text: FUH_list[i].innerHTML,
                };
    
            } // End of for loop

        
            localStorage.setItem("FUH_WORDS_QIWorkgroups", JSON.stringify(FUH_innerList));
        }


        // For the page 'FAQ' ...add the 4 differemt URLs in if statement?
        if(FUH_list[0].baseURI.split(domainBaseURL)[1] == 'faq.html'){

            let FUH_innerList=[];
            for(let i=0; i<FUH_list.length; i++){
    
                FUH_innerList[i]={
                    URL: FUH_list[i].baseURI.split(domainBaseURL)[1],
                    text: FUH_list[i].innerHTML,
                };
    
            } // End of for loop

        
            localStorage.setItem("FUH_WORDS_FAQ", JSON.stringify(FUH_innerList));
        }


    }








// Function to list all occurences of SSD based of class="SSD"
let SSD_list = document.getElementsByClassName("SSD");

if(SSD_list.length>0){


    // console.log(SSD_list);
    // console.log(SSD_list[0].innerHTML);
    // // Change below to "tipqic.org/" or "https://tipqic.org/" later
    // console.log("Base URL origin : "+SSD_list[0].baseURI.split("http://127.0.0.1:5500/")[1]);



    // For the page 'MEASURES AND PERFORMANCE MEASUREMENT'
    if(SSD_list[0].baseURI.split(domainBaseURL)[1] == 'measures.html'){

        let SSD_innerList=[];
        for(let i=0; i<SSD_list.length; i++){
            // SSD_innerList[i]=FUH_list[i].innerHTML;

            // body.URL = FUH_list[i].baseURI.split("http://127.0.0.1:5500/")[1];
            // body.text = FUH_list[i].innerHTML;

            SSD_innerList[i]={
                URL: SSD_list[i].baseURI.split(domainBaseURL)[1],
                text: SSD_list[i].innerHTML,
            };

        } // End of for loop

    
        localStorage.setItem("SSD_WORDS_MeasurePerformance", JSON.stringify(SSD_innerList));
    }


    // For the page 'YOUR PERFORMANCE'   !!! Later change to non local URL
    if(SSD_list[0].baseURI.split(domainBaseURL)[1] == 'dashboard.html'){

        let SSD_innerList=[];
        for(let i=0; i<SSD_list.length; i++){

            SSD_innerList[i]={
                URL: SSD_list[i].baseURI.split(domainBaseURL)[1],
                text: SSD_list[i].innerHTML,
            };

        } // End of for loop

    
        localStorage.setItem("SSD_WORDS_YourPerformance", JSON.stringify(SSD_innerList));
    }


    // For the page 'PERFORMANCE IMPROVEMENT'
    if(SSD_list[0].baseURI.split(domainBaseURL)[1] == 'perfimp.html'){

        let SSD_innerList=[];
        for(let i=0; i<SSD_list.length; i++){

            SSD_innerList[i]={
                URL: SSD_list[i].baseURI.split(domainBaseURL)[1],
                text: SSD_list[i].innerHTML,
            };

        } // End of for loop

    
        localStorage.setItem("SSD_WORDS_PerformanceImprovement", JSON.stringify(SSD_innerList));
    }


    // For the page 'QIC MEETINGS & CEU'
    if(SSD_list[0].baseURI.split(domainBaseURL)[1] == 'qic/qicarchive/pedsadulthospital.html'){

        let SSD_innerList=[];
        for(let i=0; i<SSD_list.length; i++){

            SSD_innerList[i]={
                URL: SSD_list[i].baseURI.split(domainBaseURL)[1],
                text: SSD_list[i].innerHTML,
            };

        } // End of for loop

    
        localStorage.setItem("SSD_WORDS_QIC_PA&H", JSON.stringify(SSD_innerList));
    }


    // For the page 'QI WORKGROUPS' ...add the 4 differemt URLs in if statement?
    if(SSD_list[0].baseURI.split(domainBaseURL)[1] == 'QIWorkgroups.html'){

        let SSD_innerList=[];
        for(let i=0; i<SSD_list.length; i++){

            SSD_innerList[i]={
                URL: SSD_list[i].baseURI.split(domainBaseURL)[1],
                text: SSD_list[i].innerHTML,
            };

        } // End of for loop

    
        localStorage.setItem("SSD_WORDS_QIWorkgroups", JSON.stringify(SSD_innerList));
    }


    // For the page 'FAQ' ...add the 4 differemt URLs in if statement?
    if(SSD_list[0].baseURI.split(domainBaseURL)[1] == 'faq.html'){

        let SSD_innerList=[];
        for(let i=0; i<SSD_list.length; i++){

            SSD_innerList[i]={
                URL: SSD_list[i].baseURI.split(domainBaseURL)[1],
                text: SSD_list[i].innerHTML,
            };

        } // End of for loop

    
        localStorage.setItem("SSD_WORDS_FAQ", JSON.stringify(SSD_innerList));
    }


}





// Function to list all occurences of APM based of class="APM"
let APM_list = document.getElementsByClassName("APM");

if(APM_list.length>0){


    // console.log(APM_list);
    // console.log(APM_list[0].innerHTML);
    // // Change below to "tipqic.org/" or "https://tipqic.org/" later
    // console.log("Base URL origin : "+APM_list[0].baseURI.split("http://127.0.0.1:5500/")[1]);



    // For the page 'MEASURES AND PERFORMANCE MEASUREMENT'
    if(APM_list[0].baseURI.split(domainBaseURL)[1] == 'measures.html'){

        let APM_innerList=[];
        for(let i=0; i<APM_list.length; i++){
            // SSD_innerList[i]=FUH_list[i].innerHTML;

            // body.URL = FUH_list[i].baseURI.split("http://127.0.0.1:5500/")[1];
            // body.text = FUH_list[i].innerHTML;

            APM_innerList[i]={
                URL: APM_list[i].baseURI.split(domainBaseURL)[1],
                text: APM_list[i].innerHTML,
            };

        } // End of for loop

    
        localStorage.setItem("APM_WORDS_MeasurePerformance", JSON.stringify(APM_innerList));
    }


    // For the page 'YOUR PERFORMANCE'   !!! Later change to non local URL
    if(APM_list[0].baseURI.split(domainBaseURL)[1] == 'dashboard.html'){

        let APM_innerList=[];
        for(let i=0; i<APM_list.length; i++){

            APM_innerList[i]={
                URL: APM_list[i].baseURI.split(domainBaseURL)[1],
                text: APM_list[i].innerHTML,
            };

        } // End of for loop

    
        localStorage.setItem("APM_WORDS_YourPerformance", JSON.stringify(APM_innerList));
    }


    // For the page 'PERFORMANCE IMPROVEMENT'
    if(APM_list[0].baseURI.split(domainBaseURL)[1] == 'perfimp.html'){

        let APM_innerList=[];
        for(let i=0; i<APM_list.length; i++){

            APM_innerList[i]={
                URL: APM_list[i].baseURI.split(domainBaseURL)[1],
                text: APM_list[i].innerHTML,
            };

        } // End of for loop

    
        localStorage.setItem("APM_WORDS_PerformanceImprovement", JSON.stringify(APM_innerList));
    }


    // For the page 'QIC MEETINGS & CEU'
    if(APM_list[0].baseURI.split(domainBaseURL)[1] == 'qic/qicarchive/pedsadulthospital.html'){

        let APM_innerList=[];
        for(let i=0; i<APM_list.length; i++){

            APM_innerList[i]={
                URL: APM_list[i].baseURI.split(domainBaseURL)[1],
                text: APM_list[i].innerHTML,
            };

        } // End of for loop

    
        localStorage.setItem("APM_WORDS_QIC_PA&H", JSON.stringify(APM_innerList));
    }


    // For the page 'QI WORKGROUPS' ...add the 4 differemt URLs in if statement?
    if(APM_list[0].baseURI.split(domainBaseURL)[1] == 'QIWorkgroups.html'){

        let APM_innerList=[];
        for(let i=0; i<APM_list.length; i++){

            APM_innerList[i]={
                URL: APM_list[i].baseURI.split(domainBaseURL)[1],
                text: APM_list[i].innerHTML,
            };

        } // End of for loop

    
        localStorage.setItem("APM_WORDS_QIWorkgroups", JSON.stringify(APM_innerList));
    }


    // For the page 'FAQ' ...add the 4 differemt URLs in if statement?
    if(APM_list[0].baseURI.split(domainBaseURL)[1] == 'faq.html'){

        let APM_innerList=[];
        for(let i=0; i<APM_list.length; i++){

            APM_innerList[i]={
                URL: APM_list[i].baseURI.split(domainBaseURL)[1],
                text: APM_list[i].innerHTML,
            };

        } // End of for loop

    
        localStorage.setItem("APM_WORDS_FAQ", JSON.stringify(APM_innerList));
    }


}








// Function to list all occurences of Well-care visits based of class="WCV"
let WCV_list = document.getElementsByClassName("WCV");

if(WCV_list.length>0){


    // console.log(WCV_list);
    // console.log(WCV_list[0].innerHTML);
    // // Change below to "tipqic.org/" or "https://tipqic.org/" later
    // console.log("Base URL origin : "+WCV_list[0].baseURI.split("http://127.0.0.1:5500/")[1]);



    // For the page 'MEASURES AND PERFORMANCE MEASUREMENT'
    if(WCV_list[0].baseURI.split(domainBaseURL)[1] == 'measures.html'){

        let WCV_innerList=[];
        for(let i=0; i<WCV_list.length; i++){
            // SSD_innerList[i]=FUH_list[i].innerHTML;

            // body.URL = FUH_list[i].baseURI.split("http://127.0.0.1:5500/")[1];
            // body.text = FUH_list[i].innerHTML;

            WCV_innerList[i]={
                URL: WCV_list[i].baseURI.split(domainBaseURL)[1],
                text: WCV_list[i].innerHTML,
            };

        } // End of for loop

    
        localStorage.setItem("WCV_WORDS_MeasurePerformance", JSON.stringify(WCV_innerList));
    }


    // For the page 'YOUR PERFORMANCE'   !!! Later change to non local URL
    if(WCV_list[0].baseURI.split(domainBaseURL)[1] == 'dashboard.html'){

        let WCV_innerList=[];
        for(let i=0; i<WCV_list.length; i++){

            WCV_innerList[i]={
                URL: WCV_list[i].baseURI.split(domainBaseURL)[1],
                text: WCV_list[i].innerHTML,
            };

        } // End of for loop

    
        localStorage.setItem("WCV_WORDS_YourPerformance", JSON.stringify(WCV_innerList));
    }


    // For the page 'PERFORMANCE IMPROVEMENT'
    if(WCV_list[0].baseURI.split(domainBaseURL)[1] == 'perfimp.html'){

        let WCV_innerList=[];
        for(let i=0; i<WCV_list.length; i++){

            WCV_innerList[i]={
                URL: WCV_list[i].baseURI.split(domainBaseURL)[1],
                text: WCV_list[i].innerHTML,
            };

        } // End of for loop

    
        localStorage.setItem("WCV_WORDS_PerformanceImprovement", JSON.stringify(WCV_innerList));
    }


    // For the page 'QIC MEETINGS & CEU'
    if(WCV_list[0].baseURI.split(domainBaseURL)[1] == 'qic/qicarchive/pedsadulthospital.html'){

        let WCV_innerList=[];
        for(let i=0; i<WCV_list.length; i++){

            WCV_innerList[i]={
                URL: WCV_list[i].baseURI.split(domainBaseURL)[1],
                text: WCV_list[i].innerHTML,
            };

        } // End of for loop

    
        localStorage.setItem("WCV_WORDS_QIC_PA&H", JSON.stringify(WCV_innerList));
    }


    // For the page 'QI WORKGROUPS' ...add the 4 differemt URLs in if statement?
    if(WCV_list[0].baseURI.split(domainBaseURL)[1] == 'QIWorkgroups.html'){

        let WCV_innerList=[];
        for(let i=0; i<WCV_list.length; i++){

            WCV_innerList[i]={
                URL: WCV_list[i].baseURI.split(domainBaseURL)[1],
                text: WCV_list[i].innerHTML,
            };

        } // End of for loop

    
        localStorage.setItem("WCV_WORDS_QIWorkgroups", JSON.stringify(WCV_innerList));
    }


    // For the page 'FAQ' ...add the 4 differemt URLs in if statement?
    if(WCV_list[0].baseURI.split(domainBaseURL)[1] == 'faq.html'){

        let WCV_innerList=[];
        for(let i=0; i<WCV_list.length; i++){

            WCV_innerList[i]={
                URL: WCV_list[i].baseURI.split(domainBaseURL)[1],
                text: WCV_list[i].innerHTML,
            };

        } // End of for loop

    
        localStorage.setItem("WCV_WORDS_FAQ", JSON.stringify(WCV_innerList));
    }


}






// Function to list all occurences of dashboard based of class="dash"
let dash_list = document.getElementsByClassName("dash");

if(dash_list.length>0){


    // console.log(dash_list);
    // console.log(dash_list[0].innerHTML);
    // // Change below to "tipqic.org/" or "https://tipqic.org/" later
    // console.log("Base URL origin : "+dash_list[0].baseURI.split("http://127.0.0.1:5500/")[1]);



    // For the page 'MEASURES AND PERFORMANCE MEASUREMENT'
    if(dash_list[0].baseURI.split(domainBaseURL)[1] == 'measures.html'){

        let dash_innerList=[];
        for(let i=0; i<dash_list.length; i++){
            // SSD_innerList[i]=FUH_list[i].innerHTML;

            // body.URL = FUH_list[i].baseURI.split("http://127.0.0.1:5500/")[1];
            // body.text = FUH_list[i].innerHTML;

            dash_innerList[i]={
                URL: dash_list[i].baseURI.split(domainBaseURL)[1],
                text: dash_list[i].innerHTML,
            };

        } // End of for loop

    
        localStorage.setItem("dash_WORDS_MeasurePerformance", JSON.stringify(dash_innerList));
    }


    // For the page 'YOUR PERFORMANCE'   !!! Later change to non local URL
    if(dash_list[0].baseURI.split(domainBaseURL)[1] == 'dashboard.html'){

        let dash_innerList=[];
        for(let i=0; i<dash_list.length; i++){

            dash_innerList[i]={
                URL: dash_list[i].baseURI.split(domainBaseURL)[1],
                text: dash_list[i].innerHTML,
            };

        } // End of for loop

    
        localStorage.setItem("dash_WORDS_YourPerformance", JSON.stringify(dash_innerList));
    }


    // For the page 'PERFORMANCE IMPROVEMENT'
    if(dash_list[0].baseURI.split(domainBaseURL)[1] == 'perfimp.html'){

        let dash_innerList=[];
        for(let i=0; i<dash_list.length; i++){

            dash_innerList[i]={
                URL: dash_list[i].baseURI.split(domainBaseURL)[1],
                text: dash_list[i].innerHTML,
            };

        } // End of for loop

    
        localStorage.setItem("dash_WORDS_PerformanceImprovement", JSON.stringify(dash_innerList));
    }


    // For the page 'QIC MEETINGS & CEU'
    if(dash_list[0].baseURI.split(domainBaseURL)[1] == 'qic/qicarchive/pedsadulthospital.html'){

        let dash_innerList=[];
        for(let i=0; i<dash_list.length; i++){

            dash_innerList[i]={
                URL: dash_list[i].baseURI.split(domainBaseURL)[1],
                text: dash_list[i].innerHTML,
            };

        } // End of for loop

    
        localStorage.setItem("dash_WORDS_QIC_PA&H", JSON.stringify(dash_innerList));
    }


    // For the page 'QI WORKGROUPS' ...add the 4 differemt URLs in if statement?
    if(dash_list[0].baseURI.split(domainBaseURL)[1] == 'QIWorkgroups.html'){

        let dash_innerList=[];
        for(let i=0; i<dash_list.length; i++){

            dash_innerList[i]={
                URL: dash_list[i].baseURI.split(domainBaseURL)[1],
                text: dash_list[i].innerHTML,
            };

        } // End of for loop

    
        localStorage.setItem("dash_WORDS_QIWorkgroups", JSON.stringify(dash_innerList));
    }


    // For the page 'FAQ' ...add the 4 differemt URLs in if statement?
    if(dash_list[0].baseURI.split(domainBaseURL)[1] == 'faq.html'){

        let dash_innerList=[];
        for(let i=0; i<dash_list.length; i++){

            dash_innerList[i]={
                URL: dash_list[i].baseURI.split(domainBaseURL)[1],
                text: dash_list[i].innerHTML,
            };

        } // End of for loop

    
        localStorage.setItem("dash_WORDS_FAQ", JSON.stringify(dash_innerList));
    }


}