package com.example.sabbirhossain.imageprinting.view;

import android.app.Activity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import com.example.sabbirhossain.imageprinting.R;

import java.io.File;
import java.io.IOException;

/**
 * Created by sabbirhossain on 5/17/16.
 */
public class PhotoPreviewActivity extends Activity {
    Button printPhotoBtn;
    Button printIdBtn;
    private WebViewPrint webViewPrint;
    public static final String bankName = "city";
    private static final String PHOTO_TEMPLATE_HTML = bankName + "/photoTemplate.html";
    private static final String NID_TEMPLATE_HTML = bankName + "/nidTemplate.html";
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_photo_preview);

        printPhotoBtn= (Button) findViewById(R.id.printPhoto);
        printIdBtn= (Button) findViewById(R.id.printId);

        printPhotoBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                try {
                    webViewPrint = new WebViewPrint(PhotoPreviewActivity.this);
                    webViewPrint.print(getHtmlFile("photo"));

                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        });


        printIdBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                try {
                    webViewPrint = new WebViewPrint(PhotoPreviewActivity.this);
                    webViewPrint.print(getHtmlFile("nid"));

                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        });



    }

    private File getHtmlFile(String type) throws IOException {
        return FileHelper.createTempFileInExternalCacheDirectory(this, getHtml(type));
    }

    private String getHtml(String type) throws IOException {
        if (type.equals("nid")) {
            return new HtmlHelper(this).getHtml(NID_TEMPLATE_HTML);
        } else {
            return new HtmlHelper(this).getHtml(PHOTO_TEMPLATE_HTML);
        }
    }
}

