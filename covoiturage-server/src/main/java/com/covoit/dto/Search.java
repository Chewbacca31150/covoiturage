package com.covoit.dto;

import com.covoit.model.Location;
import com.covoit.model.User;

public class Search {
	public Location getStart() {
		return start;
	}
	public void setStart(Location start) {
		this.start = start;
	}
	public Location getEnd() {
		return end;
	}
	public void setEnd(Location end) {
		this.end = end;
	}

	private Location start;
	private Location end;
}
