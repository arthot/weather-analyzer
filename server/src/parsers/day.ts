import { load } from 'cheerio'
import { requestPage } from 'src/utils/request'
import { Day } from 'src/common/day'

export function parse(cityId: number, year: number, month: number) {
    const url = `https://www.gismeteo.ru/diary/${cityId}/${year}/${month}/`;

    return requestPage(url)
        .then(page => {
            const $ = load(page);
            const nodes = $('div[id="data_block"] table>tbody>tr');

            return nodes.toArray().map(tr => {
                try {
                    const tds = $(tr).find('td');

                    if (!tds.length || tds.eq(1).html().includes('img/still')) return;

                    return new Day(
                        new Date(Date.UTC(year, month, parseInt(tds.eq(0).text()))).toISOString(),
                        parseFloat(tds.eq(1).text()),
                        tds.eq(3).html().includes('sun.png') ? 0 :
                            tds.eq(3).html().includes('sunc.png') ? 0.25 :
                                tds.eq(3).html().includes('suncl.png') ? 0.5 :
                                    tds.eq(3).html().includes('dull.png') ? 1 : 0.5,
                        !!tds.eq(4).html().trim(),
                        null,
                        cityId
                    );
                } catch (e) {
                    console.error(e, $(tr).html());
                }
            }).filter(d => d).sort((a, b) => a.date > b.date ? 1 : -1);
        });
}