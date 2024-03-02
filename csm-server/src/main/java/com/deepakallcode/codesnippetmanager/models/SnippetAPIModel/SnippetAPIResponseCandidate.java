package com.deepakallcode.codesnippetmanager.models.SnippetAPIModel;

import java.util.ArrayList;

public class SnippetAPIResponseCandidate {
    public SnippetAPIResponseContent content;
    public String finishReason;
    public int index;
    public ArrayList<SnippetAPIResponseSafetyRating> safetyRatings;
}
