package com.training.weather;

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

import org.json.simple.JSONObject;

/**
 * Servlet implementation class ShowFavourite
 */
@WebServlet("/ShowFavourite")
public class ShowFavourite extends HttpServlet {
	private static final long serialVersionUID = 1L;
	JSONParser parser = new JSONParser();
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ShowFavourite() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
    //this will read data from json file to list the cities name
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		JSONObject cityname=new JSONObject();
		String path="//home//sapient//Desktop//WeatherReport//src//com//training//weather//result.json";
		try {
			cityname = (JSONObject) parser.parse(new FileReader(path));
			System.out.println(cityname);
			response.setContentType("application/json");
			response.getWriter().write(cityname.toString());
		} catch (ParseException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
