package com.example.sabbirhossain.imageprinting.utility;

import android.app.ProgressDialog;
import android.bluetooth.BluetoothAdapter;
import android.content.Context;
import android.content.pm.PackageManager;
import android.content.res.AssetManager;
import android.content.res.Resources;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.drawable.BitmapDrawable;
import android.graphics.drawable.Drawable;
import android.location.Criteria;
import android.location.Location;
import android.location.LocationManager;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.net.wifi.WifiManager;
import android.os.AsyncTask;
import android.os.Environment;
import android.telephony.TelephonyManager;
import android.util.Log;
import android.widget.Toast;


import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Properties;

public class AppUtils {

    private static final String TAG = AppUtils.class.getSimpleName();
    public static final String AppName = "DOER";

    public static String LOG_FILE_NAME = "";
    public static String MOBILE_IMEI = "";

    //public static final int PHOTO_DIMENSION = 340; // 340 we use 1:1 aspect
    // ratio.
    // so width=height
    public static final int PHOTO_DIMENSION = 300;
    public static String PRINT_RECEIPT_TYPE = "";
    public static final String CHEQUE_PHOTO_PATH = "/DOER/Cropped_cheque_image.jpg";
    public static final String CHEQUE_CROPPED_IMAGE_NAME = "Cropped_cheque_image.jpg";

    public static String FOR_NEW_ACCOUNT_OPENING_OR_TRANSACTION = "";
    public static String FOR_TRANSACTION_OR_ACCOUNT_ACCTIVATE = "";
    public static String FOR_FUND_TRANSFER = "";
    public static String FOR_DEPOSIT_TYPE = "";
    public static String NETWORK_ERROR_MESSAGE = "";
    public static String BILL_COLLECTION_TOTAL_BILL = "";
    public static String BILL_COLLECTION_PBS_NAME = "";
    public static int No_OF_RETRY = 0;
    public static int No_OF_ACK_RETRY = 0;
    public static String RETRY_REQUEST_ID = "";
    public static boolean IS_RETRY = false;
    public static String IFR_REQUESt_ID = "";

    public static String FOR_AGENT_VERIFICATION = "";

    public static String SEARCH_BY = "";
    public static int number = 1;
    public static String imageName = "";
    public static String nid = "";


    public static void clearRetryInfo() {
        No_OF_RETRY = 0;
        No_OF_ACK_RETRY = 0;
        RETRY_REQUEST_ID = "";
        IS_RETRY = false;

    }

    public static byte[] drawableToByteArray(int d, Context context) {

        Drawable drawable = context.getResources().getDrawable(d);

        Bitmap bitmap = ((BitmapDrawable) drawable).getBitmap();
        ByteArrayOutputStream stream = new ByteArrayOutputStream();
        bitmap.compress(Bitmap.CompressFormat.JPEG, 100, stream);
        byte[] bitMapData = stream.toByteArray();


        return bitMapData;
    }


    public static File getChequeImageFile() {
        return getOutputFileForCheque("Cheque_Image");
    }

    public static File getCroppedChequeImageFile() {
        return getOutputFileForCheque(CHEQUE_CROPPED_IMAGE_NAME);
    }

    private static File getOutputFileForCheque(String FileNameCheque) {
        File mediaStoreageDirCheque = new File(
                Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_PICTURES), AppName);
        if (!mediaStoreageDirCheque.exists()) {
            if (!mediaStoreageDirCheque.mkdirs()) {
                PrintError("Failed to create Directory");
                return null;
            }

        }
        File mediaFileForCheque = new File(mediaStoreageDirCheque.getPath() + File.separator + FileNameCheque + ".jpg");
        if (mediaFileForCheque.exists())
            mediaFileForCheque.delete();

