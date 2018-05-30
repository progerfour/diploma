function ChangeStructure(){  
    //alert("asdfasdf");
    switch(structure)
    {
        case "0":
        switch(language){
            case "0":
            components = [arrayComp,sumComp,maxComp,minComp, delComp,kolComp,srComp, sortComp];
            menu = new D3NE.ContextMenu({
                        'Массив' : arrayComp,
                        'Сумма': sumComp,
                        'Максимум': maxComp,
                        'Минимум':minComp,
                        'Удаление': delComp,
                        'Количество': kolComp,
                        'Среднее' : srComp,
                        'Сортировка':sortComp
               });

            break;
            case "1":
            components = [listCompProlog,sumCompProlog,maxCompProlog,minCompProlog, delCompProlog,kolCompProlog,srCompProlog, sortCompProlog];
            menu = new D3NE.ContextMenu({
                        'Список': listCompProlog, 
                        'Сумма': sumCompProlog,
                        'Максимум': maxCompProlog,
                        'Минимум':minCompProlog,
                        'Удаление': delCompProlog,
                        'Количество': kolCompProlog,
                        'Среднее' : srCompProlog,
                        'Сортировка':sortCompProlog
               });
            break;
            }
        break;

        case "1":
            components = [listComp, sumCompList];
            menu = new D3NE.ContextMenu({
                        'Список': listComp, 
                        'Сумма': sumCompList,
            });
        break;

        case "2": //строка
        components = [listComp, sumCompList];
            menu = new D3NE.ContextMenu({
                        'Список': listComp, 
                        'Сумма': sumCompList,
            });
        break;
        case "3": //Текстовый файл
        components = [listComp, sumCompList];
            menu = new D3NE.ContextMenu({
                        'Список': listComp, 
                        'Сумма': sumCompList,
            });
        break;
        case "4": //Бинарный файл
        components = [listComp, sumCompList];
            menu = new D3NE.ContextMenu({
                        'Список': listComp, 
                        'Сумма': sumCompList,
            });
        break;
        
    } 
    //alert("щас будет editor");
    container = document.querySelector('#d3ne');
    editor = new D3NE.NodeEditor('demo@0.1.0', container, components, menu);
}

var numSocket = new D3NE.Socket('number', 'Number value', 'hint');
var arraySocket = new D3NE.Socket('array', 'Array value', 'hint');
var listSocket = new  D3NE.Socket('list', 'List value', 'hint');

var numComp = new D3NE.Component("Число", {
    builder(node) {
       var numberOut = new D3NE.Output("Число", numSocket);
       /*var numControl = new D3NE.Control('<input type="string">',
          (el, c) => {
             el.value = c.getData('0') || "";
          
             function upd() {
                c.putData("0", el.value);
             }
 
             el.addEventListener("input", ()=>{
                upd();
                editor.eventListener.trigger("change");
             });
             el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
            upd();
          }
       );*/
        
       return node
        //.addControl(numControl)
        .addOutput(numberOut);
    },
 });

var arrayComp = new D3NE.Component('Массив',{
    builder(node) {
        node.nameFunction = "array_c";
        node.dataType = {0:"int*" ,1:"int"};
        node.describe = "mas_c_sum";
        var sizeOut = new D3NE.Output('Размерность', numSocket);
        var arrayOut = new D3NE.Output('Массив', arraySocket);
        var sizeControl = new D3NE.Control('<input type="string">',
          (el, c) => {
             el.value = c.getData('1') || "имя размерности";
          
             function upd() {
                c.putData("1", el.value);
             }
 
             el.addEventListener("input", ()=>{
                upd();
                editor.eventListener.trigger("change");
             });
             el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
            upd();
          }
       );
        var arrayControl = new D3NE.Control('<input type="string">',
        (el, c) => {
            el.value = c.getData('0') || "имя массива";
        
            function upd() {
                c.putData("0", el.value);
            }

            el.addEventListener("input", ()=>{
                upd();
                editor.eventListener.trigger("change");
            });
            el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
            upd();
        }
        );
        return node
                .addOutput(arrayOut)
                .addOutput(sizeOut)
                .addControl(arrayControl)
                .addControl(sizeControl);
                
    }});

