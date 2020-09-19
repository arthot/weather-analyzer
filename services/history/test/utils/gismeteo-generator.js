export const okResult1 = `
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html>
<head>
</head>
<body>
<div id=pre-container>
	<div id=post-container>
		<div id=container>
			<div id=site_header>
				<div id="header">
<div class="top"></div><div class="bottom"></div>
	<div class="bnr" id="weather-top"></div>
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
	</div>
</div>
</div>
</div>
</body>
</html>
`;

export const okResult2 = `
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html>
<head>
</head>
<body>
<div id=pre-container>
	<div id=post-container>
		<div id=container>
			<div id=site_header>
				<div id="header">
<div class="top"></div><div class="bottom"></div>
<a href="//www.gismeteo.ru" id="logo" class="logo" title="Gismeteo.Ru Прогноз погоды."></a>
	<div class="bnr" id="weather-top"></div>
</div>				<div id="mainMenu">
	<ul>
		<li class="tt"><a href="/"><i>Главная</i></a></li>
		<li class="tt"><a href="//www.gismeteo.ru/map/catalog/"><i>Карты</i></a></li>
		<li class="tt"><a href="//www.gismeteo.ru/news/"><i>Новости</i></a></li>
		<li class="tt"><a href="/month/1623/"><i>Месяц</i></a></li>
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
					Париж, сентябрь 2015
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
<option label="2015" value="2015" selected="selected">2015</option>
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
									<div id="page_title"><h1> Дневник погоды в Париже за Сентябрь 2015 г.</h1></div>
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
																							<td class='first_in_group positive'>+21</td>
												<td>759</td>
												<td>&mdash;</td>
												<td></td>
												<td><span><img src="//st6.gismeteo.ru/static/diary/img/w7.gif" class='screen_icon' /><img src="//st7.gismeteo.ru/static/diary/img/w7-bw.gif" class='print_icon' /><br />СЗ 5м/с</span></td>
																																		<td class='first_in_group positive'>+16</td>
												<td>761</td>
												<td>&mdash;</td>
												<td></td>
												<td><span><img src="//st8.gismeteo.ru/static/diary/img/w7.gif" class='screen_icon' /><img src="//st4.gismeteo.ru/static/diary/img/w7-bw.gif" class='print_icon' /><br />СЗ 5м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>2</td>
																							<td class='first_in_group positive'>+19</td>
												<td>758</td>
												<td>&mdash;</td>
												<td></td>
												<td><span><img src="//st5.gismeteo.ru/static/diary/img/w7.gif" class='screen_icon' /><img src="//st6.gismeteo.ru/static/diary/img/w7-bw.gif" class='print_icon' /><br />СЗ 4м/с</span></td>
																																		<td class='first_in_group positive'>+13</td>
												<td>759</td>
												<td><img src=//st7.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st8.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st4.gismeteo.ru/static/diary/img/w7.gif" class='screen_icon' /><img src="//st5.gismeteo.ru/static/diary/img/w7-bw.gif" class='print_icon' /><br />СЗ 4м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>3</td>
																							<td class='first_in_group positive'>+18</td>
												<td>758</td>
												<td><img src=//st6.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st7.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st8.gismeteo.ru/static/diary/img/w7.gif" class='screen_icon' /><img src="//st4.gismeteo.ru/static/diary/img/w7-bw.gif" class='print_icon' /><br />СЗ 6м/с</span></td>
																																		<td class='first_in_group positive'>+15</td>
												<td>759</td>
												<td><img src=//st5.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st6.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st7.gismeteo.ru/static/diary/img/w7.gif" class='screen_icon' /><img src="//st8.gismeteo.ru/static/diary/img/w7-bw.gif" class='print_icon' /><br />СЗ 6м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>4</td>
																							<td class='first_in_group positive'>+16</td>
												<td>759</td>
												<td><img src=//st4.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st5.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st6.gismeteo.ru/static/diary/img/w7.gif" class='screen_icon' /><img src="//st7.gismeteo.ru/static/diary/img/w7-bw.gif" class='print_icon' /><br />СЗ 5м/с</span></td>
																																		<td class='first_in_group positive'>+14</td>
												<td>760</td>
												<td><img src=//st8.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st4.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st5.gismeteo.ru/static/diary/img/w7.gif" class='screen_icon' /><img src="//st6.gismeteo.ru/static/diary/img/w7-bw.gif" class='print_icon' /><br />СЗ 5м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>5</td>
																							<td class='first_in_group positive'>+19</td>
												<td>761</td>
												<td><img src=//st7.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st8.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st4.gismeteo.ru/static/diary/img/w7.gif" class='screen_icon' /><img src="//st5.gismeteo.ru/static/diary/img/w7-bw.gif" class='print_icon' /><br />СЗ 5м/с</span></td>
																																		<td class='first_in_group positive'>+14</td>
												<td>764</td>
												<td><img src=//st6.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st7.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st8.gismeteo.ru/static/diary/img/w7.gif" class='screen_icon' /><img src="//st4.gismeteo.ru/static/diary/img/w7-bw.gif" class='print_icon' /><br />СЗ 5м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>6</td>
																							<td class='first_in_group positive'>+17</td>
												<td>767</td>
												<td><img src=//st5.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st6.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st7.gismeteo.ru/static/diary/img/w0.gif" class='screen_icon' /><img src="//st8.gismeteo.ru/static/diary/img/w0-bw.gif" class='print_icon' /><br />С 3м/с</span></td>
																																		<td class='first_in_group positive'>+13</td>
												<td>767</td>
												<td>&mdash;</td>
												<td></td>
												<td><span><img src="//st4.gismeteo.ru/static/diary/img/w0.gif" class='screen_icon' /><img src="//st5.gismeteo.ru/static/diary/img/w0-bw.gif" class='print_icon' /><br />С 3м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>7</td>
																							<td class='first_in_group positive'>+19</td>
												<td>767</td>
												<td><img src=//st6.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st7.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st8.gismeteo.ru/static/diary/img/w0.gif" class='screen_icon' /><img src="//st4.gismeteo.ru/static/diary/img/w0-bw.gif" class='print_icon' /><br />С 4м/с</span></td>
																																		<td class='first_in_group positive'>+16</td>
												<td>767</td>
												<td><img src=//st5.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st6.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st7.gismeteo.ru/static/diary/img/w0.gif" class='screen_icon' /><img src="//st8.gismeteo.ru/static/diary/img/w0-bw.gif" class='print_icon' /><br />С 4м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>8</td>
																							<td class='first_in_group positive'>+18</td>
												<td>764</td>
												<td><img src=//st4.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st5.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st6.gismeteo.ru/static/diary/img/w1.gif" class='screen_icon' /><img src="//st7.gismeteo.ru/static/diary/img/w1-bw.gif" class='print_icon' /><br />СВ 4м/с</span></td>
																																		<td class='first_in_group positive'>+14</td>
												<td>763</td>
												<td>&mdash;</td>
												<td></td>
												<td><span><img src="//st8.gismeteo.ru/static/diary/img/w1.gif" class='screen_icon' /><img src="//st4.gismeteo.ru/static/diary/img/w1-bw.gif" class='print_icon' /><br />СВ 4м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>9</td>
																							<td class='first_in_group positive'>+22</td>
												<td>759</td>
												<td>&mdash;</td>
												<td></td>
												<td><span><img src="//st5.gismeteo.ru/static/diary/img/w2.gif" class='screen_icon' /><img src="//st6.gismeteo.ru/static/diary/img/w2-bw.gif" class='print_icon' /><br />В 6м/с</span></td>
																																		<td class='first_in_group positive'>+16</td>
												<td>760</td>
												<td>&mdash;</td>
												<td></td>
												<td><span><img src="//st7.gismeteo.ru/static/diary/img/w2.gif" class='screen_icon' /><img src="//st8.gismeteo.ru/static/diary/img/w2-bw.gif" class='print_icon' /><br />В 6м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>10</td>
																							<td class='first_in_group positive'>+23</td>
												<td>758</td>
												<td>&mdash;</td>
												<td></td>
												<td><span><img src="//st4.gismeteo.ru/static/diary/img/w2.gif" class='screen_icon' /><img src="//st5.gismeteo.ru/static/diary/img/w2-bw.gif" class='print_icon' /><br />В 5м/с</span></td>
																																		<td class='first_in_group positive'>+14</td>
												<td>759</td>
												<td>&mdash;</td>
												<td></td>
												<td><span><img src="//st6.gismeteo.ru/static/diary/img/w2.gif" class='screen_icon' /><img src="//st7.gismeteo.ru/static/diary/img/w2-bw.gif" class='print_icon' /><br />В 5м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>11</td>
																							<td class='first_in_group positive'>+23</td>
												<td>756</td>
												<td><img src=//st8.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st4.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st5.gismeteo.ru/static/diary/img/w3.gif" class='screen_icon' /><img src="//st6.gismeteo.ru/static/diary/img/w3-bw.gif" class='print_icon' /><br />ЮВ 2м/с</span></td>
																																		<td class='first_in_group positive'>+18</td>
												<td>755</td>
												<td><img src=//st7.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st8.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st4.gismeteo.ru/static/diary/img/w3.gif" class='screen_icon' /><img src="//st5.gismeteo.ru/static/diary/img/w3-bw.gif" class='print_icon' /><br />ЮВ 2м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>12</td>
																							<td class='first_in_group positive'>+18</td>
												<td>754</td>
												<td><img src=//st6.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st7.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st8.gismeteo.ru/static/diary/img/w4.gif" class='screen_icon' /><img src="//st4.gismeteo.ru/static/diary/img/w4-bw.gif" class='print_icon' /><br />Ю 4м/с</span></td>
																																		<td class='first_in_group positive'>+14</td>
												<td>755</td>
												<td><img src=//st5.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st6.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st7.gismeteo.ru/static/diary/img/w4.gif" class='screen_icon' /><img src="//st8.gismeteo.ru/static/diary/img/w4-bw.gif" class='print_icon' /><br />Ю 4м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>13</td>
																							<td class='first_in_group'><img src="//st4.gismeteo.ru/static/diary/img/still.gif" class='label_icon label_small screen_icon' /><img src="//st5.gismeteo.ru/static/diary/img/still-bw.gif" class='label_icon label_small print_icon' /></td>
												<td><img src="//st6.gismeteo.ru/static/diary/img/still.gif" class='label_icon label_small screen_icon' /><img src="//st7.gismeteo.ru/static/diary/img/still-bw.gif" class='label_icon label_small print_icon' /></td>
												<td><img src="//st8.gismeteo.ru/static/diary/img/still.gif" class='label_icon label_small screen_icon' /><img src="//st4.gismeteo.ru/static/diary/img/still-bw.gif" class='label_icon label_small print_icon' /></td>
												<td><img src="//st5.gismeteo.ru/static/diary/img/still.gif" class='label_icon label_small screen_icon' /><img src="//st6.gismeteo.ru/static/diary/img/still-bw.gif" class='label_icon label_small print_icon' /></td>
												<td><img src="//st7.gismeteo.ru/static/diary/img/still.gif" class='label_icon label_small screen_icon' /><img src="//st8.gismeteo.ru/static/diary/img/still-bw.gif" class='label_icon label_small print_icon' /></td>
																																		<td class='first_in_group positive'>+15</td>
												<td>748</td>
												<td>&mdash;</td>
												<td></td>
												<td><span>Ш</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>14</td>
																							<td class='first_in_group positive'>+18</td>
												<td>748</td>
												<td>&mdash;</td>
												<td></td>
												<td><span><img src="//st4.gismeteo.ru/static/diary/img/w5.gif" class='screen_icon' /><img src="//st5.gismeteo.ru/static/diary/img/w5-bw.gif" class='print_icon' /><br />ЮЗ 10м/с</span></td>
																																		<td class='first_in_group positive'>+14</td>
												<td>750</td>
												<td><img src=//st6.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st7.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st8.gismeteo.ru/static/diary/img/w5.gif" class='screen_icon' /><img src="//st4.gismeteo.ru/static/diary/img/w5-bw.gif" class='print_icon' /><br />ЮЗ 10м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>15</td>
																							<td class='first_in_group positive'>+18</td>
												<td>749</td>
												<td><img src=//st5.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st6.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st7.gismeteo.ru/static/diary/img/w5.gif" class='screen_icon' /><img src="//st8.gismeteo.ru/static/diary/img/w5-bw.gif" class='print_icon' /><br />ЮЗ 7м/с</span></td>
																																		<td class='first_in_group positive'>+15</td>
												<td>746</td>
												<td><img src=//st4.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st5.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td><img src=//st6.gismeteo.ru/static/diary/img/rain.png class='label_icon label_small screen_icon' /><img src=//st7.gismeteo.ru/static/diary/img/rain-bw.png class='label_icon label_small print_icon' /></td>
												<td><span><img src="//st8.gismeteo.ru/static/diary/img/w5.gif" class='screen_icon' /><img src="//st4.gismeteo.ru/static/diary/img/w5-bw.gif" class='print_icon' /><br />ЮЗ 7м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>21</td>
																							<td class='first_in_group'><img src="//st5.gismeteo.ru/static/diary/img/still.gif" class='label_icon label_small screen_icon' /><img src="//st6.gismeteo.ru/static/diary/img/still-bw.gif" class='label_icon label_small print_icon' /></td>
												<td><img src="//st7.gismeteo.ru/static/diary/img/still.gif" class='label_icon label_small screen_icon' /><img src="//st8.gismeteo.ru/static/diary/img/still-bw.gif" class='label_icon label_small print_icon' /></td>
												<td><img src="//st4.gismeteo.ru/static/diary/img/still.gif" class='label_icon label_small screen_icon' /><img src="//st5.gismeteo.ru/static/diary/img/still-bw.gif" class='label_icon label_small print_icon' /></td>
												<td><img src="//st6.gismeteo.ru/static/diary/img/still.gif" class='label_icon label_small screen_icon' /><img src="//st7.gismeteo.ru/static/diary/img/still-bw.gif" class='label_icon label_small print_icon' /></td>
												<td><img src="//st8.gismeteo.ru/static/diary/img/still.gif" class='label_icon label_small screen_icon' /><img src="//st4.gismeteo.ru/static/diary/img/still-bw.gif" class='label_icon label_small print_icon' /></td>
																																		<td class='first_in_group positive'>+16</td>
												<td>751</td>
												<td><img src=//st5.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st6.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span>Ш</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>22</td>
																							<td class='first_in_group positive'>+15</td>
												<td>746</td>
												<td><img src=//st7.gismeteo.ru/static/diary/img/suncl.png class='label_icon label_small screen_icon' /><img src=//st8.gismeteo.ru/static/diary/img/suncl-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st4.gismeteo.ru/static/diary/img/w5.gif" class='screen_icon' /><img src="//st5.gismeteo.ru/static/diary/img/w5-bw.gif" class='print_icon' /><br />ЮЗ 4м/с</span></td>
																																		<td class='first_in_group positive'>+12</td>
												<td>748</td>
												<td><img src=//st6.gismeteo.ru/static/diary/img/suncl.png class='label_icon label_small screen_icon' /><img src=//st7.gismeteo.ru/static/diary/img/suncl-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st8.gismeteo.ru/static/diary/img/w5.gif" class='screen_icon' /><img src="//st4.gismeteo.ru/static/diary/img/w5-bw.gif" class='print_icon' /><br />ЮЗ 4м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>23</td>
																							<td class='first_in_group positive'>+18</td>
												<td>755</td>
												<td><img src=//st5.gismeteo.ru/static/diary/img/suncl.png class='label_icon label_small screen_icon' /><img src=//st6.gismeteo.ru/static/diary/img/suncl-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st7.gismeteo.ru/static/diary/img/w6.gif" class='screen_icon' /><img src="//st8.gismeteo.ru/static/diary/img/w6-bw.gif" class='print_icon' /><br />З 3м/с</span></td>
																																		<td class='first_in_group positive'>+13</td>
												<td>757</td>
												<td><img src=//st4.gismeteo.ru/static/diary/img/suncl.png class='label_icon label_small screen_icon' /><img src=//st5.gismeteo.ru/static/diary/img/suncl-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st6.gismeteo.ru/static/diary/img/w6.gif" class='screen_icon' /><img src="//st7.gismeteo.ru/static/diary/img/w6-bw.gif" class='print_icon' /><br />З 3м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>24</td>
																							<td class='first_in_group positive'>+17</td>
												<td>758</td>
												<td><img src=//st8.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st4.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st5.gismeteo.ru/static/diary/img/w4.gif" class='screen_icon' /><img src="//st6.gismeteo.ru/static/diary/img/w4-bw.gif" class='print_icon' /><br />Ю 3м/с</span></td>
																																		<td class='first_in_group positive'>+15</td>
												<td>759</td>
												<td><img src=//st7.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st8.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st4.gismeteo.ru/static/diary/img/w4.gif" class='screen_icon' /><img src="//st5.gismeteo.ru/static/diary/img/w4-bw.gif" class='print_icon' /><br />Ю 3м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>25</td>
																							<td class='first_in_group positive'>+18</td>
												<td>761</td>
												<td><img src=//st6.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st7.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st8.gismeteo.ru/static/diary/img/w0.gif" class='screen_icon' /><img src="//st4.gismeteo.ru/static/diary/img/w0-bw.gif" class='print_icon' /><br />С 3м/с</span></td>
																																		<td class='first_in_group positive'>+14</td>
												<td>762</td>
												<td><img src=//st5.gismeteo.ru/static/diary/img/suncl.png class='label_icon label_small screen_icon' /><img src=//st6.gismeteo.ru/static/diary/img/suncl-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st7.gismeteo.ru/static/diary/img/w0.gif" class='screen_icon' /><img src="//st8.gismeteo.ru/static/diary/img/w0-bw.gif" class='print_icon' /><br />С 3м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>26</td>
																							<td class='first_in_group positive'>+18</td>
												<td>762</td>
												<td><img src=//st4.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st5.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st6.gismeteo.ru/static/diary/img/w0.gif" class='screen_icon' /><img src="//st7.gismeteo.ru/static/diary/img/w0-bw.gif" class='print_icon' /><br />С 3м/с</span></td>
																																		<td class='first_in_group positive'>+15</td>
												<td>763</td>
												<td><img src=//st8.gismeteo.ru/static/diary/img/suncl.png class='label_icon label_small screen_icon' /><img src=//st4.gismeteo.ru/static/diary/img/suncl-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st5.gismeteo.ru/static/diary/img/w0.gif" class='screen_icon' /><img src="//st6.gismeteo.ru/static/diary/img/w0-bw.gif" class='print_icon' /><br />С 3м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>27</td>
																							<td class='first_in_group positive'>+19</td>
												<td>764</td>
												<td><img src=//st7.gismeteo.ru/static/diary/img/sun.png class='label_icon label_small screen_icon' /><img src=//st8.gismeteo.ru/static/diary/img/sun-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st4.gismeteo.ru/static/diary/img/w0.gif" class='screen_icon' /><img src="//st5.gismeteo.ru/static/diary/img/w0-bw.gif" class='print_icon' /><br />С 5м/с</span></td>
																																		<td class='first_in_group'><img src="//st6.gismeteo.ru/static/diary/img/still.gif" class='label_icon label_small screen_icon' /><img src="//st7.gismeteo.ru/static/diary/img/still-bw.gif" class='label_icon label_small print_icon' /></td>
												<td><img src="//st8.gismeteo.ru/static/diary/img/still.gif" class='label_icon label_small screen_icon' /><img src="//st4.gismeteo.ru/static/diary/img/still-bw.gif" class='label_icon label_small print_icon' /></td>
												<td><img src="//st5.gismeteo.ru/static/diary/img/still.gif" class='label_icon label_small screen_icon' /><img src="//st6.gismeteo.ru/static/diary/img/still-bw.gif" class='label_icon label_small print_icon' /></td>
												<td><img src="//st7.gismeteo.ru/static/diary/img/still.gif" class='label_icon label_small screen_icon' /><img src="//st8.gismeteo.ru/static/diary/img/still-bw.gif" class='label_icon label_small print_icon' /></td>
												<td class=last><img src="//st4.gismeteo.ru/static/diary/img/still.gif" class='label_icon label_small screen_icon' /><img src="//st5.gismeteo.ru/static/diary/img/still-bw.gif" class='label_icon label_small print_icon' /></td>
																					</tr>
																																							<tr align="center">
											<td class=first>28</td>
																							<td class='first_in_group'><img src="//st6.gismeteo.ru/static/diary/img/still.gif" class='label_icon label_small screen_icon' /><img src="//st7.gismeteo.ru/static/diary/img/still-bw.gif" class='label_icon label_small print_icon' /></td>
												<td><img src="//st8.gismeteo.ru/static/diary/img/still.gif" class='label_icon label_small screen_icon' /><img src="//st4.gismeteo.ru/static/diary/img/still-bw.gif" class='label_icon label_small print_icon' /></td>
												<td><img src="//st5.gismeteo.ru/static/diary/img/still.gif" class='label_icon label_small screen_icon' /><img src="//st6.gismeteo.ru/static/diary/img/still-bw.gif" class='label_icon label_small print_icon' /></td>
												<td><img src="//st7.gismeteo.ru/static/diary/img/still.gif" class='label_icon label_small screen_icon' /><img src="//st8.gismeteo.ru/static/diary/img/still-bw.gif" class='label_icon label_small print_icon' /></td>
												<td><img src="//st4.gismeteo.ru/static/diary/img/still.gif" class='label_icon label_small screen_icon' /><img src="//st5.gismeteo.ru/static/diary/img/still-bw.gif" class='label_icon label_small print_icon' /></td>
																																		<td class='first_in_group positive'>+14</td>
												<td>767</td>
												<td><img src=//st6.gismeteo.ru/static/diary/img/sun.png class='label_icon label_small screen_icon' /><img src=//st7.gismeteo.ru/static/diary/img/sun-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span>Ш</span></td>
																					</tr>
																		</tbody>
								</table>
													</div>
						<div class=clear></div>
						<div id=legend_block>
							<center><label>Условные обозначения:</label></center>
							<div id=legend>
								<div id=cloudness_labels>
									<div class=label_smallsize><img src=//st8.gismeteo.ru/static/diary/img/sun.png class='png screen_icon' /><img src=//st4.gismeteo.ru/static/diary/img/sun-bw.gif class='print_icon' /><dl>Ясно</dl></div>
									<div class=label_smallsize><img src=//st5.gismeteo.ru/static/diary/img/sunc.png class='png screen_icon' /><img src=//st6.gismeteo.ru/static/diary/img/sunc-bw.gif class='print_icon' /><dl>Малооблачно</dl></div>
									<div class=label_smallsize><img src=//st7.gismeteo.ru/static/diary/img/suncl.png class='png screen_icon' /><img src=//st8.gismeteo.ru/static/diary/img/suncl-bw.gif class='print_icon' /><dl>Облачно</dl></div>
									<div class=label_smallsize><img src=//st4.gismeteo.ru/static/diary/img/dull.png class='png screen_icon' /><img src=//st5.gismeteo.ru/static/diary/img/dull-bw.gif class='print_icon' /><dl>Пасмурно</dl></div>
									<div class=clear></div>
								</div>
								<div id=precipitations_labels>
									<div class=label_bigsize><img src=//st6.gismeteo.ru/static/diary/img/rain.png class='png screen_icon' /><img src=//st7.gismeteo.ru/static/diary/img/rain-bw.png class='print_icon' /><dl>Дождь</dl></div>
									<div class=label_bigsize><img src=//st8.gismeteo.ru/static/diary/img/snow.png class='png screen_icon' /><img src=//st4.gismeteo.ru/static/diary/img/snow-bw.png class='print_icon' /><dl>Снег</dl></div>
									<div class=label_bigsize><img src=//st5.gismeteo.ru/static/diary/img/storm.png class='png screen_icon' /><img src=//st6.gismeteo.ru/static/diary/img/storm-bw.gif class='print_icon' /><dl>гроза</dl></div>
								</div>
								<div id=tempwind_labels>
									<div class=label_bigsize><img src=//st7.gismeteo.ru/static/diary/img/temp.gif class='screen_icon' /><img src=//st8.gismeteo.ru/static/diary/img/temp-bw.gif class='print_icon' /><dl>Температура</dl></div>
									<div class=label_bigsize><img src=//st4.gismeteo.ru/static/diary/img/wind.gif class='screen_icon' /><img src=//st5.gismeteo.ru/static/diary/img/wind-bw.gif class='print_icon' /><dl>Направление и<br>скорость ветра</dl></div>
								</div>
								<div class=clear></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</div>
</div>
</body>
</html>
`;

