import React from 'react';
import './menus.styles.scss';
import Table from 'react-bootstrap/Table';

class Menus extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
       menu:[
          {
            type: 'Entradas',
            menuList:[{
              name:'Brusqueta',
              value:['1,90€']
           },
           {
              name:'Cocktail Camarão',
              value:['4,10€']
            }]
          },{
            type: 'Saladas',
            menuList:
              [{
                name:'Salada mozzarella',
                value:['3,90€']
              },
              {
                name:'Salada mista',
                value:['4,90€']
              },{
                name:'Salada de frango',
                value:['5,90€']
              },{
                name:'Salada de atum',
                value:['5,90€']
              },{
                name:'Salada de sardinha',
                value:['5,50€']
              },{
                name:'Salada de camarão',
                value:['6,90€']
              },{
                name:'Salada de polvo',
                value:['6,90€']
              }]
          },{
            type: 'Massas',
            menuList:
              [{
                name:'Spaghetti bolonhesa',
                value:['4,50€','/6,80€']
              },
              {
                name:'Spaghetti xaramba',
                value:['4,90€','/7,20€']
              },{
                name:'Spaghetti com atum',
                value:['5,90€']
              },{
                name:'Spaghetti com marisco',
                value:['5,90€']
              },{
                name:'Spaghetti Carbonara',
                value:['5,50€']
              },{
                name:'Tagliatelle',
                value:['9,50€']
              },{
                name:'Pennoni com camarão',
                value:['10,90€']
              }]
          },{
            type: 'Pizzas',
            menuList:
              [{
                name:'Margarita',
                value:['5,90€','/7,90€']
              },
              {
                name:'Napoletana',
                value:['7,70€','/9,90€']
              },{
                name:'Christine',
                value:['6,90€','/9,80€']
              },{
                name:'Prosciutto',
                value:['6,50€','/8,90€']
              },{
                name:'Amalfi',
                value:['7,90€','/9,90€']
              },{
                name:'Stagioni',
                value:['7,70€','/9,90€']
              },{
                name:'Xaramba',
                value:['7,90€','/10,90€']
              },{
                name:'Celentano',
                value:['8,50€','/11,90€']
              },{
                name:'Prosciutto e Funghi',
                value:['6,80€','/9,70€']
              },{
                name:'Pescador',
                value:['9,90€','/12,90€']
              },{
                name:'Funghi',
                value:['6,50€','/8,90€']
              },{
                name:'Cacciatore',
                value:['7,90€','/10,50€']
              },{
                name:'Calzone',
                value:['6,90€','/9,80€']
              },{
                name:'Romana',
                value:['7,70€','/9,90€']
              },{
                name:'Vegetable',
                value:['7,50€','/9,90€']
              },{
                name:'Tonnara',
                value:['7,90€','/9,90€']
              },{
                name:'Belle Napoli',
                value:['6,80€','/8,90€']
              },{
                name:'Ananás',
                value:['6,50€','/8,90€']
              },{
                name:'Bolenhesa',
                value:['7,80€','/9,90€']
              },{
                name:'Camarão',
                value:['9,50€','/12,90€']
              },{
                name:'Salame/Bacon',
                value:['6,90€','/9,50€']
              },{
                name:'Marina',
                value:['7,90€','/10,70€']
              },{
                name:'Bacalhau',
                value:['7,90€','/10,90€']
              },{
                name:'Sardinha',
                value:['6,50€','/8,90€']
              },{
                name:'Salsicha',
                value:['6,50€','/8,90€']
              },{
                name:'Banana',
                value:['6,50€','/8,90€']
              },{
                name:'Camponesa',
                value:['7,50€','/9,90€']
              },{
                name:'Mariscos',
                value:['7,50€','/10,80€']
              },{
                name:'Presunto',
                value:['6,90€','/9,50€']
              },{
                name:'Chili',
                value:['7,90€','/9,90€']
              },{
                name:'Pizza de carne',
                value:['7,90€','/9,90€']
              },{
                name:'Pizza de salmão',
                value:['','10,90€']
              },{
                name:'Pizza de espada',
                value:['','10,90€']
              }]
          },{
            type: 'Extras',
            menuList:[{
              name:'Cebola, alho, ovo, natas',
              value:['0,80€']
           },
           {
              name:'Bolenhesa, alcaparras, anchovas, atum',
              value:['1,20€']
            },{
              name:'Fiamble, queijo, cogumelos, pimentos, milho doce, mariscos',
              value:['1,50€']
           },
           {
              name:'Frango, salame, carne, espargos, presunto, chili, bacon',
              value:['2,00€']
            },
            {
               name:'Bacalhau, camarão, polvo, salmão, espada',
               value:['3,00€']
             }]
          },{
            type: 'Sobremesas',
            menuList:[{
              name:'Sobremesa da casa',
              value:['2,50€']
           },
           {
              name:'Pêche melba',
              value:['3,20€']
            },{
              name:'Mousse de chocolate',
              value:['1,90€']
           },
           {
              name:'Pudim de maracujá',
              value:['1,50€']
            },
            {
               name:'Gelado da casa',
               value:['3,20€']
             },{
              name:'1 bola de gelado com chantily',
              value:['1,80€']
           },
           {
              name:'2 bolas de gelado com chantily',
              value:['2,30€']
            },{
              name:'3 bolas de gelado com chantily',
              value:['2,80€']
           },
           {
              name:'Vinho Madeira doce 5 anos',
              value:['2,50€']
            }]
          },{
            type: 'Bebidas',
            menuList:[{
                name:'Água com/sem gás 0,25cl',
                value:['1,10€']
              },{
                name:'Sumo de laranja natural 0,20cl',
                value:['1,70€']
              },{
                name:'Ice tea 0,33cl',
                value:['1,40€']
              },{
                name:'Coca-cola/ 7up / Limonada / Brisa',
                value:['1,50€']
              },{
                name:'Pesi-cola / Sumol 0,20cl',
                value:['1,20€']
              },{
                name:'Cerveja / Cerveja Tónica 0,33cl',
                value:['1,40€']
              },{
                name:'Imperial 0,33cl',
                value:['1,40€']
              },{
                name:'Vinhos(várias regiões) a copo',
                value:['2,50€']
              }]
          }
        ]
       }
    }

  render(){
    const tables = []; var rows=[];
    this.state.menu.forEach(function(menuEntry,i){
      
      menuEntry.menuList.forEach(function(food,ii){
        rows.push(<tr key={(ii+i).toString()}><td>{ii+1}</td><td>{food.name}</td><td>{food.value}</td></tr>)
      })
      
      tables.push(
        <div className="table-list" key={i.toString()}>
          <Table responsive > 
            <thead>
              <tr>
                <th>#</th>
                <th>{menuEntry.type}</th>
                <th>Preços</th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </Table>
        </div>
      )
      rows = [];
    })

    return (
      <div className="menus-gallery">
        {tables}
      </div>
    );
  }
}

export default Menus;