var listComp = new D3NE.Component('Список',{
    builder(node) {
        var listOut = new D3NE.Output('Список', listSocket);
        var arrayControl = new D3NE.Control('<input type="string">',
            (el, c) => {
                el.value = c.getData('0') || "имя списка";
            
                function upd() {
                    c.putData("0", el.value);
                }
    
                el.addEventListener("input", ()=>{
                    upd();
                    editor.eventListener.trigger("change");
                });
                el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
                upd();
            }
        );
        return node
            .addOutput(listOut)
            .addControl(arrayControl);
 }});

 var listCompProlog = new D3NE.Component('Список',{
    builder(node) {
        node.nameFunction = "list_prolog";
        var listOut = new D3NE.Output('Список', listSocket);
        var arrayControl = new D3NE.Control('<input type="string">',
            (el, c) => {
                el.value = c.getData('0') || "имя списка";
            
                function upd() {
                    c.putData("0", el.value);
                }
    
                el.addEventListener("input", ()=>{
                    upd();
                    editor.eventListener.trigger("change");
                });
                el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
                upd();
            }
        );
        return node
            .addOutput(listOut)
            .addControl(arrayControl);
 }});

var sumComp = new D3NE.Component("Сумма", {
    builder(node) {
        node.nameFunction = "sum";
        node.dataType = {0:"int"};
        node.describe = "mas_c_sum";
  var sizeIn = new D3NE.Input("Размерность", numSocket);
  var arrayIn = new D3NE.Input("Массив", arraySocket);
  var resultOut = new D3NE.Output("Результат", numSocket);
  var resultControl = new D3NE.Control('<input type="string">',
        (el, c) => {
            el.value = c.getData('0') || "имя выходного значения";
        
            function upd() {
                c.putData("0", el.value);
            }

            el.addEventListener("input", ()=>{
                upd();
                editor.eventListener.trigger("change");
            });
            el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
            upd();
        }
    );

  return node
    .addInput(arrayIn)   
    .addInput(sizeIn)
     .addControl(resultControl)
     .addOutput(resultOut);
    }}); 

var sumCompProlog = new D3NE.Component("Сумма", {
    builder(node) {
        node.nameFunction = "sum";
        node.dataType = {0:"integer*", 1:"integer [out]"}
        node.describe = "list_prolog_sum";
        node.functionType = "determ";
  var listIn = new D3NE.Input("Список", listSocket);
  var resultOut = new D3NE.Output("Результат", numSocket);
  var resultControl = new D3NE.Control('<input type="string">',
        (el, c) => {
            el.value = c.getData('0') || "имя_выходного_значения";
        
            function upd() {
                c.putData("0", el.value);
            }

            el.addEventListener("input", ()=>{
                upd();
                editor.eventListener.trigger("change");
            });
            el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
            upd();
        }
    );
  return node
    .addInput(listIn)   
     .addControl(resultControl)
     .addOutput(resultOut);
    }}); 
var sumCompList = new D3NE.Component("Сумма", {
    builder(node) {
        node.nameFunction = "sum";
        node.dataType = {0:"int"};
        node.describe = "list_c_sum";
      var listIn = new D3NE.Input("Список", listSocket);
      var resultOut = new D3NE.Output("Результат", numSocket);
      var resultControl = new D3NE.Control('<input type="string">',
            (el, c) => {
                el.value = c.getData('0') || "имя выходного значения";
            
                function upd() {
                    c.putData("0", el.value);
                }
    
                el.addEventListener("input", ()=>{
                    upd();
                    editor.eventListener.trigger("change");
                });
                el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
                upd();
            }
        );
    
      return node
         .addInput(listIn)   
         .addControl(resultControl)
         .addOutput(resultOut);
    } 
    });

