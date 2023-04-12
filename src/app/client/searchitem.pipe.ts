import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchitem'
})
export class SearchitemPipe implements PipeTransform {

  transform(listData: any[], keyword?: string): any[] {
    if (keyword) {
      keyword = keyword.toLowerCase()
      if (keyword == '') return listData;
      return listData.filter(data => {
        return data.name.toLowerCase().includes(keyword);
      })
    } else {
      return listData
    }
    // return list.filter((item) => {
    //   return item.name === keyword
    // })
  }

}
