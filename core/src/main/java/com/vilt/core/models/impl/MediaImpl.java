package com.vilt.core.models.impl;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.vilt.core.models.MediaModel;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(
        adaptables= SlingHttpServletRequest.class,
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL,
        resourceType = MediaImpl.RESOURCE_TYPE,
        adapters = ComponentExporter.class
)
@Exporter(
        name = ExporterConstants.SLING_MODEL_EXPORTER_NAME,
        extensions = ExporterConstants.SLING_MODEL_EXTENSION
)
public class MediaImpl implements MediaModel {

    protected static final String RESOURCE_TYPE = "aem-spa-sccp/components/mediaobject";

    @ValueMapValue
    private String title;
    @ValueMapValue
    private String subtitle;
    @ValueMapValue
    private String description;
    @ValueMapValue
    private String imageReference;
    @ValueMapValue
    private String imageAlignment;

    @Override
    public String getImageAlignment() {
        return imageAlignment;
    }

    @Override
    public String getTitle() {
        return title;
    }

    @Override
    public String getSubtitle() {
        return subtitle;
    }

    @Override
    public String getDescription() {
        return description;
    }

    @Override
    public String getImageReference() {
        return imageReference;
    }
}