var maxComp = new D3NE.Component("Максимум", {
    builder(node) {
        node.nameFunction = "max";
        node.dataType = {0:"int"};
        node.describe = "mas_c_max";
      var sizeIn = new D3NE.Input("Размерность", numSocket);
      var arrayIn = new D3NE.Input("Массив", arraySocket);
      var resultOut = new D3NE.Output("Результат", numSocket);
      var resultControl = new D3NE.Control('<input type="string">',
      (el, c) => {
         el.value = c.getData('0') || "имя выходного значения";
      
         function upd() {
            c.putData("0", el.value);
         }

         el.addEventListener("input", ()=>{
            upd();
            editor.eventListener.trigger("change");
         });
         el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
        upd();
      }
   );
      return node
      .addInput(arrayIn)   
      .addInput(sizeIn)
         .addOutput(resultOut)
         .addControl(resultControl);
    }}); 

var maxCompProlog = new D3NE.Component("Максимум", {
    builder(node) {
        node.nameFunction = "max";
        node.dataType = {0:"integer",1:"integer [out]"};
        node.describe = "list_prolog_max";
        node.functionType = "nondeterm";
      var listIn = new D3NE.Input("Список", listSocket);
      var resultOut = new D3NE.Output("Результат", numSocket);
      var resultControl = new D3NE.Control('<input type="string">',
      (el, c) => {
         el.value = c.getData('0') || "имя выходного значения";
      
         function upd() {
            c.putData("0", el.value);
         }

         el.addEventListener("input", ()=>{
            upd();
            editor.eventListener.trigger("change");
         });
         el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
        upd();
      }
   );
      return node
      .addInput(listIn) 
         .addOutput(resultOut)
         .addControl(resultControl);
    }}); 

var minComp = new D3NE.Component("Минимум", {
    builder(node) {
        node.nameFunction = "min";
        node.dataType = {0:"int"};
        node.describe = "mas_c_min";
      var sizeIn = new D3NE.Input("Размерность", numSocket);
      var arrayIn = new D3NE.Input("Массив", arraySocket);
      var resultOut = new D3NE.Output("Результат", numSocket);
      var resultControl = new D3NE.Control('<input type="string">',
      (el, c) => {
         el.value = c.getData('0') || "имя выходного значения";
      
         function upd() {
            c.putData("0", el.value);
         }

         el.addEventListener("input", ()=>{
            upd();
            editor.eventListener.trigger("change");
         });
         el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
        upd();
      }
   );
      return node
      .addInput(arrayIn)   
      .addInput(sizeIn)
         .addOutput(resultOut)
         .addControl(resultControl);
    }});     

var minCompProlog = new D3NE.Component("Минимум", {
    builder(node) {
        node.nameFunction = "min";
        node.dataType = {0:"integer",1:"integer [out]"};
        node.describe = "list_prolog_min";
        node.functionType = "nondeterm";
        
      var listIn = new D3NE.Input("Список", listSocket);
      var resultOut = new D3NE.Output("Результат", numSocket);
      var resultControl = new D3NE.Control('<input type="string">',
      (el, c) => {
         el.value = c.getData('0') || "имя выходного значения";
      
         function upd() {
            c.putData("0", el.value);
         }

         el.addEventListener("input", ()=>{
            upd();
            editor.eventListener.trigger("change");
         });
         el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
        upd();
      }
   );
      return node
      .addInput(listIn) 
         .addOutput(resultOut)
         .addControl(resultControl);
    }}); 
var delComp = new D3NE.Component("Удаление", {  
    builder(node) {
        node.nameFunction = "del";
        node.dataType = {0:"int*", 1:"int"};
        node.describe = "mas_c_del";
      var sizeIn = new D3NE.Input("Размерность", numSocket);
      var arrayIn = new D3NE.Input("Массив", arraySocket);
      var elementIn = new D3NE.Input("Удаляемый элемент", numSocket);
      var sizeOut = new D3NE.Output("Новая размерность", numSocket);
      var arrayOut = new D3NE.Output("Новый массив", arraySocket);

      var sizeControl = new D3NE.Control('<input type="string">',
      (el, c) => {
         el.value = c.getData('1') || "имя новой размерности";
      
         function upd() {
            c.putData("1", el.value);
         }

         el.addEventListener("input", ()=>{
            upd();
            editor.eventListener.trigger("change");
         });
         el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
        upd();
      }
   );

   var arrayControl = new D3NE.Control('<input type="string">',
      (el, c) => {
         el.value = c.getData('0') || "имя нового массива";
      
         function upd() {
            c.putData("0", el.value);
         }

         el.addEventListener("input", ()=>{
            upd();
            editor.eventListener.trigger("change");
         });
         el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
        upd();
      }
   );

      return node
      .addInput(arrayIn)   
      .addInput(sizeIn)
         .addInput(elementIn)
         .addOutput(arrayOut)
         .addOutput(sizeOut)
         .addControl(arrayControl)
         .addControl(sizeControl)
         ;
    }});     

