package com.example.sabbirhossain.imageprinting.view;

import android.app.Activity;
import android.content.Context;
import android.content.res.AssetManager;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import com.example.sabbirhossain.imageprinting.R;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;

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

        printPhotoBtn = (Button) findViewById(R.id.printPhoto);
        printIdBtn = (Button) findViewById(R.id.printId);

        printPhotoBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                try {
                    Bitmap b = getBitmapFromAsset(PhotoPreviewActivity.this, "city/customerSample.png");
                    FileHelper.saveBitmapFileToExternalCacheDirectory(PhotoPreviewActivity.this, b, "customer.png");
                    b = getBitmapFromAsset(PhotoPreviewActivity.this, "city/nomineeSample.jpg");
                    FileHelper.saveBitmapFileToExternalCacheDirectory(PhotoPreviewActivity.this, b, "nominee.png");
                    webViewPrint = new WebViewPrint(PhotoPreviewActivity.this);
                    webViewPrint.print(getHtmlFile("photo"));

                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        });




    printIdBtn.setOnClickListener(new View.OnClickListener()

    {
        @Override
        public void onClick (View v){
        try {
            Bitmap b = getBitmapFromAsset(PhotoPreviewActivity.this, "city/customerNIDFrontSample.jpg");
            FileHelper.saveBitmapFileToExternalCacheDirectory(PhotoPreviewActivity.this, b, "customerNIDFront.png");
            b = getBitmapFromAsset(PhotoPreviewActivity.this, "city/customerNIDBackSample.jpg");
            FileHelper.saveBitmapFileToExternalCacheDirectory(PhotoPreviewActivity.this, b, "customerNIDBack.png");
            b = getBitmapFromAsset(PhotoPreviewActivity.this, "city/nomineeNIDFrontSample.jpg");
            FileHelper.saveBitmapFileToExternalCacheDirectory(PhotoPreviewActivity.this, b, "nomineeNIDFront.png");
            b = getBitmapFromAsset(PhotoPreviewActivity.this, "city/nomineeNIDBackSample.jpg");
            FileHelper.saveBitmapFileToExternalCacheDirectory(PhotoPreviewActivity.this, b, "nomineeNIDBack.png");
            webViewPrint = new WebViewPrint(PhotoPreviewActivity.this);
            webViewPrint.print(getHtmlFile("nid"));

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    }

    );


}

    public static Bitmap getBitmapFromAsset(Context context, String filePath) {
        AssetManager assetManager = context.getAssets();

        InputStream istr;
        Bitmap bitmap = null;
        try {
            istr = assetManager.open(filePath);
            bitmap = BitmapFactory.decodeStream(istr);
        } catch (IOException e) {
            // handle exception
        }

        return bitmap;
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

