export const okResul1 = `
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html>
<head>
	<title>GISMETEO.RU: Gismeteo.Дневник: Дневник погоды в Минске за Сентябрь 2019 г. Архив погоды за за Сентябрь 2019 г. по г. Минск, Минск, Беларусь</title>
	<meta name="Author" content="gismeteo">
	<meta name="description" content="Дневник фактических данных погоды в Минске, Сентябрь 2019 г. для школьников.">
	<meta name="keywords" content="фактическая погода в Минске, фактические данные, дневник погоды в Минске, дневник, дневник погоды, архив, архив погоды, архив погоды по г. Минск, Сентябрь, 2019, школьник, ученик, дневник погоды для школьников, дневник наблюдений за погодой, погодный дневник.">
	<link rel="shortcut icon" type="image/ico" href="//st7.gismeteo.ru/favicon2.ico" />
	<link rel="icon" type="image/ico" href="//st7.gismeteo.ru/favicon2.ico" />
	<script src="https://yastatic.net/pcode/adfox/loader.js"></script>
	<script type="text/javascript" src="//st7.gismeteo.ru/static/js/jquery-1.4.2.min.js?f3f8c"></script>
	<script type="text/javascript" src="//st6.gismeteo.ru/static/js/classes/Gis.class.js?f3f8c"></script>
	<script type="text/javascript" src="//st4.gismeteo.ru/static/js/classes/Site.class.js?f3f8c"></script>
	<script type="text/javascript" src="//st6.gismeteo.ru/static/js/common.js?f3f8c"></script>
	<script type="text/javascript" src="//st8.gismeteo.ru/static/js/gis.adfox.js?f3f8c"></script>
	<link rel="stylesheet" type="text/css" href="//st8.gismeteo.ru/static/diary/css/common.css?f3f8c"  />
	<link rel="stylesheet" type="text/css" href="//st8.gismeteo.ru/static/diary/css/screen.css?f3f8c" media="screen"  />
	<link rel="stylesheet" type="text/css" href="//st7.gismeteo.ru/static/diary/css/print_bw.css?f3f8c" media="print"  />
	<link rel="stylesheet" type="text/css" href="//st8.gismeteo.ru/static/diary/css/print_color.css?f3f8c" media="print"  />

		<!--[if lt IE 8]><style type="text/css">
			img.png, div.png { behavior: url(./static/diary/css/iepngfix_v2/iepngfix.htc) }
		</style><![endif]-->
	<script type="text/javascript" src="//st6.gismeteo.ru/static/diary/css/iepngfix_v2/iepngfix_tilebg.js?f3f8c"></script>
		<script type="text/javascript">
			var default_args = {"region": "367", "country": "156", "distr": "all", "city": "4368"};
			var currentTime = new Date()
			default_args.month = currentTime.getMonth() + 1;
			default_args.year = currentTime.getFullYear();
			function choosePrintStyle(mode)
			{
				if(mode=='color') {
					$('body').removeClass('pr_bw').addClass('pr_color');
				}
				else{
					$('body').removeClass('pr_color').addClass('pr_bw');
				}
				window.print();
			}
			function setTownParam(id, name, n){
				$('city_id').value = id;
			}
			function setCookie (name, value, expires, path, domain, secure) {
				document.cookie = name + "=" + escape(value) +
						((expires) ? "; expires=" + expires : "") +
						((path) ? "; path=" + path : "") +
						((domain) ? "; domain=" + domain : "") +
						((secure) ? "; secure" : "");
			}
			function getCookie(name) {
				var cookie = " " + document.cookie;
				var search = " " + name + "=";
				var setStr = null;
				var offset = 0;
				var end = 0;
				if (cookie.length > 0) {
					offset = cookie.indexOf(search);
					if (offset != -1) {
						offset += search.length;
						end = cookie.indexOf(";", offset)
						if (end == -1) {
							end = cookie.length;
						}
						setStr = unescape(cookie.substring(offset, end));
					}
				}
				return(setStr);
			}
		</script>

</head>
<body>
<div id=pre-container>
	<div id=post-container>
		<div id=container>
			<div id=site_header>
				<div id="header">
<div class="top"></div><div class="bottom"></div>
<a href="//www.gismeteo.ru" id="logo" class="logo" title="Gismeteo.Ru Прогноз погоды."></a>
	<div class="bnr" id="weather-top"><!-- Gismeteo Adfox banner TOP -->
<script type="text/javascript">
    new adfox({
        id : "weather-top",
        slot: "top",
        targeting : {pt:'b',pp:'g',ps:'dlyj',p2:'fckw',pct:'c',puid18:'gismeteo_ru_old_desktop',puid1:12,puid2:'sun',puid3:4368,puid4:156,puid5:477,puid6:4146,puid18:'gismeteo_ru_old_desktop'}
});
</script></div>
</div>				<div id="mainMenu">
	<ul>
		<li class="tt"><a href="/"><i>Главная</i></a></li>
		<li class="tt"><a href="//www.gismeteo.ru/map/catalog/"><i>Карты</i></a></li>
		<li class="tt"><a href="//www.gismeteo.ru/news/"><i>Новости</i></a></li>
		<li class="tt"><a href="/month/4248/"><i>Месяц</i></a></li>
		<li class="tt"><a href="//www.gismeteo.ru/informers/"><i>Информеры</i></a></li>
		<li class="tt"><a href="//www.gismeteo.ru/soft/"><i>Приложения</i></a></li>
		<li class="Last"><a href="//www.gismeteo.ru/catalog/"><i>Поиск</i></a></li>
	</ul>
</div>			</div>
			<div id=user_details>
				<div>
					<div class=typed>Ученик(ца)</div><div class='underline short'></div><div class=typed>класса</div><div class='underline short'></div><div class=typed>школы</div><div class='underline long1'></div>
					<div class=clear></div>
				</div>
				<div class=clear></div>
				<div>
					<div class=typed>ФИО</div><div class='underline long2'></div>
					<div class=clear></div>
				</div>
				<div class=clear></div>
				<div class=header>
					Минск, сентябрь 2019
				</div>
				<div class=clear></div>
			</div>
			<div class=clear></div>
			<div id=main_field>
				<div class=header_row>
					<div id=parameters>
						<form>
							<div id=selector>
																<div id=selector_block1><div>
			   					<label for=sd_country>Выберите страну:</label><br /><select name="sd_country" id=sd_country class=selector_select></select>
		   					</div></div>
		  					<div id=selector_block2><div>
			   					<label for=sd_distr>Выберите область:</label><br /><select name="sd_distr" id=sd_distr class=selector_select></select><br />
			  					<label for=sd_city>Выберите город:</label><br /><select name="sd_city" id=sd_city class=selector_select></select>
		   					</div></div>
								<div id=selector_block3><div>
								<label for=date_Month>Выберите месяц:</label><br />
																	<select name="Month" id=date_Month onchange="site.selector.refreshDate();">
<option label="Январь" value="01">Январь</option>
<option label="Февраль" value="02">Февраль</option>
<option label="Март" value="03">Март</option>
<option label="Апрель" value="04">Апрель</option>
<option label="Май" value="05">Май</option>
<option label="Июнь" value="06">Июнь</option>
<option label="Июль" value="07">Июль</option>
<option label="Август" value="08">Август</option>
<option label="Сентябрь" value="09" selected="selected">Сентябрь</option>
<option label="Октябрь" value="10">Октябрь</option>
<option label="Ноябрь" value="11">Ноябрь</option>
<option label="Декабрь" value="12">Декабрь</option>
</select>
<select name="Year" id=date_Year onchange="site.selector.refreshDate();">
<option label="1997" value="1997">1997</option>
<option label="1998" value="1998">1998</option>
<option label="1999" value="1999">1999</option>
<option label="2000" value="2000">2000</option>
<option label="2001" value="2001">2001</option>
<option label="2002" value="2002">2002</option>
<option label="2003" value="2003">2003</option>
<option label="2004" value="2004">2004</option>
<option label="2005" value="2005">2005</option>
<option label="2006" value="2006">2006</option>
<option label="2007" value="2007">2007</option>
<option label="2008" value="2008">2008</option>
<option label="2009" value="2009">2009</option>
<option label="2010" value="2010">2010</option>
<option label="2011" value="2011">2011</option>
<option label="2012" value="2012">2012</option>
<option label="2013" value="2013">2013</option>
<option label="2014" value="2014">2014</option>
<option label="2015" value="2015">2015</option>
<option label="2016" value="2016">2016</option>
<option label="2017" value="2017">2017</option>
<option label="2018" value="2018">2018</option>
<option label="2019" value="2019" selected="selected">2019</option>
<option label="2020" value="2020">2020</option>
</select>
																<button id=selector_go_btn>Получить дневник</button>
							</div></div>
					<div class=clear></div>
				</div>

					<input type=hidden id="city_id" name="city_id" value="">
				<script type="text/javascript" src="//st4.gismeteo.ru/static/js/classes/Selector.class.js?f3f8c"></script>
				<script type="text/javascript">
					jQuery(function($){
// $(window).bind('load', function($){
						site.selector = new Selector();
						site.selector.init({submit_btn:'selector_go_btn', selectors:{country:'sd_country', district:'sd_distr', city:'sd_city', year:'date_Year', month:'date_Month'}, data:{country:19, district:341, city:4368, year:2019, month:09}});
					});
				</script>

				</form>
			</div>
			<div id=logo></div>
			<div class=clear></div>
		</div>
		<div class=clear></div>
		<div class=container>
			<div id=top_shadow class=png></div>
			<div class='cover png'>
				<div id=page>
					<div id=page_content>
						<div id=data_block>
															<div id=page_header>
									<div id="page_title"><h1> Дневник погоды в Минске за Сентябрь 2019 г.</h1></div>
									<div id=page_print_icons>печатная версия:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="./" onclick="choosePrintStyle('color');return false;"><img src=//st4.gismeteo.ru/static/diary/img/printer_color.gif border=0 hspace=5 align=absmiddle />цветная</a>&nbsp;&nbsp;&nbsp;<a href="./" onclick="choosePrintStyle('bw');return false;"><img src=//st5.gismeteo.ru/static/diary/img/printer_bw.gif border=0 hspace=5 align=absmiddle />ч/б</a></div>
								</div>
								<div class=clear></div>
								<table align=center valign=top border=0>
									<tr>
										<th class='first_row first' rowspan=2>Число</th>
										<th class='first_row first_in_group' colspan=5><label>День</label></th>
										<th class='first_row first_in_group last' colspan=5><label>Вечер</label></th>
									</tr>
									<tr>
										<th class=first_in_group>Температура</th>
										<th>Давление</th>
										<th>Облачность</th>
										<th>Явления</th>
										<th>Ветер</th>
										<th class=first_in_group>Температура</th>
										<th>Давление</th>
										<th>Облачность</th>
										<th>Явления</th>
										<th class=last>Ветер</th>
									</tr>
									<tbody>
																																							<tr align="center">
											<td class=first>1</td>
																							<td class='first_in_group positive'>+20</td>
												<td>743</td>
												<td><img src=//st6.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st7.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st8.gismeteo.ru/static/diary/img/w1.gif" class='screen_icon' /><img src="//st4.gismeteo.ru/static/diary/img/w1-bw.gif" class='print_icon' /><br />СВ 2м/с</span></td>
																																		<td class='first_in_group positive'>+14</td>
												<td>743</td>
												<td><img src=//st5.gismeteo.ru/static/diary/img/sun.png class='label_icon label_small screen_icon' /><img src=//st6.gismeteo.ru/static/diary/img/sun-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st7.gismeteo.ru/static/diary/img/w1.gif" class='screen_icon' /><img src="//st8.gismeteo.ru/static/diary/img/w1-bw.gif" class='print_icon' /><br />СВ 2м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>2</td>
																							<td class='first_in_group positive'>+25</td>
												<td>740</td>
												<td><img src=//st4.gismeteo.ru/static/diary/img/suncl.png class='label_icon label_small screen_icon' /><img src=//st5.gismeteo.ru/static/diary/img/suncl-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st6.gismeteo.ru/static/diary/img/w4.gif" class='screen_icon' /><img src="//st7.gismeteo.ru/static/diary/img/w4-bw.gif" class='print_icon' /><br />Ю 3м/с</span></td>
																																		<td class='first_in_group positive'>+17</td>
												<td>740</td>
												<td><img src=//st8.gismeteo.ru/static/diary/img/sun.png class='label_icon label_small screen_icon' /><img src=//st4.gismeteo.ru/static/diary/img/sun-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st5.gismeteo.ru/static/diary/img/w4.gif" class='screen_icon' /><img src="//st6.gismeteo.ru/static/diary/img/w4-bw.gif" class='print_icon' /><br />Ю 3м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>3</td>
																							<td class='first_in_group positive'>+14</td>
												<td>743</td>
												<td><img src=//st7.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st8.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st4.gismeteo.ru/static/diary/img/w0.gif" class='screen_icon' /><img src="//st5.gismeteo.ru/static/diary/img/w0-bw.gif" class='print_icon' /><br />С 3м/с</span></td>
																																		<td class='first_in_group positive'>+12</td>
												<td>743</td>
												<td><img src=//st6.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st7.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td><img src=//st8.gismeteo.ru/static/diary/img/rain.png class='label_icon label_small screen_icon' /><img src=//st4.gismeteo.ru/static/diary/img/rain-bw.png class='label_icon label_small print_icon' /></td>
												<td><span><img src="//st5.gismeteo.ru/static/diary/img/w0.gif" class='screen_icon' /><img src="//st6.gismeteo.ru/static/diary/img/w0-bw.gif" class='print_icon' /><br />С 3м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>4</td>
																							<td class='first_in_group positive'>+20</td>
												<td>743</td>
												<td><img src=//st7.gismeteo.ru/static/diary/img/suncl.png class='label_icon label_small screen_icon' /><img src=//st8.gismeteo.ru/static/diary/img/suncl-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st4.gismeteo.ru/static/diary/img/w6.gif" class='screen_icon' /><img src="//st5.gismeteo.ru/static/diary/img/w6-bw.gif" class='print_icon' /><br />З 3м/с</span></td>
																																		<td class='first_in_group positive'>+12</td>
												<td>743</td>
												<td><img src=//st6.gismeteo.ru/static/diary/img/sun.png class='label_icon label_small screen_icon' /><img src=//st7.gismeteo.ru/static/diary/img/sun-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st8.gismeteo.ru/static/diary/img/w6.gif" class='screen_icon' /><img src="//st4.gismeteo.ru/static/diary/img/w6-bw.gif" class='print_icon' /><br />З 3м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>5</td>
																							<td class='first_in_group positive'>+21</td>
												<td>742</td>
												<td><img src=//st5.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st6.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st7.gismeteo.ru/static/diary/img/w4.gif" class='screen_icon' /><img src="//st8.gismeteo.ru/static/diary/img/w4-bw.gif" class='print_icon' /><br />Ю 2м/с</span></td>
																																		<td class='first_in_group positive'>+13</td>
												<td>742</td>
												<td><img src=//st4.gismeteo.ru/static/diary/img/sunc.png class='label_icon label_small screen_icon' /><img src=//st5.gismeteo.ru/static/diary/img/sunc-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st6.gismeteo.ru/static/diary/img/w4.gif" class='screen_icon' /><img src="//st7.gismeteo.ru/static/diary/img/w4-bw.gif" class='print_icon' /><br />Ю 2м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>6</td>
																							<td class='first_in_group positive'>+17</td>
												<td>745</td>
												<td><img src=//st8.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st4.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st5.gismeteo.ru/static/diary/img/w0.gif" class='screen_icon' /><img src="//st6.gismeteo.ru/static/diary/img/w0-bw.gif" class='print_icon' /><br />С 2м/с</span></td>
																																		<td class='first_in_group positive'>+13</td>
												<td>746</td>
												<td><img src=//st7.gismeteo.ru/static/diary/img/sunc.png class='label_icon label_small screen_icon' /><img src=//st8.gismeteo.ru/static/diary/img/sunc-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st4.gismeteo.ru/static/diary/img/w0.gif" class='screen_icon' /><img src="//st5.gismeteo.ru/static/diary/img/w0-bw.gif" class='print_icon' /><br />С 2м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>7</td>
																							<td class='first_in_group positive'>+21</td>
												<td>747</td>
												<td><img src=//st6.gismeteo.ru/static/diary/img/sunc.png class='label_icon label_small screen_icon' /><img src=//st7.gismeteo.ru/static/diary/img/sunc-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st8.gismeteo.ru/static/diary/img/w2.gif" class='screen_icon' /><img src="//st4.gismeteo.ru/static/diary/img/w2-bw.gif" class='print_icon' /><br />В 3м/с</span></td>
																																		<td class='first_in_group positive'>+15</td>
												<td>747</td>
												<td><img src=//st5.gismeteo.ru/static/diary/img/suncl.png class='label_icon label_small screen_icon' /><img src=//st6.gismeteo.ru/static/diary/img/suncl-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st7.gismeteo.ru/static/diary/img/w2.gif" class='screen_icon' /><img src="//st8.gismeteo.ru/static/diary/img/w2-bw.gif" class='print_icon' /><br />В 3м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>8</td>
																							<td class='first_in_group positive'>+25</td>
												<td>746</td>
												<td><img src=//st4.gismeteo.ru/static/diary/img/suncl.png class='label_icon label_small screen_icon' /><img src=//st5.gismeteo.ru/static/diary/img/suncl-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st6.gismeteo.ru/static/diary/img/w2.gif" class='screen_icon' /><img src="//st7.gismeteo.ru/static/diary/img/w2-bw.gif" class='print_icon' /><br />В 3м/с</span></td>
																																		<td class='first_in_group positive'>+21</td>
												<td>746</td>
												<td><img src=//st8.gismeteo.ru/static/diary/img/suncl.png class='label_icon label_small screen_icon' /><img src=//st4.gismeteo.ru/static/diary/img/suncl-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st5.gismeteo.ru/static/diary/img/w2.gif" class='screen_icon' /><img src="//st6.gismeteo.ru/static/diary/img/w2-bw.gif" class='print_icon' /><br />В 3м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>9</td>
																							<td class='first_in_group positive'>+27</td>
												<td>746</td>
												<td><img src=//st7.gismeteo.ru/static/diary/img/sun.png class='label_icon label_small screen_icon' /><img src=//st8.gismeteo.ru/static/diary/img/sun-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st4.gismeteo.ru/static/diary/img/w4.gif" class='screen_icon' /><img src="//st5.gismeteo.ru/static/diary/img/w4-bw.gif" class='print_icon' /><br />Ю 4м/с</span></td>
																																		<td class='first_in_group positive'>+20</td>
												<td>746</td>
												<td><img src=//st6.gismeteo.ru/static/diary/img/sun.png class='label_icon label_small screen_icon' /><img src=//st7.gismeteo.ru/static/diary/img/sun-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st8.gismeteo.ru/static/diary/img/w4.gif" class='screen_icon' /><img src="//st4.gismeteo.ru/static/diary/img/w4-bw.gif" class='print_icon' /><br />Ю 4м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>10</td>
																							<td class='first_in_group positive'>+26</td>
												<td>746</td>
												<td><img src=//st5.gismeteo.ru/static/diary/img/sun.png class='label_icon label_small screen_icon' /><img src=//st6.gismeteo.ru/static/diary/img/sun-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st7.gismeteo.ru/static/diary/img/w4.gif" class='screen_icon' /><img src="//st8.gismeteo.ru/static/diary/img/w4-bw.gif" class='print_icon' /><br />Ю 5м/с</span></td>
																																		<td class='first_in_group positive'>+15</td>
												<td>746</td>
												<td><img src=//st4.gismeteo.ru/static/diary/img/suncl.png class='label_icon label_small screen_icon' /><img src=//st5.gismeteo.ru/static/diary/img/suncl-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st6.gismeteo.ru/static/diary/img/w4.gif" class='screen_icon' /><img src="//st7.gismeteo.ru/static/diary/img/w4-bw.gif" class='print_icon' /><br />Ю 5м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>11</td>
																							<td class='first_in_group positive'>+23</td>
												<td>749</td>
												<td><img src=//st8.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st4.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st5.gismeteo.ru/static/diary/img/w5.gif" class='screen_icon' /><img src="//st6.gismeteo.ru/static/diary/img/w5-bw.gif" class='print_icon' /><br />ЮЗ 3м/с</span></td>
																																		<td class='first_in_group positive'>+14</td>
												<td>749</td>
												<td><img src=//st7.gismeteo.ru/static/diary/img/sunc.png class='label_icon label_small screen_icon' /><img src=//st8.gismeteo.ru/static/diary/img/sunc-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st4.gismeteo.ru/static/diary/img/w5.gif" class='screen_icon' /><img src="//st5.gismeteo.ru/static/diary/img/w5-bw.gif" class='print_icon' /><br />ЮЗ 3м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>12</td>
																							<td class='first_in_group positive'>+24</td>
												<td>748</td>
												<td><img src=//st6.gismeteo.ru/static/diary/img/suncl.png class='label_icon label_small screen_icon' /><img src=//st7.gismeteo.ru/static/diary/img/suncl-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st8.gismeteo.ru/static/diary/img/w5.gif" class='screen_icon' /><img src="//st4.gismeteo.ru/static/diary/img/w5-bw.gif" class='print_icon' /><br />ЮЗ 3м/с</span></td>
																																		<td class='first_in_group positive'>+15</td>
												<td>748</td>
												<td><img src=//st5.gismeteo.ru/static/diary/img/sun.png class='label_icon label_small screen_icon' /><img src=//st6.gismeteo.ru/static/diary/img/sun-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st7.gismeteo.ru/static/diary/img/w5.gif" class='screen_icon' /><img src="//st8.gismeteo.ru/static/diary/img/w5-bw.gif" class='print_icon' /><br />ЮЗ 3м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>13</td>
																							<td class='first_in_group positive'>+20</td>
												<td>746</td>
												<td><img src=//st4.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st5.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st6.gismeteo.ru/static/diary/img/w6.gif" class='screen_icon' /><img src="//st7.gismeteo.ru/static/diary/img/w6-bw.gif" class='print_icon' /><br />З 5м/с</span></td>
																																		<td class='first_in_group positive'>+18</td>
												<td>743</td>
												<td><img src=//st8.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st4.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st5.gismeteo.ru/static/diary/img/w6.gif" class='screen_icon' /><img src="//st6.gismeteo.ru/static/diary/img/w6-bw.gif" class='print_icon' /><br />З 5м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>14</td>
																							<td class='first_in_group positive'>+18</td>
												<td>747</td>
												<td><img src=//st7.gismeteo.ru/static/diary/img/suncl.png class='label_icon label_small screen_icon' /><img src=//st8.gismeteo.ru/static/diary/img/suncl-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st4.gismeteo.ru/static/diary/img/w6.gif" class='screen_icon' /><img src="//st5.gismeteo.ru/static/diary/img/w6-bw.gif" class='print_icon' /><br />З 4м/с</span></td>
																																		<td class='first_in_group positive'>+13</td>
												<td>747</td>
												<td><img src=//st6.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st7.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st8.gismeteo.ru/static/diary/img/w6.gif" class='screen_icon' /><img src="//st4.gismeteo.ru/static/diary/img/w6-bw.gif" class='print_icon' /><br />З 4м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>15</td>
																							<td class='first_in_group positive'>+15</td>
												<td>741</td>
												<td><img src=//st5.gismeteo.ru/static/diary/img/suncl.png class='label_icon label_small screen_icon' /><img src=//st6.gismeteo.ru/static/diary/img/suncl-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st7.gismeteo.ru/static/diary/img/w5.gif" class='screen_icon' /><img src="//st8.gismeteo.ru/static/diary/img/w5-bw.gif" class='print_icon' /><br />ЮЗ 5м/с</span></td>
																																		<td class='first_in_group positive'>+16</td>
												<td>737</td>
												<td><img src=//st4.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st5.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st6.gismeteo.ru/static/diary/img/w5.gif" class='screen_icon' /><img src="//st7.gismeteo.ru/static/diary/img/w5-bw.gif" class='print_icon' /><br />ЮЗ 5м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>16</td>
																							<td class='first_in_group positive'>+16</td>
												<td>734</td>
												<td><img src=//st8.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st4.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st5.gismeteo.ru/static/diary/img/w6.gif" class='screen_icon' /><img src="//st6.gismeteo.ru/static/diary/img/w6-bw.gif" class='print_icon' /><br />З 5м/с</span></td>
																																		<td class='first_in_group positive'>+13</td>
												<td>734</td>
												<td><img src=//st7.gismeteo.ru/static/diary/img/sun.png class='label_icon label_small screen_icon' /><img src=//st8.gismeteo.ru/static/diary/img/sun-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st4.gismeteo.ru/static/diary/img/w6.gif" class='screen_icon' /><img src="//st5.gismeteo.ru/static/diary/img/w6-bw.gif" class='print_icon' /><br />З 5м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>17</td>
																							<td class='first_in_group positive'>+14</td>
												<td>733</td>
												<td><img src=//st6.gismeteo.ru/static/diary/img/sunc.png class='label_icon label_small screen_icon' /><img src=//st7.gismeteo.ru/static/diary/img/sunc-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st8.gismeteo.ru/static/diary/img/w6.gif" class='screen_icon' /><img src="//st4.gismeteo.ru/static/diary/img/w6-bw.gif" class='print_icon' /><br />З 5м/с</span></td>
																																		<td class='first_in_group positive'>+9</td>
												<td>731</td>
												<td><img src=//st5.gismeteo.ru/static/diary/img/suncl.png class='label_icon label_small screen_icon' /><img src=//st6.gismeteo.ru/static/diary/img/suncl-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st7.gismeteo.ru/static/diary/img/w6.gif" class='screen_icon' /><img src="//st8.gismeteo.ru/static/diary/img/w6-bw.gif" class='print_icon' /><br />З 5м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>18</td>
																							<td class='first_in_group positive'>+7</td>
												<td>732</td>
												<td><img src=//st4.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st5.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td><img src=//st6.gismeteo.ru/static/diary/img/rain.png class='label_icon label_small screen_icon' /><img src=//st7.gismeteo.ru/static/diary/img/rain-bw.png class='label_icon label_small print_icon' /></td>
												<td><span><img src="//st8.gismeteo.ru/static/diary/img/w7.gif" class='screen_icon' /><img src="//st4.gismeteo.ru/static/diary/img/w7-bw.gif" class='print_icon' /><br />СЗ 3м/с</span></td>
																																		<td class='first_in_group positive'>+8</td>
												<td>736</td>
												<td><img src=//st5.gismeteo.ru/static/diary/img/sunc.png class='label_icon label_small screen_icon' /><img src=//st6.gismeteo.ru/static/diary/img/sunc-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st7.gismeteo.ru/static/diary/img/w7.gif" class='screen_icon' /><img src="//st8.gismeteo.ru/static/diary/img/w7-bw.gif" class='print_icon' /><br />СЗ 3м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>19</td>
																							<td class='first_in_group positive'>+11</td>
												<td>741</td>
												<td><img src=//st4.gismeteo.ru/static/diary/img/suncl.png class='label_icon label_small screen_icon' /><img src=//st5.gismeteo.ru/static/diary/img/suncl-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st6.gismeteo.ru/static/diary/img/w6.gif" class='screen_icon' /><img src="//st7.gismeteo.ru/static/diary/img/w6-bw.gif" class='print_icon' /><br />З 4м/с</span></td>
																																		<td class='first_in_group positive'>+8</td>
												<td>742</td>
												<td><img src=//st8.gismeteo.ru/static/diary/img/suncl.png class='label_icon label_small screen_icon' /><img src=//st4.gismeteo.ru/static/diary/img/suncl-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st5.gismeteo.ru/static/diary/img/w6.gif" class='screen_icon' /><img src="//st6.gismeteo.ru/static/diary/img/w6-bw.gif" class='print_icon' /><br />З 4м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>20</td>
																							<td class='first_in_group positive'>+8</td>
												<td>743</td>
												<td><img src=//st7.gismeteo.ru/static/diary/img/suncl.png class='label_icon label_small screen_icon' /><img src=//st8.gismeteo.ru/static/diary/img/suncl-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st4.gismeteo.ru/static/diary/img/w0.gif" class='screen_icon' /><img src="//st5.gismeteo.ru/static/diary/img/w0-bw.gif" class='print_icon' /><br />С 4м/с</span></td>
																																		<td class='first_in_group positive'>+3</td>
												<td>745</td>
												<td><img src=//st6.gismeteo.ru/static/diary/img/sunc.png class='label_icon label_small screen_icon' /><img src=//st7.gismeteo.ru/static/diary/img/sunc-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st8.gismeteo.ru/static/diary/img/w0.gif" class='screen_icon' /><img src="//st4.gismeteo.ru/static/diary/img/w0-bw.gif" class='print_icon' /><br />С 4м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>21</td>
																							<td class='first_in_group positive'>+8</td>
												<td>741</td>
												<td><img src=//st5.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st6.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td><img src=//st7.gismeteo.ru/static/diary/img/rain.png class='label_icon label_small screen_icon' /><img src=//st8.gismeteo.ru/static/diary/img/rain-bw.png class='label_icon label_small print_icon' /></td>
												<td><span><img src="//st4.gismeteo.ru/static/diary/img/w5.gif" class='screen_icon' /><img src="//st5.gismeteo.ru/static/diary/img/w5-bw.gif" class='print_icon' /><br />ЮЗ 2м/с</span></td>
																																		<td class='first_in_group positive'>+12</td>
												<td>739</td>
												<td><img src=//st6.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st7.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st8.gismeteo.ru/static/diary/img/w5.gif" class='screen_icon' /><img src="//st4.gismeteo.ru/static/diary/img/w5-bw.gif" class='print_icon' /><br />ЮЗ 2м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>22</td>
																							<td class='first_in_group positive'>+14</td>
												<td>739</td>
												<td><img src=//st5.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st6.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st7.gismeteo.ru/static/diary/img/w7.gif" class='screen_icon' /><img src="//st8.gismeteo.ru/static/diary/img/w7-bw.gif" class='print_icon' /><br />СЗ 3м/с</span></td>
																																		<td class='first_in_group positive'>+5</td>
												<td>742</td>
												<td><img src=//st4.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st5.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td><img src=//st6.gismeteo.ru/static/diary/img/rain.png class='label_icon label_small screen_icon' /><img src=//st7.gismeteo.ru/static/diary/img/rain-bw.png class='label_icon label_small print_icon' /></td>
												<td><span><img src="//st8.gismeteo.ru/static/diary/img/w7.gif" class='screen_icon' /><img src="//st4.gismeteo.ru/static/diary/img/w7-bw.gif" class='print_icon' /><br />СЗ 3м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>23</td>
																							<td class='first_in_group positive'>+9</td>
												<td>746</td>
												<td><img src=//st5.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st6.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st7.gismeteo.ru/static/diary/img/w1.gif" class='screen_icon' /><img src="//st8.gismeteo.ru/static/diary/img/w1-bw.gif" class='print_icon' /><br />СВ 2м/с</span></td>
																																		<td class='first_in_group positive'>+1</td>
												<td>746</td>
												<td><img src=//st4.gismeteo.ru/static/diary/img/sun.png class='label_icon label_small screen_icon' /><img src=//st5.gismeteo.ru/static/diary/img/sun-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st6.gismeteo.ru/static/diary/img/w1.gif" class='screen_icon' /><img src="//st7.gismeteo.ru/static/diary/img/w1-bw.gif" class='print_icon' /><br />СВ 2м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>24</td>
																							<td class='first_in_group positive'>+10</td>
												<td>745</td>
												<td><img src=//st8.gismeteo.ru/static/diary/img/suncl.png class='label_icon label_small screen_icon' /><img src=//st4.gismeteo.ru/static/diary/img/suncl-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st5.gismeteo.ru/static/diary/img/w0.gif" class='screen_icon' /><img src="//st6.gismeteo.ru/static/diary/img/w0-bw.gif" class='print_icon' /><br />С 1м/с</span></td>
																																		<td class='first_in_group positive'>+1</td>
												<td>744</td>
												<td><img src=//st7.gismeteo.ru/static/diary/img/sun.png class='label_icon label_small screen_icon' /><img src=//st8.gismeteo.ru/static/diary/img/sun-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st4.gismeteo.ru/static/diary/img/w0.gif" class='screen_icon' /><img src="//st5.gismeteo.ru/static/diary/img/w0-bw.gif" class='print_icon' /><br />С 1м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>25</td>
																							<td class='first_in_group positive'>+11</td>
												<td>742</td>
												<td><img src=//st6.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st7.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st8.gismeteo.ru/static/diary/img/w3.gif" class='screen_icon' /><img src="//st4.gismeteo.ru/static/diary/img/w3-bw.gif" class='print_icon' /><br />ЮВ 3м/с</span></td>
																																		<td class='first_in_group positive'>+8</td>
												<td>740</td>
												<td><img src=//st5.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st6.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st7.gismeteo.ru/static/diary/img/w3.gif" class='screen_icon' /><img src="//st8.gismeteo.ru/static/diary/img/w3-bw.gif" class='print_icon' /><br />ЮВ 3м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>26</td>
																							<td class='first_in_group positive'>+16</td>
												<td>740</td>
												<td><img src=//st4.gismeteo.ru/static/diary/img/sun.png class='label_icon label_small screen_icon' /><img src=//st5.gismeteo.ru/static/diary/img/sun-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st6.gismeteo.ru/static/diary/img/w2.gif" class='screen_icon' /><img src="//st7.gismeteo.ru/static/diary/img/w2-bw.gif" class='print_icon' /><br />В 2м/с</span></td>
																																		<td class='first_in_group positive'>+7</td>
												<td>740</td>
												<td><img src=//st8.gismeteo.ru/static/diary/img/sun.png class='label_icon label_small screen_icon' /><img src=//st4.gismeteo.ru/static/diary/img/sun-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st5.gismeteo.ru/static/diary/img/w2.gif" class='screen_icon' /><img src="//st6.gismeteo.ru/static/diary/img/w2-bw.gif" class='print_icon' /><br />В 2м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>27</td>
																							<td class='first_in_group positive'>+17</td>
												<td>742</td>
												<td><img src=//st7.gismeteo.ru/static/diary/img/suncl.png class='label_icon label_small screen_icon' /><img src=//st8.gismeteo.ru/static/diary/img/suncl-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st4.gismeteo.ru/static/diary/img/w5.gif" class='screen_icon' /><img src="//st5.gismeteo.ru/static/diary/img/w5-bw.gif" class='print_icon' /><br />ЮЗ 2м/с</span></td>
																																		<td class='first_in_group positive'>+6</td>
												<td>742</td>
												<td><img src=//st6.gismeteo.ru/static/diary/img/suncl.png class='label_icon label_small screen_icon' /><img src=//st7.gismeteo.ru/static/diary/img/suncl-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st8.gismeteo.ru/static/diary/img/w5.gif" class='screen_icon' /><img src="//st4.gismeteo.ru/static/diary/img/w5-bw.gif" class='print_icon' /><br />ЮЗ 2м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>28</td>
																							<td class='first_in_group positive'>+12</td>
												<td>739</td>
												<td><img src=//st5.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st6.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td><img src=//st7.gismeteo.ru/static/diary/img/rain.png class='label_icon label_small screen_icon' /><img src=//st8.gismeteo.ru/static/diary/img/rain-bw.png class='label_icon label_small print_icon' /></td>
												<td><span><img src="//st4.gismeteo.ru/static/diary/img/w4.gif" class='screen_icon' /><img src="//st5.gismeteo.ru/static/diary/img/w4-bw.gif" class='print_icon' /><br />Ю 3м/с</span></td>
																																		<td class='first_in_group positive'>+10</td>
												<td>737</td>
												<td>&mdash;</td>
												<td></td>
												<td><span><img src="//st6.gismeteo.ru/static/diary/img/w4.gif" class='screen_icon' /><img src="//st7.gismeteo.ru/static/diary/img/w4-bw.gif" class='print_icon' /><br />Ю 3м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>29</td>
																							<td class='first_in_group positive'>+15</td>
												<td>734</td>
												<td><img src=//st8.gismeteo.ru/static/diary/img/sunc.png class='label_icon label_small screen_icon' /><img src=//st4.gismeteo.ru/static/diary/img/sunc-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st5.gismeteo.ru/static/diary/img/w5.gif" class='screen_icon' /><img src="//st6.gismeteo.ru/static/diary/img/w5-bw.gif" class='print_icon' /><br />ЮЗ 3м/с</span></td>
																																		<td class='first_in_group positive'>+13</td>
												<td>733</td>
												<td><img src=//st7.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st8.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st4.gismeteo.ru/static/diary/img/w5.gif" class='screen_icon' /><img src="//st5.gismeteo.ru/static/diary/img/w5-bw.gif" class='print_icon' /><br />ЮЗ 3м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>30</td>
																							<td class='first_in_group positive'>+15</td>
												<td>725</td>
												<td><img src=//st6.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st7.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st8.gismeteo.ru/static/diary/img/w4.gif" class='screen_icon' /><img src="//st4.gismeteo.ru/static/diary/img/w4-bw.gif" class='print_icon' /><br />Ю 3м/с</span></td>
																																		<td class='first_in_group positive'>+15</td>
												<td>722</td>
												<td><img src=//st5.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st6.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st7.gismeteo.ru/static/diary/img/w4.gif" class='screen_icon' /><img src="//st8.gismeteo.ru/static/diary/img/w4-bw.gif" class='print_icon' /><br />Ю 3м/с</span></td>
																					</tr>
																		</tbody>
								</table>
													</div>
						<div class=clear></div>
						<div id=legend_block>
							<center><label>Условные обозначения:</label></center>
							<div id=legend>
								<div id=cloudness_labels>
									<div class=label_smallsize><img src=//st4.gismeteo.ru/static/diary/img/sun.png class='png screen_icon' /><img src=//st5.gismeteo.ru/static/diary/img/sun-bw.gif class='print_icon' /><dl>Ясно</dl></div>
									<div class=label_smallsize><img src=//st6.gismeteo.ru/static/diary/img/sunc.png class='png screen_icon' /><img src=//st7.gismeteo.ru/static/diary/img/sunc-bw.gif class='print_icon' /><dl>Малооблачно</dl></div>
									<div class=label_smallsize><img src=//st8.gismeteo.ru/static/diary/img/suncl.png class='png screen_icon' /><img src=//st4.gismeteo.ru/static/diary/img/suncl-bw.gif class='print_icon' /><dl>Облачно</dl></div>
									<div class=label_smallsize><img src=//st5.gismeteo.ru/static/diary/img/dull.png class='png screen_icon' /><img src=//st6.gismeteo.ru/static/diary/img/dull-bw.gif class='print_icon' /><dl>Пасмурно</dl></div>
									<div class=clear></div>
								</div>
								<div id=precipitations_labels>
									<div class=label_bigsize><img src=//st7.gismeteo.ru/static/diary/img/rain.png class='png screen_icon' /><img src=//st8.gismeteo.ru/static/diary/img/rain-bw.png class='print_icon' /><dl>Дождь</dl></div>
									<div class=label_bigsize><img src=//st4.gismeteo.ru/static/diary/img/snow.png class='png screen_icon' /><img src=//st5.gismeteo.ru/static/diary/img/snow-bw.png class='print_icon' /><dl>Снег</dl></div>
									<div class=label_bigsize><img src=//st6.gismeteo.ru/static/diary/img/storm.png class='png screen_icon' /><img src=//st7.gismeteo.ru/static/diary/img/storm-bw.gif class='print_icon' /><dl>гроза</dl></div>
								</div>
								<div id=tempwind_labels>
									<div class=label_bigsize><img src=//st8.gismeteo.ru/static/diary/img/temp.gif class='screen_icon' /><img src=//st4.gismeteo.ru/static/diary/img/temp-bw.gif class='print_icon' /><dl>Температура</dl></div>
									<div class=label_bigsize><img src=//st5.gismeteo.ru/static/diary/img/wind.gif class='screen_icon' /><img src=//st6.gismeteo.ru/static/diary/img/wind-bw.gif class='print_icon' /><dl>Направление и<br>скорость ветра</dl></div>
								</div>
								<div class=clear></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id=bottom_shadow class=png>
				<div class="agreement">
					<a href="https://www.gismeteo.ru/page/agreement/" target="_blank">Соглашение</a>
				</div>
				&copy 1998 - 2020 "Мэп Мэйкер"
			</div>
			<div id=counter>
				<!--LiveInternet counter--><script type="text/javascript"><!--
					document.write("<a href='https://www.gismeteo.ru/ref/?url=aHR0cDovL3d3dy5saXZlaW50ZXJuZXQucnUvY2xpY2s=' "+
							"target=_blank><img src='//counter.yadro.ru/hit?t26.1;r"+
							escape(document.referrer)+((typeof(screen)=="undefined")?"":
							";s"+screen.width+"*"+screen.height+"*"+(screen.colorDepth?
									screen.colorDepth:screen.pixelDepth))+";u"+escape(document.URL)+
							";"+Math.random()+
							"' alt='' title='LiveInternet: показано число посетителей за"+
							" сегодня' "+
							"border='0' width='88' height='15'><\/a>")
					//--></script><!--/LiveInternet-->
			</div>
		</div>
	</div>
</div>
</div>
</div>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-12105830-1', 'auto');
  ga('send', 'pageview');
</script>
	<script type="text/JavaScript">
		//<!--[CDATA[
		function onload_inits() {
			if (_timer) {
				clearInterval(_timer);
				_timer = null;
			}
			try {
				for (var i=0, l=onloads.length; i<l; i++) {
					var onloads_item = onloads.shift();
					onloads_item();
				}
			} catch(error) {}
		};
		if (document.addEventListener) {
			document.addEventListener("DOMContentLoaded", onload_inits, false);
		}
		/*@cc_on @*/
		/*@if (@_win32)
		 document.write("<script id=__ie_onload defer src=javascript:void(0)><\/script>");
		 var script = document.getElementById("__ie_onload");
		 script.onreadystatechange = function() {
		 if (this.readyState == "complete") {
		 onload_inits();
		 }
		 };
		 /*@end @*/
		if (/WebKit/i.test(navigator.userAgent)) {
			var _timer = setInterval(function() {
				if (/loaded|complete/.test(document.readyState)) {
					onload_inits();
				}
			}, 10);
		}
		window.onload = onload_inits;
		//]]-->
	</script>
</body>
<!--GMT+0: 2020-09-16 17:11:50-->
<!--GMT+0: 2020-09-16 17:11:50-->
</html>
`;