export const okEmptyResult = `
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html>
<head>
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
		</div>
	</div>
</div>
</div>
</div>
</body>
</html>
`;

export const brokenPageResult = `
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html>
<head>
</head>
<body>
<div id=pre-container>
	<div id=post-container>
		<div id=container>
			<div id=site_header>
				<div id="header">
<div class="top"></div><div class="bottom"></div>
<a href="//www.gismeteo.ru" id="logo" class="logo" title="Gismeteo.Ru Прогноз погоды."></a>
	<div class="bnr" id="weather-top"></div>
</div>				<div id="mainMenu">
	<ul>
		<li class="tt"><a href="/"><i>Главная</i></a></li>
		<li class="tt"><a href="//www.gismeteo.ru/map/catalog/"><i>Карты</i></a></li>
		<li class="tt"><a href="//www.gismeteo.ru/news/"><i>Новости</i></a></li>
		<li class="tt"><a href="/month/1623/"><i>Месяц</i></a></li>
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
					Париж, сентябрь 2015
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
<option label="2015" value="2015" selected="selected">2015</option>
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
									<div id="page_title"><h1> Дневник погоды в Париже за Сентябрь 2015 г.</h1></div>
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
																							<td class='first_in_group positive'>+21</td>
												<td>759</td>
												<td>&mdash;</td>
												<td></td>
												<td><span><img src="//st6.gismeteo.ru/static/diary/img/w7.gif" class='screen_icon' /><img src="//st7.gismeteo.ru/static/diary/img/w7-bw.gif" class='print_icon' /><br />СЗ 5м/с</span></td>
																																		<td class='first_in_group positive'>+16</td>
												<td>761</td>
												<td>&mdash;</td>
												<td></td>
												<td><span><img src="//st8.gismeteo.ru/static/diary/img/w7.gif" class='screen_icon' /><img src="//st4.gismeteo.ru/static/diary/img/w7-bw.gif" class='print_icon' /><br />СЗ 5м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>2</td>
																							<td class='first_in_group positive'>+19</td>
												<td>758</td>
												<td>&mdash;</td>
												<td></td>
												<td><span><img src="//st5.gismeteo.ru/static/diary/img/w7.gif" class='screen_icon' /><img src="//st6.gismeteo.ru/static/diary/img/w7-bw.gif" class='print_icon' /><br />СЗ 4м/с</span></td>
																																		<td class='first_in_group positive'>+13</td>
												<td>759</td>
												<td><img src=//st7.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st8.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st4.gismeteo.ru/static/diary/img/w7.gif" class='screen_icon' /><img src="//st5.gismeteo.ru/static/diary/img/w7-bw.gif" class='print_icon' /><br />СЗ 4м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>3</td>
																							<td class='first_in_group positive'>+18</td>
												<td>758</td>
												<td><img src=//st6.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st7.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st8.gismeteo.ru/static/diary/img/w7.gif" class='screen_icon' /><img src="//st4.gismeteo.ru/static/diary/img/w7-bw.gif" class='print_icon' /><br />СЗ 6м/с</span></td>
																																		<td class='first_in_group positive'>+15</td>
												<td>759</td>
												<td><img src=//st5.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st6.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st7.gismeteo.ru/static/diary/img/w7.gif" class='screen_icon' /><img src="//st8.gismeteo.ru/static/diary/img/w7-bw.gif" class='print_icon' /><br />СЗ 6м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>4</td>
																							<td class='first_in_group positive'>+16</td>
												<td>759</td>
												<td><img src=//st4.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st5.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st6.gismeteo.ru/static/diary/img/w7.gif" class='screen_icon' /><img src="//st7.gismeteo.ru/static/diary/img/w7-bw.gif" class='print_icon' /><br />СЗ 5м/с</span></td>
																																		<td class='first_in_group positive'>+14</td>
												<td>760</td>
												<td><img src=//st8.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st4.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st5.gismeteo.ru/static/diary/img/w7.gif" class='screen_icon' /><img src="//st6.gismeteo.ru/static/diary/img/w7-bw.gif" class='print_icon' /><br />СЗ 5м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>5</td>
																							<td class='first_in_group positive'>+19</td>
												<td>761</td>
												<td><img src=//st7.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st8.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st4.gismeteo.ru/static/diary/img/w7.gif" class='screen_icon' /><img src="//st5.gismeteo.ru/static/diary/img/w7-bw.gif" class='print_icon' /><br />СЗ 5м/с</span></td>
																																		<td class='first_in_group positive'>+14</td>
												<td>764</td>
												<td><img src=//st6.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st7.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st8.gismeteo.ru/static/diary/img/w7.gif" class='screen_icon' /><img src="//st4.gismeteo.ru/static/diary/img/w7-bw.gif" class='print_icon' /><br />СЗ 5м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>6</td>
																							<td class='first_in_group positive'>+17</td>
												<td>767</td>
												<td><img src=//st5.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st6.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st7.gismeteo.ru/static/diary/img/w0.gif" class='screen_icon' /><img src="//st8.gismeteo.ru/static/diary/img/w0-bw.gif" class='print_icon' /><br />С 3м/с</span></td>
																																		<td class='first_in_group positive'>+13</td>
												<td>767</td>
												<td>&mdash;</td>
												<td></td>
												<td><span><img src="//st4.gismeteo.ru/static/diary/img/w0.gif" class='screen_icon' /><img src="//st5.gismeteo.ru/static/diary/img/w0-bw.gif" class='print_icon' /><br />С 3м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>7</td>
																							<td class='first_in_group positive'>+19</td>
												<td>767</td>
												<td><img src=//st6.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st7.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st8.gismeteo.ru/static/diary/img/w0.gif" class='screen_icon' /><img src="//st4.gismeteo.ru/static/diary/img/w0-bw.gif" class='print_icon' /><br />С 4м/с</span></td>
																																		<td class='first_in_group positive'>+16</td>
												<td>767</td>
												<td><img src=//st5.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st6.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st7.gismeteo.ru/static/diary/img/w0.gif" class='screen_icon' /><img src="//st8.gismeteo.ru/static/diary/img/w0-bw.gif" class='print_icon' /><br />С 4м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>8</td>
																							<td class='first_in_group positive'>+18</td>
												<td>764</td>
												<td><img src=//st4.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st5.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st6.gismeteo.ru/static/diary/img/w1.gif" class='screen_icon' /><img src="//st7.gismeteo.ru/static/diary/img/w1-bw.gif" class='print_icon' /><br />СВ 4м/с</span></td>
																																		<td class='first_in_group positive'>+14</td>
												<td>763</td>
												<td>&mdash;</td>
												<td></td>
												<td><span><img src="//st8.gismeteo.ru/static/diary/img/w1.gif" class='screen_icon' /><img src="//st4.gismeteo.ru/static/diary/img/w1-bw.gif" class='print_icon' /><br />СВ 4м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>9</td>
																							<td class='first_in_group positive'>+22</td>
												<td>759</td>
												<td>&mdash;</td>
												<td></td>
												<td><span><img src="//st5.gismeteo.ru/static/diary/img/w2.gif" class='screen_icon' /><img src="//st6.gismeteo.ru/static/diary/img/w2-bw.gif" class='print_icon' /><br />В 6м/с</span></td>
																																		<td class='first_in_group positive'>+16</td>
												<td>760</td>
												<td>&mdash;</td>
												<td></td>
												<td><span><img src="//st7.gismeteo.ru/static/diary/img/w2.gif" class='screen_icon' /><img src="//st8.gismeteo.ru/static/diary/img/w2-bw.gif" class='print_icon' /><br />В 6м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>10</td>
																							<td class='first_in_group positive'>+23</td>
												<td>758</td>
												<td>&mdash;</td>
												<td></td>
												<td><span><img src="//st4.gismeteo.ru/static/diary/img/w2.gif" class='screen_icon' /><img src="//st5.gismeteo.ru/static/diary/img/w2-bw.gif" class='print_icon' /><br />В 5м/с</span></td>
																																		<td class='first_in_group positive'>+14</td>
												<td>759</td>
												<td>&mdash;</td>
												<td></td>
												<td><span><img src="//st6.gismeteo.ru/static/diary/img/w2.gif" class='screen_icon' /><img src="//st7.gismeteo.ru/static/diary/img/w2-bw.gif" class='print_icon' /><br />В 5м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>11</td>
																							<td class='first_in_group positive'>+23</td>
												<td>756</td>
												<td><img src=//st8.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st4.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st5.gismeteo.ru/static/diary/img/w3.gif" class='screen_icon' /><img src="//st6.gismeteo.ru/static/diary/img/w3-bw.gif" class='print_icon' /><br />ЮВ 2м/с</span></td>
																																		<td class='first_in_group positive'>+18</td>
												<td>755</td>
												<td><img src=//st7.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st8.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st4.gismeteo.ru/static/diary/img/w3.gif" class='screen_icon' /><img src="//st5.gismeteo.ru/static/diary/img/w3-bw.gif" class='print_icon' /><br />ЮВ 2м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>12</td>
																							<td class='first_in_group positive'>+18</td>
												<td>754</td>
												<td><img src=//st6.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st7.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st8.gismeteo.ru/static/diary/img/w4.gif" class='screen_icon' /><img src="//st4.gismeteo.ru/static/diary/img/w4-bw.gif" class='print_icon' /><br />Ю 4м/с</span></td>
																																		<td class='first_in_group positive'>+14</td>
												<td>755</td>
												<td><img src=//st5.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st6.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st7.gismeteo.ru/static/diary/img/w4.gif" class='screen_icon' /><img src="//st8.gismeteo.ru/static/diary/img/w4-bw.gif" class='print_icon' /><br />Ю 4м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>13</td>
																							<td class='first_in_group'><img src="//st4.gismeteo.ru/static/diary/img/still.gif" class='label_icon label_small screen_icon' /><img src="//st5.gismeteo.ru/static/diary/img/still-bw.gif" class='label_icon label_small print_icon' /></td>
												<td><img src="//st6.gismeteo.ru/static/diary/img/still.gif" class='label_icon label_small screen_icon' /><img src="//st7.gismeteo.ru/static/diary/img/still-bw.gif" class='label_icon label_small print_icon' /></td>
												<td><img src="//st8.gismeteo.ru/static/diary/img/still.gif" class='label_icon label_small screen_icon' /><img src="//st4.gismeteo.ru/static/diary/img/still-bw.gif" class='label_icon label_small print_icon' /></td>
												<td><img src="//st5.gismeteo.ru/static/diary/img/still.gif" class='label_icon label_small screen_icon' /><img src="//st6.gismeteo.ru/static/diary/img/still-bw.gif" class='label_icon label_small print_icon' /></td>
												<td><img src="//st7.gismeteo.ru/static/diary/img/still.gif" class='label_icon label_small screen_icon' /><img src="//st8.gismeteo.ru/static/diary/img/still-bw.gif" class='label_icon label_small print_icon' /></td>
																																		<td class='first_in_group positive'>+15</td>
												<td>748</td>
												<td>&mdash;</td>
												<td></td>
												<td><span>Ш</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>14</td>
																							<td class='first_in_group positive'>+18</td>
												<td>748</td>
												<td>&mdash;</td>
												<td></td>
												<td><span><img src="//st4.gismeteo.ru/static/diary/img/w5.gif" class='screen_icon' /><img src="//st5.gismeteo.ru/static/diary/img/w5-bw.gif" class='print_icon' /><br />ЮЗ 10м/с</span></td>
																																		<td class='first_in_group positive'>+14</td>
												<td>750</td>
												<td><img src=//st6.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st7.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st8.gismeteo.ru/static/diary/img/w5.gif" class='screen_icon' /><img src="//st4.gismeteo.ru/static/diary/img/w5-bw.gif" class='print_icon' /><br />ЮЗ 10м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>15</td>
																							<td class='first_in_group positive'>+18</td>
												<td>749</td>
												<td><img src=//st5.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st6.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st7.gismeteo.ru/static/diary/img/w5.gif" class='screen_icon' /><img src="//st8.gismeteo.ru/static/diary/img/w5-bw.gif" class='print_icon' /><br />ЮЗ 7м/с</span></td>
																																		<td class='first_in_group positive'>+15</td>
												<td>746</td>
												<td><img src=//st4.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st5.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td><img src=//st6.gismeteo.ru/static/diary/img/rain.png class='label_icon label_small screen_icon' /><img src=//st7.gismeteo.ru/static/diary/img/rain-bw.png class='label_icon label_small print_icon' /></td>
												<td><span><img src="//st8.gismeteo.ru/static/diary/img/w5.gif" class='screen_icon' /><img src="//st4.gismeteo.ru/static/diary/img/w5-bw.gif" class='print_icon' /><br />ЮЗ 7м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>21</td>
																							<td class='first_in_group'><img src="//st5.gismeteo.ru/static/diary/img/still.gif" class='label_icon label_small screen_icon' /><img src="//st6.gismeteo.ru/static/diary/img/still-bw.gif" class='label_icon label_small print_icon' /></td>
												<td><img src="//st7.gismeteo.ru/static/diary/img/still.gif" class='label_icon label_small screen_icon' /><img src="//st8.gismeteo.ru/static/diary/img/still-bw.gif" class='label_icon label_small print_icon' /></td>
												<td><img src="//st4.gismeteo.ru/static/diary/img/still.gif" class='label_icon label_small screen_icon' /><img src="//st5.gismeteo.ru/static/diary/img/still-bw.gif" class='label_icon label_small print_icon' /></td>
												<td><img src="//st6.gismeteo.ru/static/diary/img/still.gif" class='label_icon label_small screen_icon' /><img src="//st7.gismeteo.ru/static/diary/img/still-bw.gif" class='label_icon label_small print_icon' /></td>
												<td><img src="//st8.gismeteo.ru/static/diary/img/still.gif" class='label_icon label_small screen_icon' /><img src="//st4.gismeteo.ru/static/diary/img/still-bw.gif" class='label_icon label_small print_icon' /></td>
																																		<td class='first_in_group positive'>+16</td>
												<td>751</td>
												<td><img src=//st5.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st6.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span>Ш</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>22</td>
																							<td class='first_in_group positive'>ONLY ONE TO FAIL</td>
																					</tr>
																																							<tr align="center">
											<td class=first>23</td>
																							<td class='first_in_group positive'>+18</td>
												<td>755</td>
												<td><img src=//st5.gismeteo.ru/static/diary/img/suncl.png class='label_icon label_small screen_icon' /><img src=//st6.gismeteo.ru/static/diary/img/suncl-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st7.gismeteo.ru/static/diary/img/w6.gif" class='screen_icon' /><img src="//st8.gismeteo.ru/static/diary/img/w6-bw.gif" class='print_icon' /><br />З 3м/с</span></td>
																																		<td class='first_in_group positive'>+13</td>
												<td>757</td>
												<td><img src=//st4.gismeteo.ru/static/diary/img/suncl.png class='label_icon label_small screen_icon' /><img src=//st5.gismeteo.ru/static/diary/img/suncl-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st6.gismeteo.ru/static/diary/img/w6.gif" class='screen_icon' /><img src="//st7.gismeteo.ru/static/diary/img/w6-bw.gif" class='print_icon' /><br />З 3м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>24</td>
																							<td class='first_in_group positive'>+17</td>
												<td>758</td>
												<td><img src=//st8.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st4.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st5.gismeteo.ru/static/diary/img/w4.gif" class='screen_icon' /><img src="//st6.gismeteo.ru/static/diary/img/w4-bw.gif" class='print_icon' /><br />Ю 3м/с</span></td>
																																		<td class='first_in_group positive'>+15</td>
												<td>759</td>
												<td><img src=//st7.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st8.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st4.gismeteo.ru/static/diary/img/w4.gif" class='screen_icon' /><img src="//st5.gismeteo.ru/static/diary/img/w4-bw.gif" class='print_icon' /><br />Ю 3м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>26</td>
																							<td class='first_in_group positive'>+18</td>
												<td>762</td>
												<td><img src=//st4.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st5.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st6.gismeteo.ru/static/diary/img/w0.gif" class='screen_icon' /><img src="//st7.gismeteo.ru/static/diary/img/w0-bw.gif" class='print_icon' /><br />С 3м/с</span></td>
																																		<td class='first_in_group positive'>+15</td>
												<td>763</td>
												<td><img src=//st8.gismeteo.ru/static/diary/img/suncl.png class='label_icon label_small screen_icon' /><img src=//st4.gismeteo.ru/static/diary/img/suncl-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st5.gismeteo.ru/static/diary/img/w0.gif" class='screen_icon' /><img src="//st6.gismeteo.ru/static/diary/img/w0-bw.gif" class='print_icon' /><br />С 3м/с</span></td>
																					</tr>
																																							<tr align="center">
											<td class=first>27</td>
																							<td class='first_in_group positive'>+19</td>
												<td>764</td>
												<td><img src=//st7.gismeteo.ru/static/diary/img/sun.png class='label_icon label_small screen_icon' /><img src=//st8.gismeteo.ru/static/diary/img/sun-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span><img src="//st4.gismeteo.ru/static/diary/img/w0.gif" class='screen_icon' /><img src="//st5.gismeteo.ru/static/diary/img/w0-bw.gif" class='print_icon' /><br />С 5м/с</span></td>
																																		<td class='first_in_group'><img src="//st6.gismeteo.ru/static/diary/img/still.gif" class='label_icon label_small screen_icon' /><img src="//st7.gismeteo.ru/static/diary/img/still-bw.gif" class='label_icon label_small print_icon' /></td>
												<td><img src="//st8.gismeteo.ru/static/diary/img/still.gif" class='label_icon label_small screen_icon' /><img src="//st4.gismeteo.ru/static/diary/img/still-bw.gif" class='label_icon label_small print_icon' /></td>
												<td><img src="//st5.gismeteo.ru/static/diary/img/still.gif" class='label_icon label_small screen_icon' /><img src="//st6.gismeteo.ru/static/diary/img/still-bw.gif" class='label_icon label_small print_icon' /></td>
												<td><img src="//st7.gismeteo.ru/static/diary/img/still.gif" class='label_icon label_small screen_icon' /><img src="//st8.gismeteo.ru/static/diary/img/still-bw.gif" class='label_icon label_small print_icon' /></td>
												<td class=last><img src="//st4.gismeteo.ru/static/diary/img/still.gif" class='label_icon label_small screen_icon' /><img src="//st5.gismeteo.ru/static/diary/img/still-bw.gif" class='label_icon label_small print_icon' /></td>
                                      </tr>
                                                                              <tr align="center">
                        <td class=first>25</td>
                                                <td class='first_in_group positive'>+18</td>
                          <td>761</td>
                          <td><img src=//st6.gismeteo.ru/static/diary/img/dull.png class='label_icon label_small screen_icon' /><img src=//st7.gismeteo.ru/static/diary/img/dull-bw.gif class='label_icon label_small print_icon' /></td>
                          <td></td>
                          <td><span><img src="//st8.gismeteo.ru/static/diary/img/w0.gif" class='screen_icon' /><img src="//st4.gismeteo.ru/static/diary/img/w0-bw.gif" class='print_icon' /><br />С 3м/с</span></td>
                                                                      <td class='first_in_group positive'>+14</td>
                          <td>762</td>
                          <td><img src=//st5.gismeteo.ru/static/diary/img/suncl.png class='label_icon label_small screen_icon' /><img src=//st6.gismeteo.ru/static/diary/img/suncl-bw.gif class='label_icon label_small print_icon' /></td>
                          <td></td>
                          <td><span><img src="//st7.gismeteo.ru/static/diary/img/w0.gif" class='screen_icon' /><img src="//st8.gismeteo.ru/static/diary/img/w0-bw.gif" class='print_icon' /><br />С 3м/с</span></td>
                                        </tr>
																																							<tr align="center">
											<td class=first>28</td>
																							<td class='first_in_group'><img src="//st6.gismeteo.ru/static/diary/img/still.gif" class='label_icon label_small screen_icon' /><img src="//st7.gismeteo.ru/static/diary/img/still-bw.gif" class='label_icon label_small print_icon' /></td>
												<td><img src="//st8.gismeteo.ru/static/diary/img/still.gif" class='label_icon label_small screen_icon' /><img src="//st4.gismeteo.ru/static/diary/img/still-bw.gif" class='label_icon label_small print_icon' /></td>
												<td><img src="//st5.gismeteo.ru/static/diary/img/still.gif" class='label_icon label_small screen_icon' /><img src="//st6.gismeteo.ru/static/diary/img/still-bw.gif" class='label_icon label_small print_icon' /></td>
												<td><img src="//st7.gismeteo.ru/static/diary/img/still.gif" class='label_icon label_small screen_icon' /><img src="//st8.gismeteo.ru/static/diary/img/still-bw.gif" class='label_icon label_small print_icon' /></td>
												<td><img src="//st4.gismeteo.ru/static/diary/img/still.gif" class='label_icon label_small screen_icon' /><img src="//st5.gismeteo.ru/static/diary/img/still-bw.gif" class='label_icon label_small print_icon' /></td>
																																		<td class='first_in_group positive'>+14</td>
												<td>767</td>
												<td><img src=//st6.gismeteo.ru/static/diary/img/sun.png class='label_icon label_small screen_icon' /><img src=//st7.gismeteo.ru/static/diary/img/sun-bw.gif class='label_icon label_small print_icon' /></td>
												<td></td>
												<td><span>Ш</span></td>
																					</tr>
																		</tbody>
								</table>
													</div>
						<div class=clear></div>
						<div id=legend_block>
							<center><label>Условные обозначения:</label></center>
							<div id=legend>
								<div id=cloudness_labels>
									<div class=label_smallsize><img src=//st8.gismeteo.ru/static/diary/img/sun.png class='png screen_icon' /><img src=//st4.gismeteo.ru/static/diary/img/sun-bw.gif class='print_icon' /><dl>Ясно</dl></div>
									<div class=label_smallsize><img src=//st5.gismeteo.ru/static/diary/img/sunc.png class='png screen_icon' /><img src=//st6.gismeteo.ru/static/diary/img/sunc-bw.gif class='print_icon' /><dl>Малооблачно</dl></div>
									<div class=label_smallsize><img src=//st7.gismeteo.ru/static/diary/img/suncl.png class='png screen_icon' /><img src=//st8.gismeteo.ru/static/diary/img/suncl-bw.gif class='print_icon' /><dl>Облачно</dl></div>
									<div class=label_smallsize><img src=//st4.gismeteo.ru/static/diary/img/dull.png class='png screen_icon' /><img src=//st5.gismeteo.ru/static/diary/img/dull-bw.gif class='print_icon' /><dl>Пасмурно</dl></div>
									<div class=clear></div>
								</div>
								<div id=precipitations_labels>
									<div class=label_bigsize><img src=//st6.gismeteo.ru/static/diary/img/rain.png class='png screen_icon' /><img src=//st7.gismeteo.ru/static/diary/img/rain-bw.png class='print_icon' /><dl>Дождь</dl></div>
									<div class=label_bigsize><img src=//st8.gismeteo.ru/static/diary/img/snow.png class='png screen_icon' /><img src=//st4.gismeteo.ru/static/diary/img/snow-bw.png class='print_icon' /><dl>Снег</dl></div>
									<div class=label_bigsize><img src=//st5.gismeteo.ru/static/diary/img/storm.png class='png screen_icon' /><img src=//st6.gismeteo.ru/static/diary/img/storm-bw.gif class='print_icon' /><dl>гроза</dl></div>
								</div>
								<div id=tempwind_labels>
									<div class=label_bigsize><img src=//st7.gismeteo.ru/static/diary/img/temp.gif class='screen_icon' /><img src=//st8.gismeteo.ru/static/diary/img/temp-bw.gif class='print_icon' /><dl>Температура</dl></div>
									<div class=label_bigsize><img src=//st4.gismeteo.ru/static/diary/img/wind.gif class='screen_icon' /><img src=//st5.gismeteo.ru/static/diary/img/wind-bw.gif class='print_icon' /><dl>Направление и<br>скорость ветра</dl></div>
								</div>
								<div class=clear></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</div>
</div>
</body>
</html>
`;