        return mediaFileForCheque;

    }

    public static void ShowToast(Context context, String msg) {
        Toast.makeText(context, msg, Toast.LENGTH_SHORT).show();
    }

    public static void ShowToast(Context context, String msg, int duration) {

        if (duration == 0) {
            Toast.makeText(context, msg, Toast.LENGTH_SHORT).show();
        } else if (duration == 1) {
            Toast.makeText(context, msg, Toast.LENGTH_LONG).show();

        }
    }

    public static boolean isNetworkAvailable(Context c) {
        ConnectivityManager cm = (ConnectivityManager) c.getSystemService(Context.CONNECTIVITY_SERVICE);
        NetworkInfo netInfo = cm.getActiveNetworkInfo();
        return netInfo != null && netInfo.isConnectedOrConnecting();
    }

    public static String addFractionPartInAmount(String amount) {
        return new String(amount.substring(0, amount.indexOf('.')) + ".00");

    }

    /**
     * Prints the message of an exception to log and shows a toast
     *
     * @param error error message
     */
    public static void PrintError(String error) {
        Log.d("CustomCameraModule", error);
        // AppUtils.ShowToast(context, error);
    }

    public static Boolean IsCameraAvailable(Context context) {
        return context.getPackageManager().hasSystemFeature(PackageManager.FEATURE_CAMERA);
    }

    public static File getFile(String fileName) {
        return GetNextOutputFile(fileName);
    }

    /*public static File getImageFile() {
        return GetNextOutputFile("Image");
    }*/

    public static File getCroppedImageFile() {
        if (AppConstant.customerPhotoClicked == true) {
            imageName = "customerImage.png";
        }
        if (AppConstant.nomineePhotoClicked == true) {
            imageName = "nomineeImage.png";
        }
        if (AppConstant.nomineeIdFrontClicked == true) {
            imageName = "nomineeIdFrontImage.png";
        }
        if (AppConstant.nomineeIdBackClicked == true) {
            imageName = "nomineeIdBackImage.png";
        }
        if (AppConstant.customerIdBackClicked == true) {
            imageName = "customerIdBackImage.png";
        }
        if (AppConstant.customerIdFrontClicked == true) {
            imageName = "customerIdFrontImage.png";
        }
        return GetNextOutputFile(imageName);
    }

    public static void deleteImageFolder() {
        File mediaStorageDir = new File(Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_PICTURES),
                AppName);

        if (mediaStorageDir.exists()) {

            for (File file : mediaStorageDir.listFiles()) {
                file.delete();
            }

            mediaStorageDir.delete();
        }

    }

    /**
     * Create a File for saving the image
     */
    private static File GetNextOutputFile(String fileName) {

        File mediaStorageDir = new File(Environment.getExternalStorageDirectory()
                + "/Android/data/"
                + AppName
                + "/Files");
        Log.e(TAG, "media " + mediaStorageDir.toString());
        AppConstant.PHOTO_IAMGE_PATH = mediaStorageDir.toString();
        if (!mediaStorageDir.exists()) {
            if (!mediaStorageDir.mkdirs()) {
                PrintError("failed to create directory");

                return null;
            }
        }
       /* String timeStamp = new SimpleDateFormat("ddMMyyyy_HHmm").format(new Date());
        String mImageName = "MI_" + timeStamp + ".jpg";*/

        File mediaFile = new File(mediaStorageDir.getPath() + File.separator + fileName);
        Log.e(TAG, "getPath " + mediaStorageDir.getPath() + "separator " + File.separator + "fileName " + fileName);

    /*    if (mediaFile.exists())
            mediaFile.delete();*/

        return mediaFile;
    }

    public static boolean isImageFileExist(String filePath) {

        File mediaFile = new File(filePath);
        if (mediaFile.exists())
            return true;
        else
            return false;

    }

    /**
     * functions for converting image to hex string
     */

    public static byte[] convertFileToByte(String filePath) {
        FileInputStream fileInputStream = null;

        // File file = new File("d:\\uploaded\\Redis_Cluster.pdf");
        File file = new File(filePath);

        byte[] bFile = new byte[(int) file.length()];

        try {
            // convert file into array of bytes
            fileInputStream = new FileInputStream(file);
            fileInputStream.read(bFile);
            fileInputStream.close();

            for (int i = 0; i < bFile.length; i++) {
               // System.out.print((char) bFile[i]);
            }

            //System.out.println("Done");
        } catch (Exception e) {
            e.printStackTrace();
        }

        return bFile;
    }

    public static void convertByteToFile(byte[] bytes, File file) {
        // ByteArrayOutputStream bos = new ByteArrayOutputStream();
        try {
            // File someFile = new File(filePath);
            FileOutputStream fos = new FileOutputStream(file);
            fos.write(bytes);
            fos.flush();
            fos.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static String bytesToHexString(byte[] bytes) {
        StringBuilder sb = new StringBuilder();
        for (byte b : bytes) {
            sb.append(String.format("%02x", b & 0xff));
        }
        return sb.toString();
    }

    public static final byte[] hexStringToByteArray2(final String hex) {
        byte[] bytes = new byte[(hex.length() / 2)];
        int j = 0;
        for (int i = 0; i < bytes.length; i++) {
            j = i * 2;
            String hex_pair = hex.substring(j, j + 2);
            byte b = (byte) (Integer.parseInt(hex_pair, 16) & 0xFF);
            bytes[i] = b;
        }
        return bytes;
    }

    public static Bitmap createImageFromString(String hexString) {
        // File file = getFile("image_from_server");
        Bitmap bmp = null;
        try {
            byte[] barray = hexStringToByteArray2(hexString);
            bmp = BitmapFactory.decodeByteArray(barray, 0, barray.length);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return bmp;
    }

    public static String[] getMagneticStripeInfo(String infoString) {

        String[] magInfos = infoString.split("\\^");

        return magInfos;

    }


    public static boolean isInternetAvailable(Context context) {

        boolean connected = false;
        ConnectivityManager connectivityManager = (ConnectivityManager) context
                .getSystemService(Context.CONNECTIVITY_SERVICE);
        if (connectivityManager.getNetworkInfo(ConnectivityManager.TYPE_MOBILE)
                .getState() == NetworkInfo.State.CONNECTED
                || connectivityManager.getNetworkInfo(ConnectivityManager.TYPE_WIFI)
                .getState() == NetworkInfo.State.CONNECTED) {
            // we are connected to a network
            connected = true;
        } else
            connected = false;

        return connected;
    }


    public static boolean isRightDevicePaired() {
        boolean rightDevicePaired = false;

        return rightDevicePaired;

    }

    public static void deleteCache(Context context) {
        try {
            File dir = context.getCacheDir();
            deleteDir(dir);
        } catch (Exception e) {
        }
    }

    public static boolean deleteDir(File dir) {
        if (dir != null && dir.isDirectory()) {
            String[] children = dir.list();
            for (int i = 0; i < children.length; i++) {
                boolean success = deleteDir(new File(dir, children[i]));
                if (!success) {
                    return false;
                }
            }
            return dir.delete();
        } else if (dir != null && dir.isFile())
            return dir.delete();
        else {
            return false;
        }
    }

    public static File IFRPic() {
        return getIFRPicFile(nid);
    }

    private static File getIFRPicFile(String string) {
        File IFRPicFile = new File(Environment.getExternalStorageDirectory()
                + "/Android/data/"
                + AppName
                + "/Files");


        if (!IFRPicFile.exists()) {
            if (!IFRPicFile.mkdirs()) {
                PrintError("Cant Create DIR");
                return null;
            }
        }
        File finalIFRPic = new File(IFRPicFile.getPath() + File.separator + string);
        Log.e(TAG, "final " + finalIFRPic.toString()+" sel "+File.separator+" st ");
        if (finalIFRPic.exists()) {
            finalIFRPic.delete();
        }
        return finalIFRPic;
    }


    public static File ScaledFileForCheque() {
        return getScaledFileForCheque("scaled");
    }

    private static File getScaledFileForCheque(String string) {
        // TODO Auto-generated method stub
        File mediaStorageDirCheque = new File(
                Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_PICTURES), AppName);
        if (!mediaStorageDirCheque.exists()) {
            if (!mediaStorageDirCheque.mkdirs()) {
                PrintError("Failed to create Dir");
                return null;
            }

        }
        File scaledCheque = new File(mediaStorageDirCheque.getPath() + File.separator + string + ".jpg");
        if (scaledCheque.exists()) {
            scaledCheque.delete();
        }
        return scaledCheque;
    }

    public static File ScaledFileForChequeBackFinal() {
        // TODO Auto-generated method stub
        return getScaledFileForChequeBackFinal("scaled_back_final");
    }

    private static File getScaledFileForChequeBackFinal(String strings) {
        // TODO Auto-generated method stub
        File mediaStorageDirChequeBack = new File(
                Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_PICTURES), AppName);
        if (!mediaStorageDirChequeBack.exists()) {
            if (!mediaStorageDirChequeBack.mkdirs()) {
                PrintError("Failed to create Dir");
                return null;
            }

        }
        File scaledCheque = new File(mediaStorageDirChequeBack.getPath() + File.separator + strings + ".jpg");
        if (scaledCheque.exists()) {
            scaledCheque.delete();
        }
        return scaledCheque;
    }

    public static File ScaledFileForChequeBack() {
        return getScaledFileForChequeBack("scaled_back");
    }

    private static File getScaledFileForChequeBack(String string) {

        // TODO Auto-generated method stub
        File mediaStorageDirCheque = new File(
                Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_PICTURES), AppName);
        if (!mediaStorageDirCheque.exists()) {
            if (!mediaStorageDirCheque.mkdirs()) {
                PrintError("Failed to create Dir");
                return null;
            }

        }
        File scaledCheque = new File(mediaStorageDirCheque.getPath() + File.separator + string + ".jpg");
        if (scaledCheque.exists()) {
            scaledCheque.delete();
        }
        return scaledCheque;
    }

    public static String vatPortionCalculate(double chargePlusVat) {
        double vat = getVat();

        double vatPortion = ((vat * chargePlusVat) / (vat + 100));
        DecimalFormat df = new DecimalFormat("####0.00");


        return df.format(vatPortion);
    }

    public static String chargePortionCalculate(double chargePlusVat) {
        DecimalFormat df = new DecimalFormat("####0.00");
        double vat = getVat();

        double vatPortion = ((vat * chargePlusVat) / (vat + 100));


        double chargePortion = chargePlusVat - vatPortion;

        return df.format(chargePortion);

    }


    private static double getVat() {
        //if metadata provides vat amount then get it from there if not then return 15.0
        return 15.0;
    }


}