export const okEmptyResult = `

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html>
<head>
	<title>GISMETEO.RU: Дневник погоды на Северном полюсе за Сентябрь 2002 г. Архив погоды за Сентябрь 2002 г. по г. Северный полюс, Северный полюс, Северный Полюс</title>
	<meta name="Author" content="gismeteo">
	<meta name="description" content="Дневник фактических данных погоды на Северном полюсе, Сентябрь 2002 г. для школьников.">
	<meta name="keywords" content="фактическая погода на Северном полюсе, фактические данные, дневник погоды на Северном полюсе, дневник, дневник погоды, архив, архив погоды, архив погоды по г. Северный полюс, Сентябрь, 2002, школьник, ученик, дневник погоды для школьников, дневник наблюдений за погодой, погодный дневник.">
	<link rel="shortcut icon" type="image/ico" href="//st7.gismeteo.ru/favicon2.ico" />
	<link rel="icon" type="image/ico" href="//st7.gismeteo.ru/favicon2.ico" />
	<script src="https://yastatic.net/pcode/adfox/loader.js"></script>
	<script type="text/javascript" src="//st7.gismeteo.ru/static/js/jquery-1.4.2.min.js?f3f8c"></script>
	<script type="text/javascript" src="//st6.gismeteo.ru/static/js/classes/Gis.class.js?f3f8c"></script>
	<script type="text/javascript" src="//st4.gismeteo.ru/static/js/classes/Site.class.js?f3f8c"></script>
	<script type="text/javascript" src="//st6.gismeteo.ru/static/js/common.js?f3f8c"></script>
	<script type="text/javascript" src="//st8.gismeteo.ru/static/js/gis.adfox.js?f3f8c"></script>
	<link rel="stylesheet" type="text/css" href="//st8.gismeteo.ru/static/diary/css/common.css?f3f8c"  />
	<link rel="stylesheet" type="text/css" href="//st8.gismeteo.ru/static/diary/css/screen.css?f3f8c" media="screen"  />
	<link rel="stylesheet" type="text/css" href="//st7.gismeteo.ru/static/diary/css/print_bw.css?f3f8c" media="print"  />
	<link rel="stylesheet" type="text/css" href="//st8.gismeteo.ru/static/diary/css/print_color.css?f3f8c" media="print"  />

		<!--[if lt IE 8]><style type="text/css">
			img.png, div.png { behavior: url(./static/diary/css/iepngfix_v2/iepngfix.htc) }
		</style><![endif]-->
	<script type="text/javascript" src="//st6.gismeteo.ru/static/diary/css/iepngfix_v2/iepngfix_tilebg.js?f3f8c"></script>
		<script type="text/javascript">
			var default_args = {"region": "367", "country": "156", "distr": "all", "city": "4368"};
			var currentTime = new Date()
			default_args.month = currentTime.getMonth() + 1;
			default_args.year = currentTime.getFullYear();
			function choosePrintStyle(mode)
			{
				if(mode=='color') {
					$('body').removeClass('pr_bw').addClass('pr_color');
				}
				else{
					$('body').removeClass('pr_color').addClass('pr_bw');
				}
				window.print();
			}
			function setTownParam(id, name, n){
				$('city_id').value = id;
			}
			function setCookie (name, value, expires, path, domain, secure) {
				document.cookie = name + "=" + escape(value) +
						((expires) ? "; expires=" + expires : "") +
						((path) ? "; path=" + path : "") +
						((domain) ? "; domain=" + domain : "") +
						((secure) ? "; secure" : "");
			}
			function getCookie(name) {
				var cookie = " " + document.cookie;
				var search = " " + name + "=";
				var setStr = null;
				var offset = 0;
				var end = 0;
				if (cookie.length > 0) {
					offset = cookie.indexOf(search);
					if (offset != -1) {
						offset += search.length;
						end = cookie.indexOf(";", offset)
						if (end == -1) {
							end = cookie.length;
						}
						setStr = unescape(cookie.substring(offset, end));
					}
				}
				return(setStr);
			}
		</script>

</head>
<body>
<div id=pre-container>
	<div id=post-container>
		<div id=container>
			<div id=site_header>
				<div id="header">
<div class="top"></div><div class="bottom"></div>
<a href="//www.gismeteo.ru" id="logo" class="logo" title="Gismeteo.Ru Прогноз погоды."></a>
	<div class="bnr" id="weather-top"><!-- Gismeteo Adfox banner TOP -->
<script type="text/javascript">
    new adfox({
        id : "weather-top",
        slot: "top",
        targeting : {pt:'b',pp:'g',ps:'dlyj',p2:'fckw',pct:'c',puid18:'gismeteo_ru_old_desktop',puid1:12,puid2:'sun',puid3:4368,puid4:156,puid5:477,puid6:4146,puid18:'gismeteo_ru_old_desktop'}
});
</script></div>
</div>				<div id="mainMenu">
	<ul>
		<li class="tt"><a href="/"><i>Главная</i></a></li>
		<li class="tt"><a href="//www.gismeteo.ru/map/catalog/"><i>Карты</i></a></li>
		<li class="tt"><a href="//www.gismeteo.ru/news/"><i>Новости</i></a></li>
		<li class="tt"><a href="/month/10997/"><i>Месяц</i></a></li>
		<li class="tt"><a href="//www.gismeteo.ru/informers/"><i>Информеры</i></a></li>
		<li class="tt"><a href="//www.gismeteo.ru/soft/"><i>Приложения</i></a></li>
		<li class="Last"><a href="//www.gismeteo.ru/catalog/"><i>Поиск</i></a></li>
	</ul>
</div>			</div>
			<div id=user_details>
				<div>
					<div class=typed>Ученик(ца)</div><div class='underline short'></div><div class=typed>класса</div><div class='underline short'></div><div class=typed>школы</div><div class='underline long1'></div>
					<div class=clear></div>
				</div>
				<div class=clear></div>
				<div>
					<div class=typed>ФИО</div><div class='underline long2'></div>
					<div class=clear></div>
				</div>
				<div class=clear></div>
				<div class=header>
					,  2002
				</div>
				<div class=clear></div>
			</div>
			<div class=clear></div>
			<div id=main_field>
				<div class=header_row>
					<div id=parameters>
						<form>
							<div id=selector>
																<div id=selector_block1><div>
			   					<label for=sd_country>Выберите страну:</label><br /><select name="sd_country" id=sd_country class=selector_select></select>
		   					</div></div>
		  					<div id=selector_block2><div>
			   					<label for=sd_distr>Выберите область:</label><br /><select name="sd_distr" id=sd_distr class=selector_select></select><br />
			  					<label for=sd_city>Выберите город:</label><br /><select name="sd_city" id=sd_city class=selector_select></select>
		   					</div></div>
								<div id=selector_block3><div>
								<label for=date_Month>Выберите месяц:</label><br />
																	<select name="Month" id=date_Month onchange="site.selector.refreshDate();">
<option label="Январь" value="01">Январь</option>
<option label="Февраль" value="02">Февраль</option>
<option label="Март" value="03">Март</option>
<option label="Апрель" value="04">Апрель</option>
<option label="Май" value="05">Май</option>
<option label="Июнь" value="06">Июнь</option>
<option label="Июль" value="07">Июль</option>
<option label="Август" value="08">Август</option>
<option label="Сентябрь" value="09" selected="selected">Сентябрь</option>
<option label="Октябрь" value="10">Октябрь</option>
<option label="Ноябрь" value="11">Ноябрь</option>
<option label="Декабрь" value="12">Декабрь</option>
</select>
<select name="Year" id=date_Year onchange="site.selector.refreshDate();">
<option label="1997" value="1997">1997</option>
<option label="1998" value="1998">1998</option>
<option label="1999" value="1999">1999</option>
<option label="2000" value="2000">2000</option>
<option label="2001" value="2001">2001</option>
<option label="2002" value="2002" selected="selected">2002</option>
<option label="2003" value="2003">2003</option>
<option label="2004" value="2004">2004</option>
<option label="2005" value="2005">2005</option>
<option label="2006" value="2006">2006</option>
<option label="2007" value="2007">2007</option>
<option label="2008" value="2008">2008</option>
<option label="2009" value="2009">2009</option>
<option label="2010" value="2010">2010</option>
<option label="2011" value="2011">2011</option>
<option label="2012" value="2012">2012</option>
<option label="2013" value="2013">2013</option>
<option label="2014" value="2014">2014</option>
<option label="2015" value="2015">2015</option>
<option label="2016" value="2016">2016</option>
<option label="2017" value="2017">2017</option>
<option label="2018" value="2018">2018</option>
<option label="2019" value="2019">2019</option>
<option label="2020" value="2020">2020</option>
</select>
																<button id=selector_go_btn>Получить дневник</button>
							</div></div>
					<div class=clear></div>
				</div>

					<input type=hidden id="city_id" name="city_id" value="">
				<script type="text/javascript" src="//st4.gismeteo.ru/static/js/classes/Selector.class.js?f3f8c"></script>
				<script type="text/javascript">
					jQuery(function($){
// $(window).bind('load', function($){
						site.selector = new Selector();
						site.selector.init({submit_btn:'selector_go_btn', selectors:{country:'sd_country', district:'sd_distr', city:'sd_city', year:'date_Year', month:'date_Month'}, data:{country:165, district:null, city:4368, year:2002, month:09}});
					});
				</script>

				</form>
			</div>
			<div id=logo></div>
			<div class=clear></div>
		</div>
		<div class=clear></div>
		<div class=container>
			<div id=top_shadow class=png></div>
			<div class='cover png'>
				<div id=page>
					<div id=page_content>
						<div id=data_block>
															<center class=empty_phrase><label>Наблюдения метео-данных в данный период не велись.</label></center>
													</div>
						<div class=clear></div>
						<div id=legend_block>
							<center><label>Условные обозначения:</label></center>
							<div id=legend>
								<div id=cloudness_labels>
									<div class=label_smallsize><img src=//st4.gismeteo.ru/static/diary/img/sun.png class='png screen_icon' /><img src=//st5.gismeteo.ru/static/diary/img/sun-bw.gif class='print_icon' /><dl>Ясно</dl></div>
									<div class=label_smallsize><img src=//st6.gismeteo.ru/static/diary/img/sunc.png class='png screen_icon' /><img src=//st7.gismeteo.ru/static/diary/img/sunc-bw.gif class='print_icon' /><dl>Малооблачно</dl></div>
									<div class=label_smallsize><img src=//st8.gismeteo.ru/static/diary/img/suncl.png class='png screen_icon' /><img src=//st4.gismeteo.ru/static/diary/img/suncl-bw.gif class='print_icon' /><dl>Облачно</dl></div>
									<div class=label_smallsize><img src=//st5.gismeteo.ru/static/diary/img/dull.png class='png screen_icon' /><img src=//st6.gismeteo.ru/static/diary/img/dull-bw.gif class='print_icon' /><dl>Пасмурно</dl></div>
									<div class=clear></div>
								</div>
								<div id=precipitations_labels>
									<div class=label_bigsize><img src=//st7.gismeteo.ru/static/diary/img/rain.png class='png screen_icon' /><img src=//st8.gismeteo.ru/static/diary/img/rain-bw.png class='print_icon' /><dl>Дождь</dl></div>
									<div class=label_bigsize><img src=//st4.gismeteo.ru/static/diary/img/snow.png class='png screen_icon' /><img src=//st5.gismeteo.ru/static/diary/img/snow-bw.png class='print_icon' /><dl>Снег</dl></div>
									<div class=label_bigsize><img src=//st6.gismeteo.ru/static/diary/img/storm.png class='png screen_icon' /><img src=//st7.gismeteo.ru/static/diary/img/storm-bw.gif class='print_icon' /><dl>гроза</dl></div>
								</div>
								<div id=tempwind_labels>
									<div class=label_bigsize><img src=//st8.gismeteo.ru/static/diary/img/temp.gif class='screen_icon' /><img src=//st4.gismeteo.ru/static/diary/img/temp-bw.gif class='print_icon' /><dl>Температура</dl></div>
									<div class=label_bigsize><img src=//st5.gismeteo.ru/static/diary/img/wind.gif class='screen_icon' /><img src=//st6.gismeteo.ru/static/diary/img/wind-bw.gif class='print_icon' /><dl>Направление и<br>скорость ветра</dl></div>
								</div>
								<div class=clear></div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id=bottom_shadow class=png>
				<div class="agreement">
					<a href="https://www.gismeteo.ru/page/agreement/" target="_blank">Соглашение</a>
				</div>
				&copy 1998 - 2020 "Мэп Мэйкер"
			</div>
			<div id=counter>
				<!--LiveInternet counter--><script type="text/javascript"><!--
					document.write("<a href='https://www.gismeteo.ru/ref/?url=aHR0cDovL3d3dy5saXZlaW50ZXJuZXQucnUvY2xpY2s=' "+
							"target=_blank><img src='//counter.yadro.ru/hit?t26.1;r"+
							escape(document.referrer)+((typeof(screen)=="undefined")?"":
							";s"+screen.width+"*"+screen.height+"*"+(screen.colorDepth?
									screen.colorDepth:screen.pixelDepth))+";u"+escape(document.URL)+
							";"+Math.random()+
							"' alt='' title='LiveInternet: показано число посетителей за"+
							" сегодня' "+
							"border='0' width='88' height='15'><\/a>")
					//--></script><!--/LiveInternet-->
			</div>
		</div>
	</div>
</div>
</div>
</div>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-12105830-1', 'auto');
  ga('send', 'pageview');
</script>
	<script type="text/JavaScript">
		//<!--[CDATA[
		function onload_inits() {
			if (_timer) {
				clearInterval(_timer);
				_timer = null;
			}
			try {
				for (var i=0, l=onloads.length; i<l; i++) {
					var onloads_item = onloads.shift();
					onloads_item();
				}
			} catch(error) {}
		};
		if (document.addEventListener) {
			document.addEventListener("DOMContentLoaded", onload_inits, false);
		}
		/*@cc_on @*/
		/*@if (@_win32)
		 document.write("<script id=__ie_onload defer src=javascript:void(0)><\/script>");
		 var script = document.getElementById("__ie_onload");
		 script.onreadystatechange = function() {
		 if (this.readyState == "complete") {
		 onload_inits();
		 }
		 };
		 /*@end @*/
		if (/WebKit/i.test(navigator.userAgent)) {
			var _timer = setInterval(function() {
				if (/loaded|complete/.test(document.readyState)) {
					onload_inits();
				}
			}, 10);
		}
		window.onload = onload_inits;
		//]]-->
	</script>
</body>
<!--GMT+0: 2020-09-16 17:07:05-->
<!--GMT+0: 2020-09-16 17:07:05-->
</html>
`;
