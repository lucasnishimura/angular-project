import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  //esse  @Input é preciso para que o HMTL que está executando o FOR ache ele entre os componentes, importante lembrar que por padrão ele não vem importado, é preciso colocar ele no import no topo deste arquivo

  @Input('srvElement') element: {
    type: string,
    name: string,
    content: string
  };  //essa variável é criada para atribuir os valores de outro componente nela,sendo assim, consigo passar esses valores para o meu HTML deste component,sem precisar chumbar o conteudo do for
  //Interessante notar também que para não expormos nossa variável para todo o projetom, podemos criar um apelido para ela, passando um parâmetro no Input, agora, o front consegue encontrar pelo apelido, e não pelo nome

  constructor() { }

  ngOnInit() {
  }

}
