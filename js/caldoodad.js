
	function CreateCalDoodad(divName)
	{
		// create a variable that we are going to put all of the innerhtml into for the div
		var resultsHtml = "";
		
		// TODO: Test to ensure that the divname actuall exists
		
		// hid the div while we are generating the contents for it
		$('#' + divName).hide()
		
		//
		// generate the caledar table
		//
		
		// start the table
		resultsHtml += '<table class="caldoodadtop">';
		
		// generate the table headers
		resultsHtml += '<thead><tr><th class="sun">Sun</th><th class="mon">Mon</th><th class="tue">Tue</th><th class="wed">Wed</th><th class="thu">Thu</th><th class="fri">Fri</th><th class="sat">Sat</th> </tr></thead>';
		
		// start the body
		resultsHtml += '<tbody>';
		
		// keep track of our days
		var dayCount = 0;
		
		// rows
		for (var i=0; i<6; i++)
		{
			// create the row
			resultsHtml += '<tr>';
		
			// columns
			for(var j=0; j<7; j++)
			{
				resultsHtml += '<td class="day" id="day_' + dayCount + '"></td>';
				
				dayCount++;
			}
			
			// end the row
			resultsHtml += '</tr>';
		}
		
		// end the table
		resultsHtml += "</table>";
		
		$('#' + divName).html(resultsHtml);
		$('#' + divName).show();
		
		// now we need to populate the table with some data
		
		
	}