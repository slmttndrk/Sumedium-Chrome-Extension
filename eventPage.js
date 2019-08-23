chrome.browserAction.onClicked.addListener(function(tab) {
    const executeScripts = (tabId, scripts) => {
        return new Promise((resolve, reject) => {
          try {
            if (scripts.length && scripts.length > 0) {
              const execute = (index = 0) => {
                chrome.tabs.executeScript(tabId, scripts[index], () => {
                  const newIndex = index + 1;
                  if (scripts[newIndex]) {
                    execute(newIndex);
                  } else {
                    resolve();
                  }
                });
              }
              execute();
            } else {
              throw new Error('scripts(array) undefined or empty');
            }
          } catch (err) {
            reject(err);
          }
        });
    };

    executeScripts(
        null, 
        [
          { file: "jquery-3.4.1.min.js" }, 
          { code: `
          var a = document.body;
          var b = a.getElementsByTagName("ARTICLE");
          
          var c = b[0].getElementsByTagName("P");
          var li = b[0].getElementsByTagName("LI");
  
          var p_text = [];
          var li_text = [];
          
          for (var i = 0; i < c.length; i++) { 
            p_text[i] = c[i].textContent;
          }
          
          for (var i = 0; i < li.length; i++) { 
            p_text.push(li[i].textContent);
          }
          
          joined_text  = p_text.join(' ');
          
          var splitted_result_text = [];

         $.ajax({
          type: "POST",
          url: "text-summarizer_url",
          data : {
            'text': joined_text,
            'apikey': 'text-summarizer_apikey'
          },
          success: function(data){
            result_text = data.result;
            
            splitted_result_text = result_text.split("!").join(".").split("…").join(".").split(".");
            
            /*
            alert(splitted_result_text.length);
            for(var j = 0; j<splitted_result_text.length; j++){
              alert(splitted_result_text[j]);
            }
            */

            function doSearch(text, backgroundColor) {
              if (window.find && window.getSelection) {
                  document.designMode = "on";
                  var sel = window.getSelection();
                  sel.collapse(document.body, 0);
          
                  while (window.find(text)) {
                      document.execCommand("HiliteColor", false, backgroundColor);
                      sel.collapseToEnd();
                  }
                  document.designMode = "off";
              }
            }

            for(var j = 0; j<splitted_result_text.length; j++){
              doSearch(splitted_result_text[j].trim(),"yellow");
            }
            
          },
          error: function(msg){
            alert(msg);
          }	
          });
          console.log("***SumediuM***");
        ` 
        }
        ]
      ).then(() => {
        })
});