var delCompProlog = new D3NE.Component("Удаление", {
    builder(node) {
        node.nameFunction = "del";
        node.dataType = {0:"integer*", 1:"integer",2:"integer* [out]"};
        node.describe = "list_prolog_del";
        node.functionType = "determ";
      var listIn = new D3NE.Input("Список", listSocket);
      var elementIn = new D3NE.Input("Удаляемый элемент", numSocket);
      var resultOut = new D3NE.Output("Новый список", listSocket);
      var resultControl = new D3NE.Control('<input type="string">',
      (el, c) => {
         el.value = c.getData('0') || "имя нового списка";
      
         function upd() {
            c.putData("0", el.value);
         }

         el.addEventListener("input", ()=>{
            upd();
            editor.eventListener.trigger("change");
         });
         el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
        upd();
      }
   );
      return node
      .addInput(listIn) 
      .addInput(elementIn) 
         .addOutput(resultOut)
         .addControl(resultControl);
    }}); 

var kolComp = new D3NE.Component("Количество", {
    builder(node) {
        node.nameFunction = "kol";
        node.dataType = {0:"int"};
        node.describe = "mas_c_kol";
      var sizeIn = new D3NE.Input("Размерность", numSocket);
      var arrayIn = new D3NE.Input("Массив", arraySocket);
      var resultOut = new D3NE.Output("Результат", numSocket);
      var resultControl = new D3NE.Control('<input type="string">',
      (el, c) => {
         el.value = c.getData('0') || "имя выходного значения";
      
         function upd() {
            c.putData("0", el.value);
         }

         el.addEventListener("input", ()=>{
            upd();
            editor.eventListener.trigger("change");
         });
         el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
        upd();
      }
   );
      return node
      .addInput(arrayIn)   
      .addInput(sizeIn)
         .addOutput(resultOut)
         .addControl(resultControl);
    }});

var kolCompProlog = new D3NE.Component("Количество", {
    builder(node) {
        node.nameFunction = "kol";
        node.dataType = {0:"integer",1:"integer* [out]"};
        node.describe = "list_prolog_kol";
        node.functionType = "nondeterm";
      var listIn = new D3NE.Input("Список", listSocket);
      var resultOut = new D3NE.Output("Результат", numSocket);
      var resultControl = new D3NE.Control('<input type="string">',
      (el, c) => {
         el.value = c.getData('0') || "имя выходного значения";
      
         function upd() {
            c.putData("0", el.value);
         }

         el.addEventListener("input", ()=>{
            upd();
            editor.eventListener.trigger("change");
         });
         el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
        upd();
      }
   );
      return node
      .addInput(listIn) 
         .addOutput(resultOut)
         .addControl(resultControl);
    }});

var srComp = new D3NE.Component("Среднее", {
    builder(node) {
        node.nameFunction = "sra";
        node.dataType = {0:"int"};
        node.describe = "mas_c_sr";
      var sumIn = new D3NE.Input("Сумма", numSocket);
      var kolIn = new D3NE.Input("Количество", numSocket);
      var resultOut = new D3NE.Output("Результат", numSocket);
      var resultControl = new D3NE.Control('<input type="string">',
      (el, c) => {
         el.value = c.getData('0') || "имя выходного значения";
      
         function upd() {
            c.putData("0", el.value);
         }

         el.addEventListener("input", ()=>{
            upd();
            editor.eventListener.trigger("change");
         });
         el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
        upd();
      }
   );
      return node
      .addInput(sumIn)
      .addInput(kolIn)   
      .addOutput(resultOut)
      .addControl(resultControl);
    }});

