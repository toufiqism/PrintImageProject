package com.example.sabbirhossain.imageprinting.view;

import android.app.Activity;
import android.content.Intent;
import android.content.Context;
import android.content.res.AssetManager;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.Toast;

import com.example.sabbirhossain.imageprinting.R;
import com.example.sabbirhossain.imageprinting.utility.AppConstant;
import com.example.sabbirhossain.imageprinting.utility.AppUtils;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;

/**
 * Created by sabbirhossain on 5/17/16.
 */
public class PhotoPreviewActivity extends Activity {
    private static final String TAG = PhotoPreviewActivity.class.getSimpleName();
    Button printPhotoBtn;
    Button printIdBtn;
    private WebViewPrint webViewPrint;
    public static final String bankName = "city";
    private static final String PHOTO_TEMPLATE_HTML = bankName + "/photoTemplate.html";
    private static final String NID_TEMPLATE_HTML = bankName + "/nidTemplate.html";
    ImageView photoGrid_1;
    ImageView photoGrid_2;
    ImageView photoGrid_3;
    ImageView photoGrid_4;
    ImageView photoGrid_5;
    ImageView photoGrid_6;


    ImageView customerIdFront;
    ImageView customerIdBack;
    ImageView nomineeIdBack;
    ImageView nomineeIdFront;


    Bitmap customerImageBitmap;
    Bitmap nomineeImageBitmap;
    Bitmap customerIdBackBitmap;
    Bitmap customerIdFrontBitmap;
    Bitmap nomineeIdBackBitmap;
    Bitmap nomineeIdFrontBitmap;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_photo_preview);

        printPhotoBtn = (Button) findViewById(R.id.printPhoto);
        printIdBtn = (Button) findViewById(R.id.printId);
        Intent intent = getIntent();

        photoGrid_1 = (ImageView) findViewById(R.id.photoGrid_1);
        photoGrid_2 = (ImageView) findViewById(R.id.photoGrid_2);
        photoGrid_3 = (ImageView) findViewById(R.id.photoGrid_3);
        photoGrid_4 = (ImageView) findViewById(R.id.photoGrid_4);
        photoGrid_5 = (ImageView) findViewById(R.id.photoGrid_5);
        photoGrid_6 = (ImageView) findViewById(R.id.photoGrid_6);

        customerIdFront = (ImageView) findViewById(R.id.customerIdFrontPreview);
        customerIdBack = (ImageView) findViewById(R.id.customerIdBackPreview);
        nomineeIdFront = (ImageView) findViewById(R.id.nomineeIdFrontPreview);
        nomineeIdBack = (ImageView) findViewById(R.id.nomineeIdBackPreview);

        try {
            File customerImage = new File(AppConstant.PHOTO_IAMGE_PATH, "customerImage.png");
            File nomineeImage = new File(AppConstant.PHOTO_IAMGE_PATH, "nomineeImage.png");
            File nomineeIdFrontImage = new File(AppConstant.PHOTO_IAMGE_PATH, "nomineeIdFrontImage.png");
            File nomineeIdBackImage = new File(AppConstant.PHOTO_IAMGE_PATH, "nomineeIdBackImage.png");
            File customerIdBackImage = new File(AppConstant.PHOTO_IAMGE_PATH, "customerIdBackImage.png");
            File customerIdFrontImage = new File(AppConstant.PHOTO_IAMGE_PATH, "customerIdFrontImage.png");


            if (customerImage.exists()) {
                customerImageBitmap = BitmapFactory.decodeStream(new FileInputStream(customerImage));
                photoGrid_1.setImageBitmap(customerImageBitmap);
                photoGrid_2.setImageBitmap(customerImageBitmap);
                photoGrid_4.setImageBitmap(customerImageBitmap);
                photoGrid_5.setImageBitmap(customerImageBitmap);
            }


            if (nomineeImage.exists()) {
                nomineeImageBitmap = BitmapFactory.decodeStream(new FileInputStream(nomineeImage));
                photoGrid_3.setImageBitmap(nomineeImageBitmap);
                photoGrid_6.setImageBitmap(nomineeImageBitmap);

            }


            if (nomineeIdFrontImage.exists()) {
                nomineeIdFrontBitmap = BitmapFactory.decodeStream(new FileInputStream(nomineeIdFrontImage));
                nomineeIdFront.setImageBitmap(nomineeIdFrontBitmap);
            }


            if (nomineeIdBackImage.exists()) {
                nomineeIdBackBitmap = BitmapFactory.decodeStream(new FileInputStream(nomineeIdBackImage));
                nomineeIdBack.setImageBitmap(nomineeIdBackBitmap);

            }

            if (customerIdFrontImage.exists()) {
                customerIdFrontBitmap = BitmapFactory.decodeStream(new FileInputStream(customerIdFrontImage));
                customerIdFront.setImageBitmap(customerIdFrontBitmap);
            }

            if (customerIdBackImage.exists()) {
                customerIdBackBitmap = BitmapFactory.decodeStream(new FileInputStream(customerIdBackImage));
                customerIdBack.setImageBitmap(customerIdBackBitmap);
            }


        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }

        printPhotoBtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                printPhotoBtn.setEnabled(false);
                Toast.makeText(getApplicationContext(), "please wait", Toast.LENGTH_SHORT).show();

                try {
                    if (customerImageBitmap != null) {
                        FileHelper.saveBitmapFileToExternalCacheDirectory(PhotoPreviewActivity.this, customerImageBitmap, "customer.png");

                    }
                    if (nomineeImageBitmap != null) {
                        FileHelper.saveBitmapFileToExternalCacheDirectory(PhotoPreviewActivity.this, nomineeImageBitmap, "nominee.png");
                    }
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
                                          public void onClick(View v) {

                                              printIdBtn.setEnabled(false);
                                              Toast.makeText(getApplicationContext(), "please wait", Toast.LENGTH_SHORT).show();


                                              try {
                                                  if (customerIdFrontBitmap != null) {
                                                      FileHelper.saveBitmapFileToExternalCacheDirectory(PhotoPreviewActivity.this, customerIdFrontBitmap, "customerNIDFront.png");

                                                  }
                                                  if (customerIdBackBitmap != null) {
                                                      FileHelper.saveBitmapFileToExternalCacheDirectory(PhotoPreviewActivity.this, customerIdBackBitmap, "customerNIDBack.png");

                                                  }
                                                  if (nomineeIdFrontBitmap != null) {
                                                      FileHelper.saveBitmapFileToExternalCacheDirectory(PhotoPreviewActivity.this, nomineeIdFrontBitmap, "nomineeNIDFront.png");

                                                  }
                                                  if (nomineeIdBackBitmap != null) {
                                                      FileHelper.saveBitmapFileToExternalCacheDirectory(PhotoPreviewActivity.this, nomineeIdBackBitmap, "nomineeNIDBack.png");

                                                  }


                                                  webViewPrint = new WebViewPrint(PhotoPreviewActivity.this);
                                                  webViewPrint.print(getHtmlFile("nid"));

                                              } catch (IOException e) {
                                                  e.printStackTrace();
                                              }
                                          }
                                      }

        );


    }

    @Override
    protected void onResume() {
        super.onResume();
        printIdBtn.setEnabled(true);
        printPhotoBtn.setEnabled(true);
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

