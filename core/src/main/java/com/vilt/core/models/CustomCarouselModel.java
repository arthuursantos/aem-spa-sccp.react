package com.vilt.core.models;

import com.adobe.cq.export.json.ComponentExporter;

import java.util.List;

public interface CustomCarouselModel extends ComponentExporter {
    String getContentType();
    List<NewsModel> getNewsAssets();
    List<PlayerModel> getPlayerAssets();
}
