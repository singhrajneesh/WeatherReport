package com.training.weather;

import java.io.FileNotFoundException;
import java.io.FileReader;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.*;
import java.io.FileWriter;
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;



import com.sun.javafx.scene.paint.GradientUtils.Parser;

/**
 * Servlet implementation class Weather
 */
@WebServlet("/Weather")
public class Weather extends HttpServlet {
	private static final long serialVersionUID = 1L;
	int count=0;
	int i=0,flag=0;
	JSONArray  cities = new JSONArray();
	JSONObject  list = new JSONObject();
	
    /**0
     * @throws ParseException 
     * @throws IOException 
     * @throws FileNotFoundException 
     * @see HttpServlet#HttpServlet()
     */
	
	public void jsondata() throws FileNotFoundException, IOException, ParseException {
		
		
	}
    public Weather() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
    //This will add cities name in JSON file
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		for(i=0; i<cities.size(); i++)
		{	System.out.println(cities.get(i)+" "+request.getParameter("city"));
			if(cities.get(i).equals(request.getParameter("city"))){
				flag=1;
				
		}
		}
			if(flag!=1 && count<=9) {
			cities.add(count++,request.getParameter("city"));
			list.put("city",cities);
			String path="//home//sapient//Desktop//WeatherReport//src//com//training//weather//result.json";
		try {
			
			FileWriter jsonFileWriter = new FileWriter(path);
			jsonFileWriter.write(list.toString());
			jsonFileWriter.flush();
			jsonFileWriter.close();
			
		} catch (Exception e) {
			e.printStackTrace();
		} 		
		response.setContentType("application/json");
		response.getWriter().write(cities.toString());
		}
		
}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
	}
	}

