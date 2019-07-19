'use strict';


(function($) {
	
	function generateModalContent(thisID) {
		/* ------------------------- Experience ------------------------------------------------------- */
		if (thisID === 'jsExITEC') {
			return `
				<div class="exDesc">
					<mark class="ex"><b>ITEC Entertainment</b></mark><br>
					Orlando, FL<br>
					<i>2016 to Present</i><br>
					<i><b>Sr Control Systems Engineer</b></i>
					<ul>
						<li>Ride / Show control systems design</li> 
						<li>PLC / HMI programming</li>
						<li>Show programming</li> 
						<li>System commissioning</li> 
						<li>Custom hardware / software design</li>
					</ul>
				</div>		
			`;
		} if (thisID === 'jsExUC') {
			return `
				<div class="exDesc">
					<mark class="ex"><b>Universal Creative</b></mark><br>
					Orlando, FL<br>
					<i>2015 to 2016</i><br>
					<i><b>Technical Manager</b></i>
					<ul>
						<li>Ride system design, engineering and commissioning.</li> 
						<ul>
							<li>Blue Sky creative process for new attractions</li>
							<li>RFP and technical specifications</li> 
							<li>Consulting with vendors on creative / technical requirements</li>
							<li>Custom ride software development</li>
							<li>Solving hardware / software controls challenges</li> 
							<li>FAT / SAT / commissioning</li>
						</ul>
					</ul>
				</div>
			`;
		} if (thisID === 'jsExWDC') {
			return `
				<div class="exDesc">
					<mark class="ex"><b>The Walt Disney Company</b></mark><br>
					Orlando, FL<br>
					<i>2010 to 2015</i><br>
					<i><b>Sr Systems Specialist, Scientific Systems, Walt Disney Imagineering</b></i>
					<ul>
						<li>Design, implementation and support of hardware and software for Animatronics and show systems.</li>	
						<li>Design and integration of new multimedia control systems.</li>
						<li>WDI / Show Systems Development group
							<ul>
								<li>Prototyping special effects</li>
								<li>Design of custom control systems for animated figures</li>
								<li>Hardware / PCB / software development for embedded control</li>
								<li>Large scale HMI design</li>
							</ul>
						</li>
						<li><a href="https://globaldossier.uspto.gov/#/result/patent/US/9272228/123086">Patent US 9272228 B2</a>
							<ul>
								<li>Full duplex, wireless control system for interactive costumed characters</li>
								<li>Issued March 01, 2016</li>
							</ul>
						</li>
					</ul>
				</div>
			`;
		} if (thisID === 'jsExOES') {
			return `
				<div class="exDesc">
					<mark class="ex"><b>Oceaneering Entertainment Systems</b></mark><br>
					Orlando, FL<br>	
					<i>2008 to 2010</i><br>	
					<i><b>Electrical Engineer</b></i><br>
					<ul>
						<li>Design and implementation of electronics and PLC based control systems for a variety of clients including the world's most popular theme parks and shows.</li>
						<li>Consult with designers, clients and fabrication shop to integrate functionality and control into designs.</li>	
						<li>Hardware/software design, integration and implementation for ride systems.</li>
					</ul>
				</div>
			`;
		} if (thisID === 'jsExBEI') {
			return `
				<div class="exDesc">
					<mark class="ex"><b>Birket Engineering, Inc.</b></mark><br>
					Orlando, FL<br>	
					<i>2007 to 2008</i><br>	
					<i><b>Electronics Design Engineer</b></i><br>
					<ul>
						<li>Design and implementation of custom lighting products and control systems for a variety of clients including the world's most popular theme parks and shows.</li>	
						<li>Consult with show designers and fabrication shop to integrate functionality and control into new and existing designs.</li>	
						<li>Assist with hardware/software design and implementation for rides and attractions.</li>
					</ul>
				</div>
			`;
		} if (thisID === 'jsExSST') {
			return `
				<div class="exDesc">
					<mark class="ex"><b>Sight & Sound Theatres</b></mark><br>
					Strasburg, PA<br>
					<i>1998 to 2007</i><br>	
					<i><b>Electronics/Animatronics Design Engineer</b></i><br>	
					<ul>
						<li>Design, construction, installation, programming and repair of a wide variety of commercial and custom control systems and devices, primarily entertainment related. Custom designs vary widely depending on the company's need, and range from simple devices such as an audio switcher, to a complete DSP-based motion control interface card.</li>	
						<li>Consult with show designers and fabrication shop to integrate functionality and control into new and existing animatronic designs.</li>	
						<li>Hardware/software design and implementation for animatronic and automated control.</li>	
						<li>Programming and maintenance of over 200 animatronic devices including a 2 ton motion base.</li>
					</ul>
				</div>
			`;
		} if (thisID === 'jsExACI') {
			return `
				<div class="exDesc">
					<mark class="ex"><b>Auto Control Inc.</b></mark><br>
					Columbus, OH<br>
					<i>1997-1998</i><br>	
					<i><b>Technician (Intern)</b></i><br>
					<ul>
						<li>Mechanical and electrical assembly of industrial control equipment.</li>	
						<li>Loading and testing system software.</li>
					</ul>
				</div>
			`;
		} if (thisID === 'jsExTB') {
			return `
				<div class="exDesc">
					<mark class="ex"><b>Theme Builders</b></mark><br>
					Columbus, OH<br>
					<i>1996-1998</i><br>
					<i><b>Control Design Engineer (contract)</b></i><br>
					<ul>
						<li>Design and installation of custom and commercial lighting, audio and control equipment at the Franklin Park Conservatory for a temporary themed exibit including simulated thunder and lightning storms and a tornado.</li>	
						<li>Design and implementation of custom special effects and control equipment for stage productions and other venues.</li>
					</ul>
				</div>
			`;
		} if (thisID === 'jsExGBC') {
			return `
				<div class="exDesc">
					<mark class="ex"><b>Grace Brethren Church</b></mark><br>
					Columbus, OH<br>	
					<i>1996-1998</i><br>		
					<i><b>Audio/Video/Lighting Technician (Part Time)</b></i><br>		
					<ul>
						<li>House Sound Engineer involving live mix of vocals, a 200 member choir and a 40 piece orchestra in a 3,000 seat auditorium with a stereo house system.</li>	
						<li>Produced promo and infomercial videos including on-location shooting and in-house editing using an Avid system.</li>	
						<li>Setup, repair and coordination of in-house lighting system</li>
					</ul>
				</div>
			`;
		} if (thisID === 'jsExAOA') {
			return `
				<div class="exDesc">
					<mark class="ex"><b>Academy Of Arts</b></mark><br>
					Greenville, SC<br>	
					<i>1994-1995</i><br>
					<i><b>Lead Technician</b></i><br>	
					<ul>
						<li>Design, construction, repair and maintenance of lighting, audio and show control equipment, sets and props. Traveling with a drama production</li>
					</ul>
		
					<i><b>Recording Engineer</b></i><br>	
					<ul>
						<li>Recording and mixdown of vocals and orchestration</li>
					</ul>
		
					<i><b>Instructor</b></i><br>	
					<ul>
						<li>Teaching audio and lighting fundamentals to high-school and college students</li>
					</ul>
		
					<i><b>Drama team leader</b></i><br>	
		
					<i><b>Actor</b></i><br>	
					<ul>
						<li>Lead acting roles</li>
					</ul>
				</div>
			`;
		} if (thisID === 'jsExMHBCI') {
			return `
				<div class="exDesc">
					<mark class="ex"><b>Mars Hill Broadcasting Co. Inc.</b></mark><br>
					Syracuse, N.Y.<br>
					<i>1992-1994; 1995-1996</i><br>
					<i><b>Producer</b></i><br>	
					<ul>
						<li>Host and producer of a weekly in-house radio program</li>
					</ul>
		
					<i><b>Announcer</b></i><br>	
					<ul>
						<li>Board operator and D.J. for news, sports, weather, music, etc.</li>
					</ul>
		
					<i><b>Technician</b></i><br>	
					<i><b>Audio technician and recording engineer</b></i><br>
				</div>
			`;
			/* ------------------------- Projects ------------------------------------------------------- */
		} if (thisID === 'jsPrShowController') {
			return `
				<div class="prDesc">
					<mark class="pr"><b>Custom interactive show controller</b></mark>
					<p>
					Hardware, software and productization of systems for cutting edge attractions featuring new levels of guest interaction. Projects involved the development of custom embedded hardware and software including show control engines, motion control, audio, wireless communications, USB, Ethernet and more. Designing requires working with remote teams and creative directors to ensure the desired results.
					</p>
				</div>		
			`;
		} if (thisID === 'jsPrHMIDesign') {
			return `
				<div class="prDesc">
					<mark class="pr"><b>HMI design for night time show</b></mark>
					<p>
					HMI design, development and installation for a large theme park. Design used Iconics Graphwoxs software as well as Scriptworx, AlarmWorx and DataWorx. Software interfaces to other standard and proprietary systems to control park wide lighting, audio, fireworks systems, flame systems and other special effects.
					</p>
				</div>		
			`;
		} if (thisID === 'jsPrCusMoDes') {
			return `
				<div class="prDesc">
					<mark class="pr"><b>Custom motion control hardware design</b></mark>
					<p>
					Hardware design for a custom live animation motion control system. Design of printed circuit boards as part of a wireless mobile system for battery operated motor driven animation.
					</p>
				</div>		
			`;
		} if (thisID === 'jsPrRideEquip') {
			return `
				
				<div class="prDesc">
					<mark class="pr"><b>Ride equipment installation / testing, Singapore</b></mark>
					<p>
					Commissioned show action equipment and control system in an attraction for a major theme park in Singapore. Installed and tested PLC software, worked and coordinated with other vendors to integrate with multiple systems. Conducted FAT and SAT testing as well as operations training.
					</p>
				</div>		
			`;
		} if (thisID === 'jsPrCusStageAuto') {
			return `
				<div class="prDesc">
					<mark class="pr"><b>Custom Stage automation software design</b></mark>
					<p>
					Created custom Windows-based software for a large theatre in NYC. This program interfaces in real time with a PLC system that controls large moving stages and turntables. The software allows the operator to create cues in a scripting format. The program parses, interptrets and executes the cues in the desired sequences while simultaneously coordinating cues with live conditions on stage.
					</p>
				</div>		
			`;
		} if (thisID === 'jsPrDarkRide') {
			return `
				<div class="prDesc">
					<mark class="pr"><b>Dark ride control system</b></mark>
					<p>
					Electrical / Control system design team member for a large multilevel 3D moving motion base ride. Project involved working with the client and other teams to meet (And exceed where possible)  technical and creative requirements.
					</p>
				</div>		
			`;
		} if (thisID === 'jsPrRideVehicle') {
			return `
				<div class="prDesc">
					<mark class="pr"><b>Ride vehicle control design / testing</b></mark>
					<p>
					Design and FAT / performance testing of hardware and software for custom ride vehicles. This included PLC software design, hardware design, creating test plans and performing field installation and testing.
					</p>
				</div>		
			`;
		} if (thisID === 'jsPrCusDMX') {
			return `
				<div class="prDesc">
					<mark class="pr"><b>Custom DMX lighting controller / sequencer</b></mark>
					<p>
					This project involved designing custom hardware and software for recording DMX data and streaming it back syncronized to SMPTE for control of costume lighing effects.
					</p>
				</div>		
			`;
		} if (thisID === 'jsPrDesignSpecAni') {
			return `
				<div class="prDesc">
					<mark class="pr"><b>Design specification for animated characters</b></mark>
					<p>
					Design specifications for the control system and electrical hardware in animated character costumes in attractions at a major theme park.
					</p>
				</div>		
			`;
		} if (thisID === 'jsPrMotProfSoft') {
			return `
				<div class="prDesc">
					<mark class="pr"><b>Motion profile software design</b></mark>
					<p>
					Developed a Windows based application that can graphically edit data streams on a timeline. For use in motion applications such as animatronics, motion bases, etc. Data can be manipulated in standard ways a well as splines and ramps with the ability to save to custom file formats, PLCs, etc.
					</p>
				</div>		
			`;
		} if (thisID === 'jsPrBroadwayCos') {
			return `
				<div class="prDesc">
					<mark class="pr"><b>Broadway costume lighting controller</b></mark>
					<p>
					This is the design and implementation of a custom microprocessor based LED controller for electric eel characters in a new Broadway show. The small black box is worn on the actor's waist and is wired via connectors to several LED lighting harnesses in the costume. A custom graphical PC interface allows a designer to plug into the box and change and save the look of the effects, which are triggered by buttons embedded in the costume.
					</p>
				</div>		
			`;
		} if (thisID === 'jsPrStormyBoat') {
			return `
				<div class="prDesc">
					<mark class="pr"><b>The "Stormy Boat" motion base</b></mark>
					<p>
					This project involved the design and build of the control systems for a large pneumatically driven motion base boat. The boat is a set piece in a large thratrical show and carries 12 actors. I utilized my "Simba Two" motion control hardware along with safety systems to operate the motion base. Custom software and algorithms were prototyped and employed to achive the desired function and artisitc look. I also programmed the motion profile for the show.
					</p>
				</div>		
			`;
		} if (thisID === 'jsPrAniProg') {
			return `
				<div class="prDesc">
					<mark class="pr"><b>Animatronics programming</b></mark>
					<p>
					This scope was part of an overall animatronics design project and involved the programming and show integration of large animatronics figures.
					</p>
				</div>		
			`;
		} if (thisID === 'jsPrAniFigDes') {
			return `
				<div class="prDesc">
					<mark class="pr"><b>Animatronic figure design</b></mark>
					<p>
					Design and integration of motion systems in animatronic figures. This involved working with mechanical engineers, fabricators, finish artists and producers.
					</p>
				</div>		
			`;
		} if (thisID === 'jsPrSimbaTwo') {
			return `
				<div class="prDesc">
					<mark class="pr"><b>Simba-Two Animatronics Interface System</b></mark>
					<p>
					This is version two of the custom "animatronics" interface system designed for Sight & Sound. This new version of the board keeps the same base functionality of the "Simba-One" board but I added the following features:
						<ul>
							<li>Six bipolar analog inputs for sensors such as load cells to incorporate compliance motion technology</li>
							<li>The original 8 analog outputs now have a bipolar range</li>
							<li>An integrated Ethernet communications port</li>
							<li>Additional RAM and Flash for added functionality including channel descriptions and motion profiles.</li>
							<li>PC104 interface for industry standard add-on cards</li>
							<li>Two quadrature encoder input channels</li>
							<li>New connector scheme for easier installation and panel layout</li>
						</ul>
					The Simba-Two board was designed to meet the needs of projects for Sight & Sound's new show "In The Beginning" which opened in 2007.
					</p>
				</div>		
			`;
		} if (thisID === 'jsPrFlickering') {
			return `
				<div class="prDesc">
					<mark class="pr"><b>Flickering lamp controller</b></mark>
					<p>
					Design and build of a small microcontroller-based lamp controller primarily used for a "flame" effect inside of lanterns, etc.
					</p> 
					<p>
					The "Flicker Bug" board can be configured to control either DC or AC lamp loads. This controller is a very flexible device with a wide variety of applications based on the firmware.
					</p>
					<p>
					At its most basic level, it can opperate as a simple DMX lamp dimmer, but it is primarily designed to be a high-end "flicker" controller. There are algorithms in the firmware that generate flame characteristics,  and over 20 programmable parameters that control these algorithms. On top of that, the system is sequencer-based. All of the parameters are programmed as a single frame, and hundreds of frames or "looks" can be sequenced together and executed over time from the 128K on-board EEPROM, giving a truly unique look to each controller without any repetition.
					</p>
					<p>
					Analog inputs on the controller allow accelerometers, switches, etc. to effect the algorithms, or cue the sequencer. External events can cause the sequencer to jump to a specific frame or group of frames, creating a completely unique look based on an event. This feature is used in one appication where a lantern gets dropped and has to flare up and then fade out upon being dropped.
					</p>
					<p>
					The on-board RS485 port allows DMX512 control and PC programming.
					</p>
				</div>		
			`;
		} if (thisID === 'jsPrSimbaOne') {
			return `
				<div class="prDesc">
					<mark class="pr"><b>Simba-One Animatronics Interface System</b></mark>
					<p>
					This project was the complete concept, design, prototype, and production of both hardware and firmware/software for a custom interface system for the animatronics at Sight & Sound. The center of this system is a DSP-based board that implements the DSP56F805 (a 16 bit 80Mips Motorola Flash processor).
					</p>
					<p>
					The board receives DMX from the control software (Sight & Sound uses Gilderfluke's PC-MACS animation software), and will close up to 8 servo loops, 8 analog outputs, 8 Pulse Code Modulation (PCM) outputs, 16 digital (SSR) outputs and 8 digital programmable inputs. All of these functions have dedicated hardware on the board and are all run simultaniously by the DSP. The purpose of this board is to provide complete control of the mutiple mechanisms and mechanism types required by an animatronic figure, all on one board and under the control of one processor.
					</p>
					<p>
					There are no trim pots or any other mechanical adjustments on the board. There is a dedicated half duplex (2 wire) bi-directional RS485 port that communicates to a host computer. One set of dip switches sets the board's comm. address on the system network and all adjustments and monitoring can be done in real-time through the Windows software. The board is not dependent on a host computer to function, the host simply provides an easy, comprehensive and graphical way to set parameters (which are then stored in on-board EEPROM) and monitor functions in real-time if desired.
					</p>
					<p>
					Each channel of each function can be individually assigned to any DMX channel and at 8 or 12 bit resolution.Through the Windows software, the user can set and adjust any parameter needed on the board, in real-time. Some of these parameters include 100% scaleable travel limits, default positions, DMX addresses, gains, PID variables, overrides, brakes, error checking, motion smoothing, filters, etc.
					</p>
					<p>
					One of the main advantages of this interface is the fact that, with firmware changes, it is very open-ended and versitile. It has not only been used in numerous animatronics applications, but it has also been implemented in some other unique applications such as a 2 ton pneumatically driven motion base in the form of a boat. Although it does not have the redundancy factor of a PLC, this project demonstrates its usability as both a PLC-type device as well as a motion controller. It not only receives DMX to control motion, but it has digital inputs and outputs to provide sensing of air pressure, safety interlocks, etc., and provides an operator interface with buttons and lights for overall front-end stop/load/run control.
					</p>
				</div>		
			`;
		} if (thisID === 'jsPrRoboBabies') {
			return `
				<div class="prDesc">
					<mark class="pr"><b>Robo-Babies</b></mark>
					<p>
					Designed and built a custom microprocessor interface to take DMX512 and interface it to RC servo transmitters to run servomotors in robotic babies for some of the shows at Sight & Sound Theatres. This interfaces has an LCD screen that allowsthe user to adjust parameters which are saved in on-board EEPROM.
					</p>
				</div>		
			`;
		} if (thisID === 'jsPrWeather') {
			return `
				<div class="prDesc">
					<mark class="pr"><b>The Weather Adventure</b></mark>
					<p>
					Designed and built control systems for the "Weather Adventure" at a conservatory in Columbus, OH. Project involved providing turn-key effects and attractions for the client. Some of the effects included an avalanche, a thunder and lightning storm involving audio triggering of large strobes, and a simulated tornado involving motion, lights, fog, audo and video all controlled by custom computer software and hardware.
					</p>
				</div>		
			`;
		} if (thisID === 'jsPrChristmasTree') {
			return `
				<div class="prDesc">
					<mark class="pr"><b>The Living Christmas Tree</b></mark>
					<p>
					Conceptualized, designed and built a microprocessor-based lighting controller for thousands of Christmas lights to create a dazzling light show that runs from custom computer software. All of the frames and sequences are downloaded from the PC over the DMX line and stored in on-board RAM, and the real-time fades and chases are generated by the microprocessor.
					</p>
				</div>		
			`;
		} if (thisID === 'jsPrDMXDimmers') {
			return `
				<div class="prDesc">
					<mark class="pr"><b>DMX dimmers</b></mark>
					<p>
					Designed and built custom digital dimmers for specific applications. These microprocessor-based dimmers accept either DMX512 or 0-10 volt control and have an adjustable curve. They also have lamp test buttons on the front pannel and an additional RS485 link for status and configuration.
					</p>
				</div>		
			`;
			/* ------------------------- Daniel in the Lion's Den ------------------------------------------------------- */
		} if (thisID === 'jsGalChris') {
			return `
				<div class="galDesc">
					<img src="Media/AnimatronicsApp/DanielintheLionsDen/Chris7.JPG" class="galImg" alt="Christopher C. Stuart">
				</div>		
			`;
		} if (thisID === 'jsGalDan1') {
			return `
				<div class="galDesc">
					<img src="Media/AnimatronicsApp/DanielintheLionsDen/Dan1.JPG" class="galImg" alt="Dan1">
				</div>		
			`;
		} if (thisID === 'jsGalLion2Small') {
			return `
				<div class="galDesc">
					<img src="Media/AnimatronicsApp/DanielintheLionsDen/daniel_lion_lg.jpg" class="galImg" alt="Lion2Small">
				</div>		
			`;
		} if (thisID === 'jsGalLion3Med') {
			return `
				<div class="galDesc">
					<img src="Media/AnimatronicsApp/DanielintheLionsDen/Lion3Med.jpg" class="galImg" alt="Lion3Med">
				</div>		
			`;
		} if (thisID === 'jsGalLion4Med') {
			return `
				<div class="galDesc">
					<img src="Media/AnimatronicsApp/DanielintheLionsDen/Lion4Med.jpg" class="galImg" alt="Lion4Med">
				</div>		
			`;
		} if (thisID === 'jsGalSimbaPWMDrive') {
			return `
				<div class="galDesc">
					<img src="Media/AnimatronicsApp/DanielintheLionsDen/PC100001.JPG" class="galImg" alt="SimbaPWMDrive">
				</div>		
			`;
			/* ------------------------- Easter Show Stormy Boat Motion Base ------------------------------------------------------- */
		} if (thisID === 'jsGalBTLBoat') {
			return `
				<div class="galDesc">
					<img src="Media/AnimatronicsApp/EasterShowStormyBoatMotionBase/BTLBoat.jpg" class="galImg" alt="BTLBoat">
				</div>		
			`;
		} if (thisID === 'jsGalBTLBoatCU') {
			return `
				<div class="galDesc">
					<img src="Media/AnimatronicsApp/EasterShowStormyBoatMotionBase/BTLBoatCU.jpg" class="galImg" alt="BTLBoatCU">
				</div>		
			`;
		} if (thisID === 'jsGalStormBoat16') {
			return `
				<div class="galDesc">
					<img src="Media/AnimatronicsApp/EasterShowStormyBoatMotionBase/StormBoat16.JPG" class="galImg" alt="StormBoat16">
				</div>		
			`;
		} if (thisID === 'jsGalStormBoat37') {
			return `
				<div class="galDesc">
					<img src="Media/AnimatronicsApp/EasterShowStormyBoatMotionBase/StormBoat37.JPG" class="galImg" alt="StormBoat37">
				</div>		
			`;
			/* ------------------------- In the Beginning ------------------------------------------------------- */
		} if (thisID === 'jsGalAnimationPanel1') {
			return `
				<div class="galDesc">
					<img src="Media/AnimatronicsApp/IntheBeginning/AnimationPanel1.JPG" class="galImg" alt="Animation Panel 1">
				</div>		
			`;
		} if (thisID === 'jsGalDinos1') {
			return `
				<div class="galDesc">
					<img src="Media/AnimatronicsApp/IntheBeginning/Dinos1.JPG" class="galImg" alt="Dinos 1">
				</div>		
			`;
		} if (thisID === 'jsGalG1Large') {
			return `
				<div class="galDesc">
					<img src="Media/AnimatronicsApp/IntheBeginning/G1Large.JPG" class="galImg" alt="G1 Large">
				</div>		
			`;
		} if (thisID === 'jsGalGir4') {
			return `
				<div class="galDesc">
					<img src="Media/AnimatronicsApp/IntheBeginning/Gir4.JPG" class="galImg" alt="Gir 4">
				</div>		
			`;
		} if (thisID === 'jsGalGir7') {
			return `
				<div class="galDesc">
					<img src="Media/AnimatronicsApp/IntheBeginning/Gir7.JPG" class="galImg" alt="Gir 7">
				</div>		
			`;
		} if (thisID === 'jsGalGir8') {
			return `
				<div class="galDesc">
					<img src="Media/AnimatronicsApp/IntheBeginning/Gir8.JPG" class="galImg" alt="Gir 8">
				</div>		
			`;
		} if (thisID === 'jsGalGirPanel') {
			return `
				<div class="galDesc">
					<img src="Media/AnimatronicsApp/IntheBeginning/GirPanel.JPG" class="galImg" alt="Gir Panel">
				</div>		
			`;
		} if (thisID === 'jsGalITBSetup10') {
			return `
				<div class="galDesc">
					<img src="Media/AnimatronicsApp/IntheBeginning/ITBSetup10.JPG" class="galImg" alt="ITB Setup 10">
				</div>		
			`;
		} if (thisID === 'jsGalITBSetup12') {
			return `
				<div class="galDesc">
					<img src="Media/AnimatronicsApp/IntheBeginning/ITBSetup12.JPG" class="galImg" alt="ITB Setup 12">
				</div>		
			`;
		} if (thisID === 'jsGalPB1Large') {
			return `
				<div class="galDesc">
					<img src="Media/AnimatronicsApp/IntheBeginning/PB1Large.JPG" class="galImg" alt="PB1 Large">
				</div>		
			`;
		} if (thisID === 'jsGalPicture009') {
			return `
				<div class="galDesc">
					<img src="Media/AnimatronicsApp/IntheBeginning/Picture009.jpg" class="galImg" alt="Picture 009">
				</div>		
			`;
		} if (thisID === 'jsGalPicture010') {
			return `
				<div class="galDesc">
					<img src="Media/AnimatronicsApp/IntheBeginning/Picture010.jpg" class="galImg" alt="Picture 010">
				</div>		
			`;
			/* ------------------------- Noah's Ark ------------------------------------------------------- */
		} if (thisID === 'jsGalElephant1') {
			return `
				<div class="galDesc">
					<img src="Media/AnimatronicsApp/NoahsArk/elephant1.JPG" class="galImg" alt="Elephant 1">
				</div>		
			`;
		} if (thisID === 'jsGalElephant2') {
			return `
				<div class="galDesc">
					<img src="Media/AnimatronicsApp/NoahsArk/elephant2.JPG" class="galImg" alt="Elephant 2">
				</div>		
			`;
		} if (thisID === 'jsGalElephant4') {
			return `
				<div class="galDesc">
					<img src="Media/AnimatronicsApp/NoahsArk/elephant4.JPG" class="galImg" alt="Elephant 4">
				</div>		
			`;
		} if (thisID === 'jsGalNoah2') {
			return `
				<div class="galDesc">
					<img src="Media/AnimatronicsApp/NoahsArk/Noah2.JPG" class="galImg" alt="Noah 2">
				</div>		
			`;
			/* ------------------------- Broadway Show ------------------------------------------------------- */
		} if (thisID === 'jsGalLiteBug') {
			return `
				<div class="galDesc">
					<img src="Media/BroadwayShow/Hardware_LiteBugPCB.JPG" class="galImg" alt="Lite Bug PCB">
				</div>		
			`;
		} if (thisID === 'jsGalSoftEEL') {
			return `
				<div class="galDesc">
					<img src="Media/BroadwayShow/Software_EELScreen2safe.JPG" class="galImg" alt="Software EEL Screen2safe">
				</div>		
			`;
			/* ------------------------- Flickering Lamp Controller ------------------------------------------------------- */
		} if (thisID === 'jsHardware_PA05') {
			return `
				<div class="galDesc">
					<img src="Media/FlickeringLampController/Hardware_PA110005.JPG" class="galImg" alt="Hardware_PA05">
				</div>		
			`;
		} if (thisID === 'jsHardware_PA06') {
			return `
				<div class="galDesc">
					<img src="Media/FlickeringLampController/Hardware_PA110006.JPG" class="galImg" alt="Hardware_PA06">
				</div>		
			`;
		} if (thisID === 'jsQuadDrive') {
			return `
				<div class="galDesc">
					<img src="Media/FlickeringLampController/QuadDrive.JPG" class="galImg" alt="Quad Drive">
				</div>		
			`;
		} if (thisID === 'jsFlickerBugSoft1') {
			return `
				<div class="galDesc">
					<img src="Media/FlickeringLampController/Software_FlickerBugSoft1.jpg" class="galImg" alt="Flicker Bug Soft1">
				</div>		
			`;
			/* -------------------------- Simba One Control Software ------------------------------------------------------ */
		} if (thisID === 'jsSlide2') {
			return `
				<div class="galDesc">
					<img src="Media/SimbaOneControlSoftware/Slide2.JPG" class="galImg" alt="Slide 2">
				</div>		
			`;
		} if (thisID === 'jsWindow2') {
			return `
				<div class="galDesc">
					<img src="Media/SimbaOneControlSoftware/Window2.jpg" class="galImg" alt="Window 2">
				</div>		
			`;
			/* --------------------------- Simba Two ----------------------------------------------------- */
		} if (thisID === 'jsSimbaTwoBV1') {
			return `
				<div class="galDesc">
					<img src="Media/SimbaTwoBoard/SimbaTwoBV1.JPG" class="galImg" alt="Simba Two BV1">
				</div>		
			`;
		} if (thisID === 'jsSimbaTwoBV2') {
			return `
				<div class="galDesc">
					<img src="Media/SimbaTwoBoard/SimbaTwoBV2.JPG" class="galImg" alt="Simba Two BV2">
				</div>		
			`;
		} if (thisID === 'jsSimbaTwoLayoutBV') {
			return `
				<div class="galDesc">
					<img src="Media/SimbaTwoBoard/SimbaTwoLayoutBV.JPG" class="galImg" alt="Simba Two Layout BV">
				</div>		
			`;
		} if (thisID === 'jsSimbaTwoTV1') {
			return `
				<div class="galDesc">
					<img src="Media/SimbaTwoBoard/SimbaTwoTV1.JPG" class="galImg" alt="Simba Two TV1">
				</div>		
			`;
		} if (thisID === 'jsSimbaTwoTV2') {
			return `
				<div class="galDesc">
					<img src="Media/SimbaTwoBoard/SimbaTwoTV2.JPG" class="galImg" alt="Simba Two TV2">
				</div>		
			`;
		} if (thisID === 'jsSimbaTwoTV3') {
			return `
				<div class="galDesc">
					<img src="Media/SimbaTwoBoard/SimbaTwoTV3.JPG" class="galImg" alt="Simba Two TV 3">
				</div>		
			`;
		};
	};
	
	function openModal() {
		$('.jsBtn').on('click', function(event) {
			console.log(`Ran 'openModal()'`);
			event.preventDefault();
			$('.modalDiv').html(generateModalContent(this.id));
			$('.jsModal').css('display', 'block');
			return false;
		});
	};
	
	function closeModalX() {
		$('.jsClose').on('click', function(event) {
			console.log(`Ran 'closeModalX()'`);
			event.preventDefault();
			$('.jsModal').css('display', 'none');
		});
	};
	
	function closeModalBody() {
		$('.jsMain').on('click', function(event) {
			console.log(`Ran 'closeModalBody()'`);
			event.preventDefault();
			$('.jsModal').css('display', 'none');
		});
	};
	
	function initiateFunctions() {
		openModal();
		closeModalX();
		closeModalBody();
	};
	
	initiateFunctions();
	
}(jQuery));