var srCompProlog = new D3NE.Component("Среднее", {
    builder(node) {
        node.nameFunction = "sra";
        node.dataType = {0:"integer",1:"integer [out]"};
        node.describe = "list_prolog_sr";
        node.functionType = "nondeterm";
      var sumIn = new D3NE.Input("Сумма", numSocket);
      var kolIn = new D3NE.Input("Количество", numSocket);
      var resultOut = new D3NE.Output("Результат", numSocket);
      var resultControl = new D3NE.Control('<input type="string">',
      (el, c) => {
         el.value = c.getData('0') || "имя выходного значения";
      
         function upd() {
            c.putData("0", el.value);
         }

         el.addEventListener("input", ()=>{
            upd();
            editor.eventListener.trigger("change");
         });
         el.addEventListener("mousedown", function(e){e.stopPropagation()});// prevent node movement when selecting text in the input field
        upd();
      }
   );
      return node
      .addInput(sumIn) 
      .addInput(kolIn) 
         .addOutput(resultOut)
         .addControl(resultControl);
    }});

var sortComp = new D3NE.Component("Сортировка", {
    builder(node) {
        node.nameFunction = "bubbleSort";
        node.describe = "mas_c_sort";
      var sizeIn = new D3NE.Input("Размерность", numSocket);
      var arrayIn = new D3NE.Input("Массив", arraySocket);
      var sizeOut = new D3NE.Output("Размерность", numSocket);
      var arrayOut = new D3NE.Output("Массив", arraySocket);
      function upd() {
          var inputmas = node.toJSON().inputs[0].connections[0];
          var inputsize = node.toJSON().inputs[1].connections[0];
          var nodes = editor.toJSON().nodes;
        node.data[0] = nodes[inputmas.node].data[inputmas.output];
        node.data[1] = nodes[inputsize.node].data[inputsize.output];
     }  
      return node
      .addInput(arrayIn)   
      .addInput(sizeIn)
      .addOutput(arrayOut)   
      .addOutput(sizeOut);
    }});

var sortCompProlog = new D3NE.Component("Сортировка", {
    builder(node) {
        node.nameFunction = "bubbleSort";
        node.describe = "list_prolog_sort";
        node.dataType = {0:"integer*",1:"integer* [out]"};
        node.functionType = "determ";
      var listIn = new D3NE.Input("Список", listSocket);
      var listOut = new D3NE.Output("Cписок", listSocket); 
      return node
      .addInput(listIn)   
      .addOutput(listOut);
    }});

var url = new URL(window.location.href);
var language = url.searchParams.get("language");
var structure = url.searchParams.get("structure");
if (language == null || structure == null)
{
    language = "0";
    structure = "0";
}
objSel = document.getElementById("Combobox");

switch(language)
{
    
        case "0":
        //alert("вот этот свитч");
        objSel.options.length = 0;
        objSel.options[0] = new Option("Массив","0");
        objSel.options[1] = new Option("Список","1");
        objSel.options[2] = new Option("Строка","2");
        objSel.options[3] = new Option("Текстовый файл","3");
        objSel.options[4] = new Option("Бинарный файл","4");
        
        ChangeStructure();
        break;
        case "1":
        objSel.options.length = 0;
        objSel.options[0] = new Option("Список","0");
        structure = "0";
        ChangeStructure();
        break;
        case "2": 
        objSel.options.length = 0;
        objSel.options[0] = new Option("Массив","0");
        objSel.options[1] = new Option("Список","1");
        objSel.options[2] = new Option("Строка","2");
        objSel.options[3] = new Option("Текстовый файл","3");
        objSel.options[4] = new Option("Бинарный файл","4");
        ChangeStructure();
        break;
    }
$("#Change-Language").val(language);
$("#Combobox").val(structure);



